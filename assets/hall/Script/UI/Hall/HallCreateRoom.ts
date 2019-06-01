

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
export default class HallCreateRoom extends UIComponent {

    @property([cc.Node])
    gameTable: cc.Node;

    @property([cc.Node])
    gameContent: cc.Node;

    @property([cc.Node])
    gameItem: cc.Node;

    @property([cc.SpriteFrame])
    backgroundSpriteFrame: cc.SpriteFrame[] = [];

    @property([cc.SpriteFrame])
    checkmarkSpriteFrame: cc.SpriteFrame[] = [];

    protected CacheGuidePath: string = "cacheGuide"

    protected _gameNumList: cc.Node[] = [];
    protected _gamePlayerList: cc.Node[] = [];
    protected _gameOptionalList: cc.Node[] = [];
    protected _gameWanfaList: cc.Node[] = [];
    protected _gameZhuaniaoList: cc.Node[] = [];
    protected _gameFengdingList: cc.Node[] = [];
    protected _gameTuoguanList: cc.Node[] = [];
    protected _gameLiankaiList: cc.Node[] = [];
    protected _gameHupaiTipList: cc.Node[] = [];

    onEnable() {
        this.init();
    }

    init() {
        let data = {
            '1': {
                'gameNum': 'gameNumItem_|0|0|1:2',
                'gamePlayer': 'gamePlayerItem_|1|0|18:16',
                'gameOptional': 'gameOptionalItem_|0|0|5:20',
                'gameWanfa': 'gameWanfaItem_|1|0|46:47:48:49:50:52:53:70:73:69:51',
                'gameZhuaniao': 'gameZhuaniaoItem_|0|0|54:55:8:9:10',
                'gameFengding': 'gameFengdingItem_|1|0|54',
                'gameTuoguan': 'gameTuoguanItem_|0|0|1000:1001:1002',
                'gameLiankai': 'gameLiankaiItem_|0|0|3000:3001:3002:3003',
                'gameHupaiTip': 'gameHupaiTipItem_|0|0|2000',
            }
        }
        this.instantiateTable(data);
        let Historydata = {
            'playTypes': [1,1,3,10],
            'huTypes': [2,3,4],
            'numOfGame': 1,
            'roomSource': 0,
            'clubId': 0,
            'gameType': 1,
            'gameModel': 1
        }
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
                let b_toggleSprite = gameNum.getComponent(cc.ToggleContainer);
                if(tb[1] == 0){
                    b_toggleSprite.allowSwitchOff = false;
                }else{
                    b_toggleSprite.allowSwitchOff = true;
                }
                let tbWanfa = tb[3].split(':');
                for (let i = 0; i < tbWanfa.length; i++) {
                    let gameItem = cc.instantiate(this.gameItem);
                    gameItem.name = tb[0] + tbWanfa[i];
                    gameNum.addChild(gameItem);
                    let toggle = gameItem.getChildByName('toggle');
                    let Background = toggle.getChildByName('Background');
                    let b_toggleSprite = Background.getComponent(cc.Sprite);
                    let checkmark = toggle.getChildByName('checkmark');
                    let c_toggleSprite = checkmark.getComponent(cc.Sprite);
                    if(tb[2] == 0){
                        b_toggleSprite.spriteFrame = this.backgroundSpriteFrame[0];
                        c_toggleSprite.spriteFrame = this.checkmarkSpriteFrame[0];
                    }else{
                        b_toggleSprite.spriteFrame = this.backgroundSpriteFrame[1];
                        c_toggleSprite.spriteFrame = this.checkmarkSpriteFrame[1];
                    }
                    let wanfaLabel = gameItem.getChildByName('wanfaLabel');
                    let Label = wanfaLabel.getComponent(cc.Label);
                    // Label.string = 
                }
            }
        }
    }

    _onBtnCreateRoomTouchStart() {
        let data = {
            'playTypes': [],
            'huTypes': [],
            'numOfGame': 0,
            'roomSource': 0,
            'clubId': 0,
            'gameType': 0,
            'gameModel': 0
        }
        for (let n = 0; n < 9; n++){
            let gameNumContent = this.gameTable.getChildByName(gameTables[n]);
            if(gameNumContent){
                for(let i = 0;i<gameNumContent.childrenCount;i++){
                    let item = gameNumContent.children[i];
                    let itemName = item.name;
                    let _Num=itemName.indexOf("_");
                    let itemID = itemName.substr(_Num);
                    let toggle = item.getChildByName('toggle');
                    let toggle_script = toggle.getComponent(cc.Toggle);
                    if(toggle_script.isChecked){
                        data = this.setupCreateRoomData(gameTables[n],itemID,data);
                    }
                }
            }
        }
        console.log(data);
    }

    setupCreateRoomData(type,id,data){
        
        if(type == gameTables[0]){
            data.playTypes.push(id);
        }
        if(type == gameTables[2]){
            data.numOfGame = id;
        }
        return data;
    }
}
