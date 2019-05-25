

const {ccclass, property} = cc._decorator;
import { UIComponent } from "../../Utils/UIKiller/UIComponent";

@ccclass
export default class NewClass extends UIComponent {

    protected CacheGuidePath: string = "cacheGuide"

    onEnable() {
        this.init();
    }

    init() {

    }
}
