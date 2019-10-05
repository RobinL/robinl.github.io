import React from "react"

function MyData(props) {

    let mydata = props.mydata
    return (
        <div>
            {mydata.map(d => <p>{JSON.stringify(d)}</p>)}
        </div>
    )
}

export default MyData