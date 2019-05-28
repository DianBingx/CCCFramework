
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

    _onCreateRoomTouchStart() {
        console.log("创建房间");
    }

    _onAddRoomTouchStart() {
        console.log("加入房间");
    }

}
