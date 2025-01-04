import React from "react";

const Memo =React.memo(({count})=>{
    console.log("Child Component Rendered")

    return <div>Dependency of Count 1 only Count 1 from Memo is "{count}"</div>
})
export default Memo;