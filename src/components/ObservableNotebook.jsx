import React, { useRef, useEffect } from 'react';
import { Runtime, Inspector, Library } from '@observablehq/runtime';

const mountId = 'mdx-container-div';

const stdlib = new Library();

const library = Object.assign({}, stdlib, { width: width_mdx });

function width_mdx() {
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

function ObservableNotebook({ notebook, cells, customClassName }) {
    const refs = useRef(cells.map(() => React.createRef()));

    useEffect(() => {
        const runtime = new Runtime(library);
        runtime.module(notebook, name => {
            const index = cells.indexOf(name);
            if (index !== -1) {
                return new Inspector(refs.current[index].current);
            }
        });
        return () => runtime.dispose();
    }, [notebook, cells]);

    return (
        <div className={customClassName}>
            {refs.current.map((ref, index) => (
                <div key={index} ref={ref} />
            ))}
        </div>
    );
}

export default ObservableNotebook;
