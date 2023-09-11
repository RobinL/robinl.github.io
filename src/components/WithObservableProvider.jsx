import React from 'react';
import { ObservableProvider } from './ObservableNotebook';

export default function WithObservableProvider({ notebook, children }) {
    return (
        <ObservableProvider notebook={notebook}>{children}</ObservableProvider>
    );
}
