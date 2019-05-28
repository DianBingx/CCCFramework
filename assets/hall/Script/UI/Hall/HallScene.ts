
const { ccclass, property } = cc._decorator;
import { UIComponent } from "../../Utils/UIKiller/UIComponent";


@ccclass
export default class HallScene extends UIComponent {


    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    onEnable() {
        this.init();
    }

    init() {
    }

    onCreateRoomTouchStart() {
        console.log("创建房间");
    }

    onAddRoomTouchStart() {
        console.log("加入房间");
    }

}
