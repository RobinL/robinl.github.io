import React from 'react'
import { LayoutPost } from "../layouts"
import ObeservableNotebookDiv from "./observable_div"



let ObservablePage = (define, output_order=[]) => (
    <LayoutPost>
        <ObeservableNotebookDiv define={define} output_order={output_order}/>
    </LayoutPost>
)

export default ObservablePage