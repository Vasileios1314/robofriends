import React from "react";

const Scroll = (props) => {
return (
    // style in jsx within double {{}}= js=>obj=>style
    <div style = {{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
        {props.children}
    </div>
)
}

export default Scroll;