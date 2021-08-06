import { isFn, isStr,Placement } from "./utils";
import { updateFunctionComponent, updateHostComponent } from './ReactFiberReconciler'


// wip  work in proress 当前正在工作中的
let wipRoot = null;
let wip = null;

export function scheduleUpdateOnFiber(fiber) {
    wipRoot = fiber;
    wip = fiber;
}
function performUnitOfWork() {
    // 处理当前的任务
    const { type } = wip
    if (isStr(type)) {
        updateHostComponent(wip);
    }else if(isFn(type)){
        updateFunctionComponent(wip)
    }

    // 处理下一个任务
    // 深度优先遍历
    if (wip.child) {
        wip = wip.child;
        return;
    }
    let next = wip;
    while (next) {

        if (next.sibling) {
            wip = next.sibling;
            return;
        }
        next = next.return;
    }
    wip = null;
}
function workLoop(IdleDeadline) {
    while (wip && IdleDeadline.timeRemaining() > 0) {
        performUnitOfWork();
    }
    if (!wip && wipRoot) {
        commitRoot();
    }


}

requestIdleCallback(workLoop);

function commitRoot() {
    commitWorker(wipRoot);
    wipRoot = null;
}

function commitWorker(wip){
    if(!wip){
        return;
    }
    // 提交 自己
    const {flags ,stateNode} = wip;
    // 父 dom 节点
    let parentNode = getParentNode(wip.return);
    if(flags & Placement && stateNode){
        parentNode.appendChild(stateNode);
    }

    // 提交 child
    commitWorker(wip.child);
    // 提交 sibling
    commitWorker(wip.sibling);
}
function getParentNode(wip){
    let tem = wip;
    while(tem){
        if(tem.stateNode){
            return tem.stateNode;
        }
        tem = tem.return;
    }
}