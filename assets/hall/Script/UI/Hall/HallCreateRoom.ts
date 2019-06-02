

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

const gameWanfas = {
    // PT_UNDEFINE: 0,
    1: '自模',// 
    2: '点炮胡',// (可抢杠胡)
    3: '抢杠胡',// 
    4: '红中赖子',// 红中赖子
    5: '可胡七对',// '可胡七对'
    6: '庄闲(算分)',// 庄闲(算分)
    7: '抓2鸟',// 抓2鸟
    8: '抓4鸟',// 抓4鸟
    9: '抓6鸟',// 抓6鸟
    10: '2人',// 2人
    11: '3人',// 3人
    12: '带风',// 带风
    13: '可以吃',// 可以吃
    14: '抓2鸟(翻倍)',// 抓2鸟(翻倍)
    15: '庄闲翻倍',// 庄闲翻倍
    16: '地胡',
    17: '起手四个癞子',
    18: '没有红中',
    19: 'ganghu2',
    20: '十三幺',
    21: '风一色',
    22: '门清清一色',
    23: '扎码',// 扎码
    24: '扎3码',// 扎3码
    25: '扎4码',// 扎4码
    26: '飘|飘分',// 飘|飘分
    27: '金鸟',// 金鸟

    // 常德
    28: 28,//常德荒庄荒杠
    29: 29,//常德荒庄不荒杠
    30: 30,//常德抢杠胡算码
    31: 31,//常德抢杠胡算码
    32: 32,//159奖码
    33: 33,//摸几奖几
    34: 34,//杠随胡
    35: 35,//上王
    36: 36,//下王/衡阳王霸
    38: 38,//选2美
    39: 39,//选3美
    40: 40,//选3美

    // 益阳
    46: '飞1鸟',//飞1鸟
    47: '飞2鸟',//飞2鸟
    48: '48',//飞3鸟
    49: '49',//飞4鸟
    50: '50',//飞5鸟
    51: '51',//飞6鸟
    52 :'青平胡',

    56: '报听',//报听
    57: '57',//门清|门清需要258做将|门清需要258做将
    58: '门清将将胡',//门清将将胡
    59: '门清不需258做将',//门清不需258做将
    60: '缺一门',//,//缺一门
    61: '48番',//48番
    62: '96番',//96番
    63: '四连冠',//四连冠
    64: '中途四喜',//中途四喜
    65: '缺一色',//缺一色
    66: '板板胡',// 板板胡
    67: '四喜',// 四喜
    68: '六六顺',// 六六顺
    69: '金童玉女',// 金童玉女
    70: '将一枝花',//将一枝花
    71: '三同',//三同
    72: '节节高',//节节高
    73: '中途六六顺',//中途六六顺

    1000: '托管30秒',//托管30秒
    1001: '托管30秒',//托管30秒
    1002: '托管120秒',//托管120秒

    2000: '胡牌提示',//胡牌提示

    3000: '连开2把',//连开2把
    3001: '连开3把',//连开3把
    3002: '连开4把',//连开4把
    3003: '连开可选',//连开可选
}

@ccclass
export default class HallCreateRoom extends UIComponent {

    @property(cc.Node)
    gameTable: cc.Node;

    @property(cc.Node)
    gameTableContent: cc.Node;

    @property(cc.Node)
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
                'gameNum': 'gameNumItem_|0|1|1:2',
                'gamePlayer': 'gamePlayerItem_|1|1|18:16',
                'gameOptional': 'gameOptionalItem_|0|0|5:20',
                'gameWanfa': 'gameWanfaItem_|1|0|46:47:48:49:50:52:70:73:69:51',
                'gameZhuaniao': 'gameZhuaniaoItem_|0|0|8:9:10',
                'gameFengding': 'gameFengdingItem_|1|0|51',
                'gameTuoguan': 'gameTuoguanItem_|0|0|1000:1001:1002',
                'gameLiankai': 'gameLiankaiItem_|0|0|3000:3001:3002:3003',
                'gameHupaiTip': 'gameHupaiTipItem_|0|0|2000',
            }
        }
        this.instantiateTable(data);
        let Historydata = {
            'playTypes': [1, 1, 3, 10],
            'huTypes': [2, 3, 4],
            'numOfGame': 1,
            'roomSource': 0,
            'clubId': 0,
            'gameType': 1,
            'gameModel': 1
        }
    }

    //data  
    instantiateTable(data_t) {
        console.log(data_t[1]);
        let data = data_t[1];
        for (let n = 0; n < 9; n++) {
            if (data[gameTables[n]]) {
                let gameNum = cc.instantiate(this.gameTableContent);
                gameNum.name = gameTables[n];
                this.gameTable.addChild(gameNum);
                gameNum.active = true;
                let tb = data[gameTables[n]].split('|');
                let content = gameNum.getChildByName('content');
                let b_toggleSprite = content.getComponent(cc.ToggleContainer);
                if (tb[1] == 0) {
                    b_toggleSprite.allowSwitchOff = false;
                } else {
                    b_toggleSprite.allowSwitchOff = true;
                }
                let tbWanfa = tb[3].split(':');
                for (let i = 0; i < tbWanfa.length; i++) {
                    let gameItem = cc.instantiate(this.gameItem);
                    gameItem.name = tb[0] + tbWanfa[i];
                    content.addChild(gameItem);
                    // let toggle = gameItem.getChildByName('toggle');
                    let Background = gameItem.getChildByName('Background');
                    let b_toggleSprite = Background.getComponent(cc.Sprite);
                    let checkmark = gameItem.getChildByName('checkmark');
                    let c_toggleSprite = checkmark.getComponent(cc.Sprite);
                    if (tb[2] == 0) {
                        b_toggleSprite.spriteFrame = this.backgroundSpriteFrame[0];
                        c_toggleSprite.spriteFrame = this.checkmarkSpriteFrame[0];
                    } else {
                        b_toggleSprite.spriteFrame = this.backgroundSpriteFrame[1];
                        c_toggleSprite.spriteFrame = this.checkmarkSpriteFrame[1];
                    }
                    let wanfaLabel = gameItem.getChildByName('wanfaLabel');
                    let Label = wanfaLabel.getComponent(cc.Label);
                    cc.log(tbWanfa[i]);
                    Label.string = gameWanfas[tbWanfa[i]];
                    gameItem.active = true;
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
        for (let n = 0; n < 9; n++) {
            let gameNumContent = this.gameTable.getChildByName(gameTables[n]);
            if (gameNumContent) {
                let content = gameNumContent.getChildByName('content');
                for (let i = 0; i < content.childrenCount; i++) {
                    let item = content.children[i];
                    let itemName = item.name;
                    let _Num = itemName.indexOf("_");
                    let itemID = itemName.substr(_Num);
                    // let toggle = item.getChildByName('toggle');
                    let toggle_script = item.getComponent(cc.Toggle);
                    if (toggle_script.isChecked) {
                        data = this.setupCreateRoomData(gameTables[n], itemID, data);
                    }
                }
            }
        }
        console.log(data);
    }

    setupCreateRoomData(type, id, data) {

        if (type == gameTables[0]) {
            data.playTypes.push(id);
        }
        if (type == gameTables[2]) {
            data.numOfGame = id;
        }
        return data;
    }
}
