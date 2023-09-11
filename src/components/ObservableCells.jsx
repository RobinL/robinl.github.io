import React, {
    useRef,
    useEffect,
    createContext,
    useContext,
    useState,
} from 'react';
import { Runtime, Inspector, Library } from '@observablehq/runtime';

const ObservableRuntimeContext = createContext(null);

const mountId = 'mdx-container-div';

const stdlib = new Library();

const library = Object.assign({}, stdlib, { width: width_cells });

function width_cells() {
    return stdlib.Generators.observe(notify => {
        let width1 = notify(document.getElementById(mountId).clientWidth);
        function resized() {
            let width2 = document.getElementById(mountId).clientWidth;
            if (width2 !== width1) notify((width1 = width2));
        }

        window.addEventListener('resize', resized);
        return () => window.removeEventListener('resize', resized);
    });
}

export function ObservableProvider({ notebook, children }) {
    const [sharedRefs, setSharedRefs] = useState({});
    const runtime = new Runtime(
        Object.assign({}, new Library(), { width: width_cells })
    );

    useEffect(() => {
        runtime.module(notebook, name => {
            if (sharedRefs[name]) {
                return new Inspector(sharedRefs[name]);
            }
        });
        return () => runtime.dispose();
    }, [runtime, sharedRefs, notebook]);

    return (
        <ObservableRuntimeContext.Provider value={{ setSharedRefs }}>
            {children}
        </ObservableRuntimeContext.Provider>
    );
}

export function ObservableCell({ cellName, styles }) {
    const ref = useRef(null);
    const { setSharedRefs } = useContext(ObservableRuntimeContext);

    useEffect(() => {
        setSharedRefs(prevRefs => ({ ...prevRefs, [cellName]: ref.current }));
    }, [cellName, setSharedRefs]);

    return <div ref={ref} style={styles} />;
}

export function WithObservableProvider({ notebook, children }) {
    return (
        <ObservableProvider notebook={notebook}>{children}</ObservableProvider>
    );
}
