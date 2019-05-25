

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallJoinRoom extends cc.Component {

    @property([cc.Sprite])
    spriteNums: cc.Sprite[] = [];
    
    @property([cc.SpriteFrame])
    spriteFrameNums: cc.SpriteFrame[] = [];

    private roomNum: number[] = [];

    onEnable() {
        this.init();
    }

    init() {
        this.roomNum = null;
        this.roomNum = [];
        this.initNumSprite(this.roomNum);
    }

    onBtnClicked_key(event) {
        console.log(event.target);
        let name = event.target.name;
        let num = name.substr(name.length - 1, 1);
        if (this.roomNum.length == 6) {
            return;
        }
        this.roomNum.push(num);
        this.initNumSprite(this.roomNum);
        if(this.roomNum.length == 6){
            this.onBtnClicked_ok();
        }
    }

    initNumSprite(num) {
        this.spriteNums.forEach((item) => {
            item.node.active = false;
            item.spriteFrame = this.spriteFrameNums[0];
        });
        num.forEach((numb, idx) => {
            this.spriteNums[idx].spriteFrame = this.spriteFrameNums[numb];
            this.spriteNums[idx].node.active = true;
        });
    }

    onBtnClicked_ok() {
        let roomId = this.numArrToStr(this.roomNum);
        console.log('roomId=', roomId);
        // cc.audioMgr.playSFX('button' + '.mp3');
        if (roomId.length == 6) {
            // this.hallNetMgr.joinRoom(roomId, (data) => {
            //     if (data.resultCode != 10) {
            //         cc.alertUtil.showAlert_2({
            //             code: data.resultCode,
            //             justOk: true
            //         });
            //     }
            // });
        }
    }

    onBtnClicked_dele() {
        // cc.audioMgr.playSFX('close' + '.mp3');
        this.roomNum.splice(this.roomNum.length - 1, 1);
        console.log(this.roomNum);
        this.initNumSprite(this.roomNum);
    }

    onBtnClicked_back() {
        // cc.audioMgr.playSFX('close' + '.mp3');
        this.node.active = false;
    }

    numArrToStr(num) {
        return num.reduce((total, value) => {
            return total + value;
        }, '');
    }
}
