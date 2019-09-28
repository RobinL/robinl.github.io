import React from 'react'
import Layout from "../layouts"
import ObeservableNotebookDiv from "./observable_div"

let ObservablePage = (define, output_order=[]) => (
    <Layout>
        <ObeservableNotebookDiv define={define} output_order={output_order}/>
    </Layout>
)

export default ObservablePage