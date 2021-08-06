import { Placement } from './utils';
export default function createFiber(vnode, returnFiber) {
    const newFiber = {

        type: vnode.type,
        key: vnode.key,
        props: vnode.props,
        // 第一个子fiber
        child: null,
        // 下一个兄弟fiber
        sibling: null,
        // 父fiber
        return: returnFiber,
        // 标记fiber提交的是什么操作  插入 更新 删除
        flags: Placement,
        // 如果是原生标签 dom节点
        // 类组件 类实例
        stateNode: null,


    }
    return newFiber;
}