import createFiber from "./createFiber";

function ReactDOMRoot(internalRoot) {
    this._internalRoot = internalRoot;
}
ReactDOMRoot.prototype.render = function () {
    const root = this._internalRoot;
    updateContainer(children, root);

}
// container 为dom节点
function createRoot(container) {
    const root = { containerInfo: container };
    return new ReactDOMRoot(root);
}

function updateContainer(element, root){
    console.log("updateContainer",element);
    const {containerInfo} = root;
    const fiber = createFiber(element,{
        type: containerInfo.nodeName.toLocaleLowerCase(),
        stateNode:containerInfo,
    })
    // 更新 fiber


}
export default { createRoot };