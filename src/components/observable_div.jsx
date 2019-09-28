import React, { Component } from 'react';

import { Runtime, Inspector } from '@observablehq/runtime';

const mountId = 'observable-mount';

function get_output_id_from_name(name) {
    let name2 = name.replace("viewof ", "")
    return "output__" + name2
}

class ObeservableNotebookDiv extends Component {

    componentDidMount() {

        const define = this.props.define;
        const output_order = this.props.output_order;
        const mount_node = document.getElementById(mountId);

        // Add a div for each output cell in the order specified in output_order

        output_order.forEach(d => {
            let div = document.createElement("div");
            let output_id = get_output_id_from_name(d)
            div.setAttribute("id", output_id)
            mount_node.append(div);
        })

        // See https://github.com/observablehq/runtime  for more info about the following code

        const runtime = new Runtime();



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
            const runtime2 = new Runtime();
            runtime2.module(define, Inspector.into(mount_node));
        }
    }

    render() {
        return (<div id={mountId} style={{ textAlign: 'left' }}> </div>);
    }

}

export default ObeservableNotebookDiv;