import React, { Component } from 'react';

import obsdivStyles from "./obsdiv.module.css"

import styled from "@emotion/styled"
// import { rhythm } from "../utils/typography"

import { Runtime, Inspector, Library } from '@observablehq/runtime';

const mountId = 'observable-mount';

function get_output_id_from_name(name) {
    let name2 = name.replace("viewof ", "")
    return "output__" + name2
}

const stdlib = new Library;

const library = Object.assign({}, stdlib, { width });

function width() {

    return stdlib.Generators.observe(notify => {
        let width = notify(document.getElementById(mountId).clientWidth);
        function resized() {
            let width1 = document.getElementById(mountId).clientWidth;
            if (width1 !== width) notify(width = width1);
        }

        window.addEventListener("resize", resized);
        return () => window.removeEventListener("resize", resized);
    });
}



const MountDiv = styled(`div`)`
    margin-bottom: 0.2rem;
`

const StyledDiv = styled(`div`)`
margin-bottom: 0.2rem;
`

function NotebookCells(props) {

    return (
        <StyledDiv>

            {props.output_order.map((output_name) => (<div id={get_output_id_from_name(output_name)}
            key={get_output_id_from_name(output_name)}
            className={obsdivStyles.parent}></div>))}
        </StyledDiv>
    )

}



class ObeservableNotebookDiv extends Component {

    componentDidMount() {
        const define = this.props.define;
        const output_order = this.props.output_order;


        // See https://github.com/observablehq/runtime  for more info about the following code

        const runtime = new Runtime(library);

        if (output_order.length > 0) {

            runtime.module(define, name => {

                function get_output_node(name) {
                    let output_id = get_output_id_from_name(name)
                    let output_node = document.getElementById(output_id);
                    return output_node
                }

                return {
                    pending() {

                        if (output_order.includes(name)) {
                            get_output_node(name).classList.add("running")
                        }

                    },
                    fulfilled(value) {

                        if (output_order.includes(name)) {
                            let output_node = get_output_node(name)
                            get_output_node(name).classList.remove("running")
                            output_node.innerHTML = null
                            output_node.append(value)
                        }

                    },
                    rejected(error) {

                        if (output_order.includes(name)) {
                            let output_node = get_output_node(name)
                            get_output_node(name).classList.remove("running")
                            get_output_node(name).classList.add("error")
                            output_node.innerHTML = null;
                            output_node.append(error)
                        }

                    }
                };
            });
        }

        if (output_order.length === 0) {  // If no output order specified, just dump whole notebook into mount node
            const runtime2 = new Runtime(library);
            const mount_node = document.getElementById(mountId);
            runtime2.module(define, Inspector.into(mount_node));
        }
    }

    render() {
        const output_order = this.props.output_order;


        // Add a div for each output cell in the order specified in output_order
        return (<MountDiv id={mountId}>
            <NotebookCells output_order={output_order} />
        </MountDiv>);
    }

}

export default ObeservableNotebookDiv;