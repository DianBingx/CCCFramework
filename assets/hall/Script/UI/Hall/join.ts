// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}


// # 玩法
// class GamePlayType:
// 	PT_UNDEFINE = 0
// 	PT_ZIMOHU = 1  # 自模
// 	PT_DIANPAOHU = 2  # 点炮胡(可抢杠胡)
// 	PT_QIANGGANGHU = 3  # 抢杠胡
// 	PT_HONGZHONG = 4  # 红中赖子
// 	PT_KEHUQIDUI = 5  # 可胡七对
// 	PT_ZHUANGXIANSUANFEN = 6  # 庄闲(算分)
// 	PT_ZHUANIAO2 = 7  # 抓2鸟
// 	PT_ZHUNIAO4 = 8  # 抓4鸟
// 	PT_ZHUANIAO6 = 9  # 抓6鸟
// 	PT_TWOPLAYER = 10  # 2人
// 	PT_THREEPLAYER = 11  # 3人
// 	PT_DAIFENG = 12  # 带风
// 	PT_KEYICHI = 13  # 可以吃
// 	PT_ZHUANIAOFANBEI = 14  # 抓2鸟(翻倍)
// 	PT_ZhuangXianFanBei = 15  # 庄闲翻倍
// 	PT_Zha2Ma = 23 # 扎码
// 	PT_Zha3Ma = 24 # 扎3码
// 	PT_Zha4Ma = 25 # 扎4码
// 	PT_Piao = 26 # 飘|飘分
// 	PT_jinNiao = 27 # 金鸟

// 	# 常德
// 	PT_HuangZhuangHuangGang = 28#常德荒庄荒杠
// 	PT_ChangDeHuangZhuangNoHuangGang = 29#常德荒庄不荒杠
// 	PT_QiangGangHu_JiangMa = 30#常德抢杠胡算码
// 	PT_ChangDeHuangZhuangQiangGangHuNoCountMa = 31#常德抢杠胡算码
// 	PT_159JiangMa = 32#159奖码
// 	PT_MoJiJiangJi = 33#摸几奖几
// 	PT_GangSuiHu = 34#杠随胡
// 	PT_SHANGWANG = 35#上王
// 	PT_XIAWANG = 36   #下王/衡阳王霸
// 	PT_XUANMEI2 = 38 #选2美
// 	PT_XUANMEI3 = 39#选3美
// 	PT_XUANMEI4 = 40#选3美

// 	# 益阳
// 	PT_FEINIAO1 = 46#飞1鸟
// 	PT_FEINIAO2 = 47#飞2鸟
// 	PT_FEINIAO3 = 48#飞3鸟
// 	PT_FEINIAO4 = 49#飞4鸟
// 	PT_FEINIAO5 = 50#飞5鸟
// 	PT_FEINIAO6 = 51#飞6鸟

// 	PT_BAOTING = 56#报听
// 	PT_MENQING = 57#门清|门清需要258做将|门清需要258做将
// 	PT_MENQINGPENPENGHU = 58#门清将将胡
// 	PT_MENQINBUXU256ZUOJIANG = 59#门清不需258做将
// 	PT_QUEYIMEN = 60 ##缺一门
// 	PT_SHANGXIAN48 = 61 #48番
// 	PT_SHANGXIAN96 = 62 #96番
// 	TYPE_SILIANGUAN =63 #四连冠
// 	TYPE_ZHONGTUSIXI = 64 #中途四喜
// 	TYPE_QUEYISE = 65 #缺一色
// 	TYPE_BANBANHU = 66 # 板板胡
// 	TYPE_DASIXI	 = 67 # 四喜
// 	TYPE_LIULIUSHUN = 68 # 六六顺
// 	TYPE_JINTONGYUNV = 69 # 金童玉女
// 	TYPE_JIANGYIZHIHUA = 70 #将一枝花
// 	TYPE_SANTONG = 71 #三同
// 	TYPE_JIEJIEGAO = 72 #节节高
// 	TYPE_ZHONGTULLSHUN = 73 #中途六六顺

// 	OTHER_TouGuan30 =  1000 #托管30秒
// 	OTHER_TouGuan60 =  1001 #托管30秒
// 	OTHER_TouGuan120 = 1002 #托管120秒

