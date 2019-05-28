

const { ccclass, property } = cc._decorator;
import { UIComponent } from "../../Utils/UIKiller/UIComponent";

@ccclass
export default class NewClass extends UIComponent {

    protected CacheGuidePath: string = "cacheGuide"

    onEnable() {
        this.init();
    }

    // [[
    //     选项对照：1：8局， 2：16局， 3：自摸胡，4：点炮胡（可抢杠胡），5：庄闲（算分），6：可胡七对，7：红中赖子，8：抓2鸟，9：抓4鸟，10：抓6鸟，11：带风，12：可以吃，13：庄闲翻倍，14：抓2鸟（翻倍）15：3人长沙，16：4人，17：3人，18：2人，19：红中，20：飘，21：金鸟，22：抢杠胡奖码，23：荒庄荒杠，24：奖2码，25：奖4码，26：奖6码，27：159奖码，28：摸几奖几，29：杠随胡，30：上王，31：下王，32：上下王，33：选2美，34：选3美，35：选4美，36：报听，37：门清，38：门清碰碰胡（可接炮），39：抓鸟，40：飞鸟， 41：48番， 42：96番 43：4连冠 44:王霸牌 45:窝窝鸟, 46:六六顺， 47：缺一色，48：板板胡，49：大四喜，50：节节高，51：三同，52：一枝花，53：中途四喜，54：中鸟加分（1鸟1分），55：中鸟翻倍，56：将将胡（必须自摸），57：清一色可吃，58：单鸟（倍），59：不扎鸟
    // ]]

    init() {
        let data = {
            '1': {
                'gameNum': 'gameNumItem_|1:2',
                'gamePlayer': 'gamePlayerItem_|18:16',
                'gameOptional': 'gameOptionalItem_|5:20',
                'gameWanfa': 'gameWanfaItem_|46:47:48:49:50:52:53:70:73:69:51',
                'gameZhuaniao': 'gameZhuaniaoItem_|54:55:8:9:10',
                'gameFengding': 'gameFengdingItem_|54',
                'gameTuoguan': 'gameTuoguanItem_|1000:1001:1002',
                'gameLiankai': 'gameLiankaiItem_|3000:3001:3002:3003',
                'gameHupaiTip': 'gameHupaiTipItem_|2000',
            }
        }
    }
}
