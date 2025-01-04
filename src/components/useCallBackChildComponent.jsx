const UseCallBackChildComponent=({onClickFromParent, count2})=>{

    console.log("Child rendered for useCallBack");

    return <button onClick={onClickFromParent}>Click Me :: I am in Child Component for useCallback</button>;

}

export default UseCallBackChildComponent;