// 	OTHER_HiShi = 2000 #胡牌提示

// 	OTHER_LianKai2 = 3000 #连开2把
// 	OTHER_LianKai3 = 3001 #连开3把
// 	OTHER_LianKai4 = 3002 #连开4把
// 	OTHER_LianKaiN = 3003 #连开可选



// # 胡法
// class HuPaiType:
// 	HU_XIAOHU = 1			#小胡
// 	HU_SPECIAL_XIAOQIDUI=2	#豪华小七对
// 	HU_XIAOQIDUI=3			#小七对
// 	HU_QINGYISE=4			#清一色
// 	HU_JIANGJIANGHU=5		#将将胡
// 	HU_PENGPENGHU=6		#碰碰胡
// 	HU_QUANQIUREN=7		#全球人
// 	HU_GANG1=8				#杠上开花
// 	HU_GANG2=9				#杠上炮
// 	HU_END1=10				#海底捞
// 	HU_END2=11				#海底炮
// 	HU_QIANGGANGHU=12		#抢扛胡
// 	HU_DOUBLESPECIAL_XIAOQIDUI =14  #双豪华七小队
// 	HU_TianHu=15 #天胡
// 	HU_DiHu=16 #地胡
// 	HU_Qishou4Lai=17  #起手四个癞子
// 	HU_WuHongZhong =18 #没有红中
// 	HU_QiangGangHu2 = 19 #ganghu2
// 	HU_13Yao =20 #十三幺
// 	HU_FengYiSe =21 #风一色
// 	HU_QingYiSeMenQing =22  #门清清一色
// 	HU_QingYiSeQiXiaoDui =23 #清一色七巧对
// 	HU_QingYiSeDaDuiPeng = 24 #清一色大对碰
// 	HU_MenQing = 25 #门清
// 	HU_DaDuiPeng =26 #大对碰
// 	HU_QiXiaoDui =27 #七小对
// 	HU_HaoHuaQiXiaoDui =28 #豪华七小对
// 	HU_ShiSanLan = 29 #十三烂
// 	HU_QiFengDaoWei = 30 #七风到位
// 	HU_QiQiaoDui = 31 #七巧对
// 	HU_LongQiDui = 32 #龙七对
// 	HU_LongQiaoDui = 33 #龙巧对
// 	HU_YingQiaoDui = 34 #硬巧对
// 	HU_WangDiao = 35 #王钓
// 	HU_WangDiaoWang = 36 #王钓王
// 	HU_WangChuang = 37 #王闯
// 	HU_WangChuangWang = 38 #王闯王
// 	HU_WangGuiWei = 39 #王归位
// 	HU_ShuangWangGuiWei = 40 #双王归位
// 	HU_SiDaTianWang = 41 #四大天王
// 	HU_QiShou4WangBa = 42 #起手胡
// 	HU_MenQingPengpengHu = 43 #门清碰碰胡
// 	HU_MenQingQingyisePengpengHu = 44 #门清清一色碰碰胡
// 	HU_QingYiSePengPengHu = 45 #清一色碰碰胡
// 	HU_SanHaoHuaQiXiaoDui = 46  #三豪华七小对
// 	HU_XiaoDao = 47	#小刀
// 	HU_DaDao =48	  #大刀
// 	HU_SiLianGuang = 49  #四连冠
// 	HU_PingHu = 50  #平胡
// 	HU_QingPingHu = 51  #青平胡
// 	HU_JiaJiangHu = 52  #青平胡

// 	HU_ZHONGTUSIXI = 64 #中途四喜
// 	HU_QUEYISE = 65 #缺一色
// 	HU_BANBANHU = 66 # 板板胡
// 	HU_DASIXI	 = 67 # 四喜
// 	HU_LIULIUSHUN = 68 # 六六顺
// 	HU_JINTONGYUNV = 69 # 金童玉女
// 	HU_JIANGYIZHIHUA = 70 #将一枝花
// 	HU_SANTONG = 71 #三同
// 	HU_JIEJIEGAO = 72 #节节高
// 	HU_ZHONGTULLSHUN = 73 #中途六六顺