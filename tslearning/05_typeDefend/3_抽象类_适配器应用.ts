interface MouseListenerProcess {
    mouseReleased(e: any): void // 鼠标按钮在组件释放时调用
    mouseProcessed(e: any): void // 鼠标按钮在组件按下时调用
    mouseEntered(e: any): void // 鼠标进入到组件上调用
    mouseClicked(e: any): void // 鼠标按钮在组件按下并且释放时调用
    mouseExited(e: any): void // 鼠标离开组件时调用
}

abstract class MyMouseListenerProcessAdapter implements MouseListenerProcess {
    mouseReleased(e: any): void {
        throw new Error('Method not implemented.');
    }
    mouseProcessed(e: any): void {
        throw new Error('Method not implemented.');
    }
    mouseEntered(e: any): void {
        throw new Error('Method not implemented.');
    }
    abstract mouseClicked(e: any): void
    abstract mouseExited(e: any): void

}
class MyMouseListenerProcess extends MyMouseListenerProcessAdapter {
    mouseClicked(e: any): void {
        throw new Error('Method not implemented.');
    }
    mouseExited(e: any): void {
        throw new Error('Method not implemented.');
    }

}