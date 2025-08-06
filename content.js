/// 定数定義
const area = "近畿エリア";
const KinkiAreaLine = [
    {
        'code': 'hokuriku',
        'line': '北陸本線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'hokurikubiwako',
        'line': 'A 琵琶湖線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    },
    {
        'code': 'kyoto',
        'line': 'A 京都線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'kobesanyo',
        'line': 'A 神戸線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'ako',
        'line': 'A 赤穂線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'kosei',
        'line': 'B 湖西線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'kusatsu',
        'line': 'C 草津線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'nara',
        'line': 'D 奈良線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'sagano',
        'line': 'E 嵯峨野線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'sanin1',
        'line': 'E 山陰本線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'sanin2',
        'line': 'E/A 山陰本線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'osakahigashi',
        'line': 'F おおさか東線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'takarazuka',
        'line': 'G 宝塚線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'fukuchiyama',
        'line': 'G 福知山線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'tozai',
        'line': 'H JR東西線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'gakkentoshi',
        'line': 'H 学研都市線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'bantan',
        'line': 'J 播但線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'maizuru',
        'line': 'L 舞鶴線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'osakaloop',
        'line': 'O 大阪環状線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'yumesaki',
        'line': 'P JRゆめ咲線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'yamatoji',
        'line': 'Q 大和路線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'hanwahagoromo',
        'line': 'R 阪和線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'kansaiairport',
        'line': 'S 関西空港線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'KinkiUrban'
    }, {
        'code': 'wakayama1',
        'line': 'T 和歌山線 和歌山-五条',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'wakayama2',
        'line': 'T 和歌山線 五条-王寺',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'manyomahoroba',
        'line': 'U 万葉まほろば線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'kansai',
        'line': 'V 関西本線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }, {
        'code': 'kinokuni',
        'line': 'W きのくに線',
        'sectionId': 'lineBtnKinki',
        'flowType': 'JrwOther'
    }
];

const OkayamaAreaLine = [
    {
        'code': 'unominato',
        'line': 'L 宇野みなと線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    }, {
        'code': 'setoohashi',
        'line': 'M 瀬戸大橋線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    }, {
        'code': 'ako2',
        'line': 'N 赤穂線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    }, {
        'code': 'sanyo1',
        'line': 'S/W/X 山陽本線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    }, {
        'code': 'tsuyama',
        'line': 'T 津山線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    }, {
        'code': 'hakubi1',
        'line': 'V 伯備線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    }, {
        'code': 'fukuen1',
        'line': 'Z 福塩線',
        'sectionId': 'lineBtnOkayama',
        'flowType': 'JrwOther'
    },
];

const HiroSekiAreaLine = [
    {
        'code': 'kabe',
        'line': 'B 可部線',
        'sectionId': 'lineBtnHiroseki',
        'flowType': 'JrwOther'
    }, {
        'code': 'sanyo2',
        'line': 'G/R 山陽本線',
        'sectionId': 'lineBtnHiroseki',
        'flowType': 'JrwOther'
    }, {
        'code': 'sanyo3',
        'line': '山陽本線',
        'sectionId': 'lineBtnHiroseki',
        'flowType': 'JrwOther'
    }, {
        'code': 'geibi1',
        'line': 'P 芸備線',
        'sectionId': 'lineBtnHiroseki',
        'flowType': 'JrwOther'
    }, {
        'code': 'kure',
        'line': 'Y 呉線',
        'sectionId': 'lineBtnHiroseki',
        'flowType': 'JrwOther'
    }, {
        'code': 'yamaguchi',
        'line': '山口線',
        'sectionId': 'lineBtnHiroseki',
        'flowType': 'JrwOther'
    }
];

const SaninAreaLine = [
    {
        'code': 'sanin3',
        'line': 'A 山陰本線',
        'sectionId': 'lineBtnSanin',
        'flowType': 'JrwOther'
    }, {
        'code': 'imbi1',
        'line': 'B 因美線',
        'sectionId': 'lineBtnSanin',
        'flowType': 'JrwOther'
    }, {
        'code': 'sanin4',
        'line': 'D 山陰本線',
        'sectionId': 'lineBtnSanin',
        'flowType': 'JrwOther'
    }, {
        'code': 'hakubi2',
        'line': 'V 伯備線',
        'sectionId': 'lineBtnSanin',
        'flowType': 'JrwOther'
    }
];

const CentralAreaLine = [
    {
        'code': 'zaisenichijoho_10001',
        'line': 'CA 東海道本線（米原～豊橋）',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10011',
        'line': 'CA 東海道本線（豊橋～熱海）',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10013',
        'line': 'CB 御殿場線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10012',
        'line': 'CC 身延線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10010',
        'line': 'CD 飯田線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10002',
        'line': 'CE 武豊線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10003',
        'line': 'CF 中央本線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10004',
        'line': 'CG 高山本線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10005',
        'line': 'CI 太多線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10006',
        'line': 'CJ 関西本線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10007',
        'line': '紀勢本線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10009',
        'line': '名松線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }, {
        'code': 'zaisenichijoho_10008',
        'line': '参宮線',
        'sectionId': 'lineBtnCentral',
        'flowType': 'Jrc'
    }
];

/// クラス定義
// 列車情報クラス
class Train {
    constructor() {
        this.no = "";
        this.pos = "";
        this.direction = 0;
        this.nickname = "";
        this.type = "";
        this.displayType = "";
        this.dest = {};
        this.via = "";
        this.delayMinutes = 0;
        this.aSeatInfo = "";
        this.typeChange = "";
        this.numberOfCars = 0;
        this.stopTime = "";
        this.iconId = "";
    }
}

// 列車行先情報クラス
class Destination {
    constructor(code, line, text) {
        this.text = text;
        this.code = code;
        this.line = line;
    }
}

/// 関数定義


// 画面上に年月日時分秒を出力
function clock() {
    // 現在日時を表すインスタンスを取得
    let now = new Date();
    // 年
    let year = now.getFullYear();
    // 月　0から11で取得されるので実際の月は+１したものになる
    let month = now.getMonth() + 1;
    //　日
    let date = now.getDate();
    //　曜日　0から6で日曜始まりで取得されるので配列のインデックスを指定する
    let weeks = new Array("日", "月", "火", "水", "木", "金", "土")
    let day = weeks[now.getDay()];
    //　時
    let time = now.getHours();
    //　分
    let min = now.getMinutes();
    //　秒
    let sec = now.getSeconds();

    // 日付時刻　常に2桁にする処理
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    // HTML span clock_date 日付を表示
    document.getElementById("Date-Time").innerHTML = year + "/" + month + "/" + date + "（" + day + "）" + time + ":" + min + ":" + sec;
}

// clock関数を1000ミリ秒（毎秒）に実行する
setInterval(clock, 1000);

function headerDate() {
    //
}


// 列車情報への型定義
/**
 * 取得したデータをマッピング
 * 列車情報クラス - 近畿アーバン
 * @param {*} obj 
 * @return {Train}
 */
function buildTrain(obj) {
    const train = new Train();
    train.no = obj["no"];
    train.pos = obj["pos"];
    train.direction = obj["direction"];
    train.nickname = obj["nickname"];
    train.type = obj["type"];
    train.displayType = obj["displayType"];
    train.dest = buildDestination(obj["dest"]);
    train.via = obj["via"];
    train.delayMinutes = obj["delayMinutes"];
    train.aSeatInfo = obj["aSeatInfo"];
    train.typeChange = obj["typeChange"];
    train.numberOfCars = obj["numberOfCars"];
    train.stopTime = obj["stopTime"];
    train.iconId = obj["iconId"];
    return train;
}

/**
 * 取得したデータをマッピング
 * 列車行先情報クラス - 近畿アーバン
 * @param {*} obj
 * @return {Destination}
 */
function buildDestination(obj) {
    return new Destination(obj["code"], obj["line"], obj["text"]);
}


/**
 * 取得したデータをマッピング
 * 列車情報クラス - 近畿その他
 * @param {*} obj 
 * @return {Train}
 */
function buildTrainOther(obj) {
    const train = new TrainOther();
    train.dest = obj["dest"];
    train.direction = obj["direction"];
    train.delayMinutes = obj["delayMinutes"];
    train.displayType = obj["displayType"];
    train.nickname = obj["nickname"];
    train.no = obj["no"];
    train.pos = obj["pos"];
    train.type = obj["type"];
    train.notice = obj["notice"];
    return train;
}

class TrainOther {
    constructor() {
        this.no = "";
        this.dest = "";
        this.direction = 0;
        this.displayType = "";
        this.delayMinutes = 0;
        this.nickname = "";
        this.pos = "";
        this.type = "";
        this.notice = "";
    }
}


/**
 * 取得したデータをマッピング
 * 列車情報クラス - JRC
 * @param {*} obj 
 * @return {Train}
 */
function buildTrainC(obj) {
    const train = new TrainC();
    train.dest = obj["yukisaki"];
    train.direction = obj["jogeKbn"];
    train.delayMinutes = obj["chienJifun"];
    train.displayType = obj["resshaShubetsuMei"];
    train.nickname = obj["aishoMei"];
    train.no = obj["resshaBng"];
    train.pos = obj["ryokakuEkiCd"];
    train.ekikanKbn = obj["ekiEkikanKbn"];
    return train;
}

class TrainC {
    constructor() {
        this.no = "";
        this.dest = "";
        this.direction = 0;
        this.displayType = "";
        this.delayMinutes = 0;
        this.nickname = "";
        this.pos = "";
        this.ekikanKbn = 0;
    }
}

// 列車情報装飾
/**
 * 種別色付け
 * @param {*} trainType 
 * @param {*} linename
 */
function AddDispTypeCol(trainType, linename) {//otherはlinename=""を定義しとけ
    var typeCol = null;
    switch (trainType) {
        case "普通": {
            typeCol = '<span class="local">' + trainType + '</span>';
            return typeCol;
        }
        case "普通２": {
            typeCol = '<span class="local">普通</span>';
            return typeCol;
        }
        case "う普通○": {
            typeCol = '<span class="local">普通</span> うれしート';
            return typeCol;
        }
        case "う普通×": {
            typeCol = '<span class="local">普通</span> うれしート ×';
            return typeCol;
        }
        case "区間快速": {
            switch (linename) {
                case "nara":
                    typeCol = '<span class="miyakojirapid">' + trainType + '</span>';
                    return typeCol;
                case "":
                    typeCol = '<span class="regionalrapid">' + trainType + '</span>';
                    return typeCol;
                default:
                    typeCol = '<span class="regionalrapid">' + trainType + '</span>';
                    return typeCol;
            }
        }
        case "う区快○": {
            switch (linename) {
                case "nara":
                    typeCol = '<span class="miyakojirapid">区間快速</span> うれしート';
                    return typeCol;
                default: {
                    typeCol = '<span class="regionalrapid">区間快速</span> うれしート';
                    return typeCol;
                }
            }
        }
        case "う区快×": {
            switch (linename) {
                case "nara":
                    typeCol = '<span class="miyakojirapid">区間快速</span> うれしート ×';
                    return typeCol;
                default: {
                    typeCol = '<span class="regionalrapid">区間快速</span> うれしート ×';
                    return typeCol;
                }
            }
        }
        case "快速": {
            switch (linename) {
                case "yamatoji":
                    typeCol = '<span class="yamatojirapid">' + trainType + '</span>';
                    return typeCol;
                case "wakayama2":
                    typeCol = '<span class="yamatojirapid">' + trainType + '</span>';
                    return typeCol;
                case "nara":
                    typeCol = '<span class="miyakojirapid">' + trainType + '</span>';
                    return typeCol;
                case "central":
                    typeCol = '<span class="rapidC">' + trainType + '</span>';
                    return typeCol;
                case "":
                    typeCol = '<span class="rapid">' + trainType + '</span>';
                    return typeCol;
                default:
                    typeCol = '<span class="rapid">' + trainType + '</span>';
                    return typeCol;
            }
        }
        case "う快速○": {
            switch (linename) {
                case "yamatoji":
                    typeCol = '<span class="yamatojirapid">快速</span> うれしート';
                    return typeCol;
                case "wakayama2":
                    typeCol = '<span class="yamatojirapid">快速</span> うれしート';
                    return typeCol;
                case "nara":
                    typeCol = '<span class="miyakojirapid">快速</span> うれしート';
                    return typeCol;
                default: {
                    typeCol = '<span class="rapid">快速</span> うれしート';
                    return typeCol;
                }
            }
        }
        case "う快速×": {
            switch (linename) {
                case "yamatoji":
                    typeCol = '<span class="yamatojirapid">快速</span> うれしート ×';
                    return typeCol;
                case "wakayama2":
                    typeCol = '<span class="yamatojirapid">快速</span> うれしート ×';
                    return typeCol;
                case "nara":
                    typeCol = '<span class="miyakojirapid">快速</span> うれしート ×';
                    return typeCol;
                default: {
                    typeCol = '<span class="rapid">快速</span> うれしート ×';
                    return typeCol;
                }
            }
        }
        case "新快速": {
            switch (linename) {
                case "central":
                    typeCol = '<span class="newrapid">' + trainType + '</span>';
                    return typeCol;
                default:
                    typeCol = '<span class="specialrapid">' + trainType + '</span>';
                    return typeCol;
            }
        }
        case "特別快速": {
            typeCol = '<span class="specialrapidC">' + trainType + '</span>';
            return typeCol;
        }
        case "A新快○": {
            typeCol = '<span class="specialrapid">新快速 Aseat</span>';
            return typeCol;
        }
        case "A新快×": {
            typeCol = '<span class="specialrapid">新快速 Aseat ×</span>';
            return typeCol;
        }
        case "A→一般": {
            typeCol = '<span class="specialrapid">新快速</span> A→一般';
            return typeCol;
        }
        case "一般→A": {
            typeCol = '<span class="specialrapid">新快速</span> 一般→A';
            return typeCol;
        }
        case "丹波路快": {
            typeCol = '<span class="tambajirapid">丹波路快速</span>';
            return typeCol;
        }
        case "丹波路快速": {
            typeCol = '<span class="tambajirapid">' + trainType + '</span>';
            return typeCol;
        }
        case "う丹快○": {
            typeCol = '<span class="tambajirapid">丹波路快速</span> うれしート';
            return typeCol;
        }
        case "う丹快×": {
            typeCol = '<span class="tambajirapid">丹波路快速</span> うれしート ×';
            return typeCol;
        }
        case "紀州路快": {
            typeCol = '<span class="kishujirapid">紀州路快速</span>';
            return typeCol;
        }
        case "紀州路快速": {
            typeCol = '<span class="kishujirapid">' + trainType + '</span>';
            return typeCol;
        }
        case "シャトル": {
            typeCol = '<span class="kixrapid">' + trainType + '</span>';
            return typeCol;
        }
        case "関空快速": {
            typeCol = '<span class="kixrapid">' + trainType + '</span>';
            return typeCol;
        }
        case "関空紀州": {
            typeCol = '<span class="kixrapid">関空</span>' + '<span class="kishujirapid">紀州</span>';
            return typeCol;
        }
        case "大和路快": {
            typeCol = '<span class="yamatojirapid">大和路快速</span>';
            return typeCol;
        }
        case "大和路快速": {
            typeCol = '<span class="yamatojirapid">' + trainType + '</span>';
            return typeCol;
        }
        case "う大快○": {
            typeCol = '<span class="yamatojirapid">大和路快速</span> うれしート';
            return typeCol;
        }
        case "う大快×": {
            typeCol = '<span class="yamatojirapid">大和路快速</span> うれしート ×';
            return typeCol;
        }
        case "みやこ快": {
            typeCol = '<span class="miyakojirapid">みやこ路快速</span>';
            return typeCol;
        }
        case "みやこ路快速": {
            typeCol = '<span class="miyakojirapid">' + trainType + '</span>';
            return typeCol;
        }
        case "うみ快○": {
            typeCol = '<span class="miyakojirapid">みやこ路快速</span> うれしート';
            return typeCol;
        }
        case "うみ快×": {
            typeCol = '<span class="miyakojirapid">みやこ路快速</span> うれしート ×';
            return typeCol;
        }
        case "直通快速": {
            typeCol = '<span class="directrapid">' + trainType + '</span>';
            return typeCol;
        }
        case "う直快○": {
            typeCol = '<span class="directrapid">直通快速</span> うれしート';
            return typeCol;
        }
        case "う直快×": {
            typeCol = '<span class="directrapid">直通快速</span> うれしート ×';
            return typeCol;
        }
        case "特急": {
            typeCol = '<span class="limitedexp">' + trainType + '</span>';
            return typeCol;
        }
        case "急行": {
            typeCol = '<span class="express">' + trainType + '</span>';
            return typeCol;
        }
        case "ホームライナー": {
            typeCol = '<span class="express">' + trainType + '</span>';
            return typeCol;
        }
        case "関空特急": {
            typeCol = '<span class="limitedexp">' + trainType + '</span>';
            return typeCol;
        }
        case "通勤特急": {
            typeCol = '<span class="limitedexp">' + trainType + '</span>';
            return typeCol;
        }
        case "臨時特急": {
            typeCol = '<span class="limitedexp">' + trainType + '</span>';
            return typeCol;
        }
        case "寝台特急": {
            typeCol = '<span class="limitedexp">' + trainType + '</span>';
            return typeCol;
        }
        case "寝台": {
            typeCol = '<span class="limitedexp">' + trainType + '</span>';
            return typeCol;
        }
        case "回送": {
            typeCol = '<span class="notinservice">' + trainType + '</span>';
            return typeCol;
        }
        case "臨時": {
            typeCol = '<span class="extra">' + trainType + '</span>';
            return typeCol;
        }
        case "観光列車": {
            typeCol = '<span class="extra">' + trainType + '</span>';
            return typeCol;
        }
        default: {
            return trainType;
        }

    }
}

/**
 * 行先色付け
 * @param {*} trainDest 
 */
function AddDestCol(trainDest) {
    switch (trainDest) {
        case null: {
            return '';
        }
        default: {
            return '<span class="destination">' + trainDest + '</span>行き';
        }
    }
}

/**
 * 路線記号付与
 * @param {*} LineMark 
 */
function LineMarkGet(LineMark) {//無印のみ
    switch (LineMark) {
        case "hokuriku": {
            const GetMark = '<span class="hokurikuA">[A]</span>';
            return GetMark;
        }
        case "kosei": {
            const GetMark = '<span class="kosei">[B]</span>';
            return GetMark;
        }
        case "kusatsu": {
            const GetMark = '<span class="kusatsu">[C]</span>';
            return GetMark;
        }
        case "nara": {
            const GetMark = '<span class="nara">[D]</span>';
            return GetMark;
        }
        case "osakahigashi": {
            const GetMark = '<span class="osakahigashi">[F]</span>';
            return GetMark;
        }
        case "takarazuka": {
            const GetMark = '<span class="takarazuka">[G]</span>';
            return GetMark;
        }
        case "tozai": {
            const GetMark = '<span class="tozai">[H]</span>';
            return GetMark;
        }
        case "kakogawa": {
            const GetMark = '<span class="kakogawa">[I]</span>';
            return GetMark;
        }
        case "kishin": {
            const GetMark = '<span class="kishin">[K]</span>';
            return GetMark;
        }
        case "osakaloop": {
            const GetMark = '<span class="osakaloop">[O]</span>';
            return GetMark;
        }
        case "yumesaki": {
            const GetMark = '<span class="yumesaki">[P]</span>';
            return GetMark;
        }
        case "yamatoji": {
            const GetMark = '<span class="yamatoji">[Q]</span>';
            return GetMark;
        }
        case "hanwa": {
            const GetMark = '<span class="hanwahagoromo">[R]</span>';
            return GetMark;
        }
        case "kansaiairport": {//
            const GetMark = '<span class="kansaiairport">[S]</span>';
            return GetMark;
        }
        case "wakayama2": {
            const GetMark = '<span class="wakayama">[T]</span>';
            return GetMark;
        }
        case "kansai": {
            const GetMark = '<span class="kansai">[V]</span>';
            return GetMark;
        }
        case "kinokuni": {
            const GetMark = '<span class="kinokuni">[W]</span>';
            return GetMark;
        }
        case "other": {
            return "";
        }
        case "hagoromo": {
            return "";
        }
        default: {
            return LineMark;
        }

    }
}

/**
 * 列車名セット
 * @param {*} nickname 
 */
function nicknameSet(nickname) {//otherのみ
    if (nickname == null) return "";
    else return nickname;
}

/**
 * 上下区分
 * @param {*} direction 
 */
function directionSet(direction, line) {
    switch (line) {
        case 'central':
            if (direction == 1) return "上り";
            else return "下り";
        default:
            if (direction == 0) return "上り";
            else return "下り";
    }
}

/**
 * 遅延時分セット
 * @param {*} delayMinutes 
 */
function delayMinutesSet(delayMinutes) {
    if (delayMinutes == 0) return '<span class="noDelay"></span>';
    else if (delayMinutes >= 60) return '<span class="overDelay">60分以上遅れ</span>';
    else return '<span class="delayMinutes">' + delayMinutes + '分遅れ</span>';
}

/**
 * 駅情報取得
 * @param {string} pos 
 */
function StaGet(pos) {
    const position = pos.split('_');
    const pos1 = posMatch_U(position[0]);
    const pos2 = posMatch_U(position[1]);
    if (pos2.length == 0) return pos1[0].stationName;
    else {
        const result = (pos1[0].stationName + "～" + pos2[0].stationName);
        return result;
    }
}

/**
 * 
 * @param {*} pos 
 */
function posMatch_U(pos_u) {
    return stations_urban.filter(Ustation => {
        if (Ustation.stationCode === pos_u) return Ustation;

    });
}

/**
 * 駅情報取得
 * @param {string} pos 
 */
function StaGet_O(pos) {
    const position = pos.split('_');
    const pos1 = posMatch_O(position[0]);
    const pos2 = posMatch_O(position[1]);
    if (pos2.length == 0) return pos1[0].StationName;
    else {
        const result = (pos1[0].StationName + "～" + pos2[0].StationName);
        return result;
    }
}

/**
 * 
 * @param {*} pos 
 */
function posMatch_O(pos_o) {
    return stations_other.filter(Ostation => {
        if (Ostation.StationCode === pos_o) return Ostation;

    });
}

/**
* 駅情報取得 - JRC
* @param {*} pos 
* @param {*} ekikanKbn 
*/
function StaGet_Central(pos, ekikanKbn) {
    if (ekikanKbn == 1) {
        const position = posMatch_C(pos);
        return position[0].name;
    }
    else if (ekikanKbn == 2) {
        const position = posMatch_C(pos);
        return position[0].name + " 付近 ";
    }
}

/**
 * 
 * @param {string} pos_C
 */
function posMatch_C(pos_C) {
    return stations_Central.filter(Cstation => {
        if (Cstation.code === pos_C) {
            return Cstation.name;
        }
    });
}

// 列車情報出力準備
/**
 * 
 * @param {Train[]} trains 
 */
function viewTrains(trains, flowType) {
    const elem = document.getElementById("elem");
    let trainElems;
    while (child = elem.firstChild) elem.removeChild(child);
    switch (flowType) {
        case 'KinkiUrban': trainElems = trains.map(trainElement);
            break;
        case 'JrwOther': trainElems = trains.map(trainElementOther);
            break;
    }
    trainElems.forEach(element => {
        elem.appendChild(element);
    });
}

/**
 * 出力する列車情報を成形 - JRC
 * @param {Train[]} trains 
 */
function viewTrainsC(trains, flowType) {
    // const elem = document.getElementById("elem");
    while (child = elem.firstChild) elem.removeChild(child);
    const trainElems = trains.map(trainElementC);
    trainElems.forEach(element => {
        elem.appendChild(element);
    });
}

/**
 * 出力する列車情報を成形 - 近畿アーバン
 * @param {Train} train
 * @return {HTMLElement}
 */
function trainElement(train) {
    const line = "";
    const DispTypeAddCol = AddDispTypeCol(train.displayType, train.dest.line);
    const DestAddCol = AddDestCol(train.dest.text);
    const LineMark = LineMarkGet(train.dest.line);
    const direction = directionSet(train.direction, line);
    const delayMinutes = delayMinutesSet(train.delayMinutes);
    const position = StaGet(train.pos);
    // const position = stationGet(train.pos);
    const aSeatInfo = train.aSeatInfo === "" ? "" : " " + train.aSeatInfo + " ";
    // const text = `${train.no} ${train.displayType}${train.nickname} ${train.typeChange} ${train.via} ${train.dest.text}行き ${train.numberOfCars}両 ${delayMinutes} 走行位置：${position}${direction}`;
    const text = train.no + " " + LineMark + DispTypeAddCol + " " + train.nickname + " " + train.typeChange + " " + train.via + " " + DestAddCol + " " + train.numberOfCars + "両 " + aSeatInfo + delayMinutes + " 走行位置：" + position + direction;
    // const text = train.no + " " + LineMark + DispTypeAddCol + train.nickname + " " + train.typeChange + " " + train.via + " " + DestAddCol + "行き " + train.numberOfCars + "両 " + delayMinutes + " 走行位置：" + direction;
    const elem = document.createElement('div');
    // elem.className = 'kakomi-box3';
    elem.className = `kakomi-box3 kakomi-${train.dest.line}`;
    // elem.innerText = text;
    elem.innerHTML = text;
    return elem;
}

/**
 * 出力する列車情報を成形 - 近畿その他
 * @param {Train} train 
 * @return {HTMLElement}
 */
function trainElementOther(train) {
    const line = "";
    const DispTypeAddCol = AddDispTypeCol(train.displayType, line);
    const DestAddCol = AddDestCol(train.dest);
    const nickname = nicknameSet(train.nickname);
    const direction = directionSet(train.direction, line);
    const delayMinutes = delayMinutesSet(train.delayMinutes);
    const position = StaGet_O(train.pos);
    // const position = stationGet(train.pos);
    const notice = train.notice === null ? "" : " " + train.notice + " ";
    // const text = `${train.no} ${train.displayType}${nickname} ${train.dest}行き ${delayMinutes} 走行位置：${position}${direction}`;
    const text = train.no + " " + DispTypeAddCol + " " + nickname + " " + DestAddCol + " " + delayMinutes + notice + " 走行位置：" + position + direction;
    // const text = train.no + " " + DispTypeAddCol + nickname + " " + DestAddCol + "行き " + delayMinutes + " 走行位置：" + direction;
    const elem = document.createElement('div');
    elem.className = 'kakomi-box3';
    // elem.innerText = text;
    elem.innerHTML = text;
    return elem;
}

/**
 * 
 * @param {Train} train 
 * @return {HTMLElement}
 */
function trainElementC(train) {
    const line = 'central';
    const DispTypeAddCol = AddDispTypeCol(train.displayType, line);
    const DestAddCol = AddDestCol(train.dest);
    const nickname = nicknameSet(train.nickname);
    const direction = directionSet(train.direction, line);
    const delayMinutes = delayMinutesSet(train.delayMinutes);
    const position = StaGet_Central(train.pos, train.ekikanKbn);
    // const text = `${train.no} ${train.displayType}${nickname} ${train.dest}行き ${delayMinutes} 走行位置：${position}${direction}`;
    const text = train.no + " " + DispTypeAddCol + " " + nickname + " " + DestAddCol + delayMinutes + " 走行位置：" + position + direction;
    const elem = document.createElement('div');
    elem.className = 'kakomi-box3';
    // elem.innerText = text;
    elem.innerHTML = text;
    return elem;
}

// ボタンクリック時にLogicAppsへリクエストを送信し、結果を取得（非同期）
// function stationGet(position) {
//     // リクエスト情報定義
//     const requestUrl = "https://prod-19.japaneast.logic.azure.com:443/workflows/c03397c866cd415cadc47c5499dc2be3/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LMRDZoK-DBcp7fYgwMQOlKCsEOqnUXCveX32lm0V89w"
//     const requestMethod = "POST"
//     const requestHeaders = {
//         "Content-Type": "application/json"
//     }
//     const requestBody = JSON.stringify({
//         "pos": position
//     })

//     // リクエストを送信して結果を解析
//     try {
//         const response = fetch(requestUrl, {
//             method: requestMethod,
//             headers: requestHeaders,
//             body: requestBody
//         })

//         // レスポンスステータスをチェック
//         if (!response.ok) {
//             throw new Error(`レスポンスステータス: ${response.status}`);
//         }

//         // レスポンスヘッダーをチェック
//         const contentType = response.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//             throw new TypeError("残念、受信したのは JSON ではなかった！");
//         }

//         // レスポンスボディを取得
//         const body = aresponse.json();
//         return body.test;
//         const trains = body.trains.map(buildTrain);
//         let trains;

//         switch (flowType) {
//             case 'KinkiUrban': trains = body.map(buildTrain);
//                 break;
//             case 'JrwOther': trains = body.map(buildTrainOther);
//                 break;
//         }
//         viewTrains(trains, flowType);

//         エラー発生時にキャッチしてメッセージを返す
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// ボタンクリック時に発火
async function clickEvent(linename, flowType) {
    elem.innerHTML = "<div class='nowloading'>・・・読み込み中・・・</div>";
    // リクエスト情報定義
    const requestUrl = "https://prod-38.japaneast.logic.azure.com:443/workflows/a98ba8e0a5b74390a09eecfc147607fb/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=IMP3VtK1G505nZaw6u7osA8vInr_0M3DSb5kZzsK76o"
    const requestMethod = "POST"
    const requestHeaders = {
        "Content-Type": "application/json"
    }
    const requestBody = JSON.stringify({
        "getLineName": linename,
        "flowType": flowType
    })

    // リクエストを送信して結果を解析
    try {
        const response = await fetch(requestUrl, {
            method: requestMethod,
            headers: requestHeaders,
            body: requestBody
        })

        // レスポンスステータスをチェック
        if (!response.ok) {
            throw new Error(`レスポンスステータス: ${response.status}`);
        }

        // レスポンスヘッダーをチェック
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("残念、受信したのは JSON ではなかった！");
        }

        // レスポンスボディを取得
        const body = await response.json();
        // const trains = body.trains.map(buildTrain);
        let trains;

        switch (flowType) {
            case 'KinkiUrban': trains = body.map(buildTrain);
                viewTrains(trains, flowType);
                break;
            case 'JrwOther': trains = body.map(buildTrainOther);
                viewTrains(trains, flowType);
                break;
            case 'Jrc': trains = body.lst.map(buildTrainC);
                viewTrainsC(trains, flowType);
                break;
        }

        // エラー発生時にキャッチしてメッセージを返す
    } catch (error) {
        console.error(error.message);
    }
}

/* 画面ロード時に路線ボタン出力 */
window.addEventListener('load', () => {
    KinkiAreaLine.map(k => lineButton(k.code, k.line, k.sectionId, k.flowType));
    OkayamaAreaLine.map(k => lineButton(k.code, k.line, k.sectionId, k.flowType));
    HiroSekiAreaLine.map(k => lineButton(k.code, k.line, k.sectionId, k.flowType));
    SaninAreaLine.map(k => lineButton(k.code, k.line, k.sectionId, k.flowType));
    CentralAreaLine.map(k => lineButton(k.code, k.line, k.sectionId, k.flowType));
})

/*
*
* @param {String} code
* @param {String} line
*/
function lineButton(code, line, sectionId, flowType) {
    const outputArea = document.getElementById(sectionId);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `button ${code}`;
    button.name = 'word';
    button.onclick = function () {
        clickEvent(code, flowType);
    }
    button.innerText = line;
    outputArea.appendChild(button);
}
