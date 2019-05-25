
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
        const createRoom: cc.Button = this._createRoom.$Button;
        const addRoom: cc.Button = this._addRoom.$Button;

        let clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "HallScene";
        clickEventHandler.handler = "createRoomUI";
        clickEventHandler.customEventData = "";
        createRoom.clickEvents.push(clickEventHandler)

        let clickEventHandler_add = new cc.Component.EventHandler();
        clickEventHandler_add.target = this.node;
        clickEventHandler_add.component = "HallScene";
        clickEventHandler_add.handler = "addRoomUI";
        clickEventHandler_add.customEventData = "";
        addRoom.clickEvents.push(clickEventHandler_add)
    }

    createRoomUI() {
        console.log("创建房间");
    }

    addRoomUI() {
        console.log("加入房间");
    }

}
