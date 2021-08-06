export default function createFiber (vnode, returnFiber){
    const newFiber = {
        // 
        // 第一个子fiber
        child:null,
        // 下一个兄弟fiber
        sibling:null,
        // 父fiber
        return: returnFiber,

        // 

        
    }
    return newFiber;
}