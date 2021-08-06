
let currentlyRendingFiber = null;
let workInProgressHook = null;


export function updateWorkInProgressHook(){
    let hook;


}



export function userReducer(reducer, initalState){
    const hook = updateWorkInProgressHook();
    const dispatch = () =>{
        console.log("omg");
    };
    return [initalState, dispatch]
}