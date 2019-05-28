

const { ccclass, property } = cc._decorator;
import { UIComponent } from "../../Utils/UIKiller/UIComponent";

const gameTables = {
    0: 'gameNum',
    1: 'gamePlayer',
    2: 'gameOptional',
    3: 'gameWanfa',
    4: 'gameZhuaniao',
    5: 'gameFengding',
    6: 'gameTuoguan',
    7: 'gameLiankai',
    8: 'gameHupaiTip',
}

@ccclass
export default class NewClass extends UIComponent {

    @property([cc.Node])
    gameTable: cc.Node;

    @property([cc.Node])
    gameContent: cc.Node;

    @property([cc.Node])
    gameItem: cc.Node;

    @property([cc.SpriteFrame])
    toggleSpriteFrame: cc.SpriteFrame[] = [];

    protected CacheGuidePath: string = "cacheGuide"

    onEnable() {
        this.init();
    }

    init() {
        let data = {
            '1': {
                'gameNum': 'gameNumItem_|0|1:2',
                'gamePlayer': 'gamePlayerItem_|0|18:16',
                'gameOptional': 'gameOptionalItem_|0|5:20',
                'gameWanfa': 'gameWanfaItem_|0|46:47:48:49:50:52:53:70:73:69:51',
                'gameZhuaniao': 'gameZhuaniaoItem_|0|54:55:8:9:10',
                'gameFengding': 'gameFengdingItem_|0|54',
                'gameTuoguan': 'gameTuoguanItem_|0|1000:1001:1002',
                'gameLiankai': 'gameLiankaiItem_|0|3000:3001:3002:3003',
                'gameHupaiTip': 'gameHupaiTipItem_|0|2000',
            }
        }
        this.instantiateTable(data);
    }

    //data  
    instantiateTable(data) {
        console.log(data[1]);
        for (let n = 0; n < 9; n++) {
            if (data[gameTables[n]]) {
                let gameNum = cc.instantiate(this.gameContent);
                gameNum.name = gameTables[n];
                this.gameTable.addChild(gameNum);
                let tb = data[gameTables[n]].split('|');
                let tbWanfa = tb[2].split(':');
                for (let i = 0; i < tbWanfa.length; i++) {
                    let gameItem = cc.instantiate(this.gameItem);
                    gameItem.name = tb[0] + tbWanfa[i];
                    gameNum.addChild(gameItem);
                    let toggle = gameItem.getChildByName('toggle');
                    let toggleSprite = toggle.getComponent(cc.Sprite);
                    if(tb[1] == 0){
                        toggleSprite.spriteFrame = this.toggleSpriteFrame[0];
                    }else{
                        toggleSprite.spriteFrame = this.toggleSpriteFrame[1];
                    }
                    let wanfaLabel = gameItem.getChildByName('wanfaLabel');
                    let Label = wanfaLabel.getComponent(cc.Label);
                    // Label.string = 
                }
            }
        }
    }
}
