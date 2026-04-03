import "../css/style.css";

const stationBtn = document.querySelector("#stationBtn");
const stationWrap = document.querySelector("#stationWrap");

const osakaStations = [
    // ===== 大阪メトロ 御堂筋線 =====
    {
        name: "なかもず",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "新金岡",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "北花田",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "あびこ",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "長居",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "西田辺",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "昭和町",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "天王寺",
        trainLine: "大阪メトロ・御堂筋線／谷町線",
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "動物園前",
        trainLine: "大阪メトロ・御堂筋線／堺筋線",
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "大国町",
        trainLine: "大阪メトロ・御堂筋線／四つ橋線",
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "なんば",
        trainLine: "大阪メトロ・御堂筋線／四つ橋線／千日前線",
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Yotsubashi_logo.png", "./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "心斎橋",
        trainLine: "大阪メトロ・御堂筋線／長堀鶴見緑地線",
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Nagahori_logo.png"],
    },
    {
        name: "本町",
        trainLine: "大阪メトロ・御堂筋線／四つ橋線／中央線",
        img: ["./src/assets/Midosuji_logo.png", "./src/assets/Yotsubashi_logo.png", "./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "淀屋橋",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "梅田",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "中津",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "西中島南方",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "新大阪",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "江坂",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "緑地公園",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "桃山台",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "千里中央",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "箕面船場阪大前",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },
    {
        name: "箕面萱野",
        trainLine: "大阪メトロ・御堂筋線",
        img: ["./src/assets/Midosuji_logo.png"],
    },

    // ===== 大阪メトロ 谷町線 =====
    {
        name: "大日",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "守口",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "太子橋今市",
        trainLine: "大阪メトロ・谷町線／今里筋線",
        img: ["./src/assets/Tanimati_logo.svg", "./src/assets/Imazato_logo.svg"],
    },
    {
        name: "千林大宮",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "野江内代",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "都島",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "天神橋筋六丁目",
        trainLine: "大阪メトロ・谷町線／堺筋線",
        img: ["./src/assets/Tanimati_logo.svg", "./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "中崎町",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "東梅田",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "南森町",
        trainLine: "大阪メトロ・谷町線／堺筋線",
        img: ["./src/assets/Tanimati_logo.svg", "./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "天満橋",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "谷町四丁目",
        trainLine: "大阪メトロ・谷町線／中央線",
        img: ["./src/assets/Tanimati_logo.svg", "./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "谷町六丁目",
        trainLine: "大阪メトロ・谷町線／長堀鶴見緑地線",
        img: ["./src/assets/Tanimati_logo.svg", "./src/assets/Nagahori_logo.png"],
    },
    {
        name: "谷町九丁目",
        trainLine: "大阪メトロ・谷町線／千日前線",
        img: ["./src/assets/Tanimati_logo.svg", "./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "四天王寺前夕陽ヶ丘",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "阿倍野",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "文の里",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "田辺",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "駒川中野",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "平野",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "喜連瓜破",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "出戸",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "長原",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },
    {
        name: "八尾南",
        trainLine: "大阪メトロ・谷町線",
        img: ["./src/assets/Tanimati_logo.svg"],
    },

    // ===== 大阪メトロ 四つ橋線 =====
    {
        name: "住之江公園",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "北加賀屋",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "玉出",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "岸里",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "花園町",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "四ツ橋",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "肥後橋",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },
    {
        name: "西梅田",
        trainLine: "大阪メトロ・四つ橋線",
        img: ["./src/assets/Yotsubashi_logo.png"],
    },

    // ===== 大阪メトロ 中央線 =====
    {
        name: "夢洲",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "コスモスクエア",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "大阪港",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "朝潮橋",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "弁天町",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "九条",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "阿波座",
        trainLine: "大阪メトロ・中央線／千日前線",
        img: ["./src/assets/Tyuou_logo.svg", "./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "堺筋本町",
        trainLine: "大阪メトロ・中央線／堺筋線",
        img: ["./src/assets/Tyuou_logo.svg", "./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "森ノ宮",
        trainLine: "大阪メトロ・中央線／長堀鶴見緑地線",
        img: ["./src/assets/Tyuou_logo.svg", "./src/assets/Nagahori_logo.png"],
    },
    {
        name: "緑橋",
        trainLine: "大阪メトロ・中央線／今里筋線",
        img: ["./src/assets/Tyuou_logo.svg", "./src/assets/Imazato_logo.svg"],
    },
    {
        name: "深江橋",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "高井田",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },
    {
        name: "長田",
        trainLine: "大阪メトロ・中央線",
        img: ["./src/assets/Tyuou_logo.svg"],
    },

    // ===== 大阪メトロ 千日前線 =====
    {
        name: "野田阪神",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "玉川",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "西長堀",
        trainLine: "大阪メトロ・千日前線／長堀鶴見緑地線",
        img: ["./src/assets/Sennitimae_logo.svg", "./src/assets/Nagahori_logo.png"],
    },
    {
        name: "桜川",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "日本橋",
        trainLine: "大阪メトロ・千日前線／堺筋線",
        img: ["./src/assets/Sennitimae_logo.svg", "./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "鶴橋",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "今里",
        trainLine: "大阪メトロ・千日前線／今里筋線",
        img: ["./src/assets/Sennitimae_logo.svg", "./src/assets/Imazato_logo.svg"],
    },
    {
        name: "新深江",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "小路",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "北巽",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },
    {
        name: "南巽",
        trainLine: "大阪メトロ・千日前線",
        img: ["./src/assets/Sennitimae_logo.svg"],
    },

    // ===== 大阪メトロ 堺筋線 =====
    {
        name: "天下茶屋",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "恵美須町",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "長堀橋",
        trainLine: "大阪メトロ・堺筋線／長堀鶴見緑地線",
        img: ["./src/assets/Sakaisuji_logo.png", "./src/assets/Nagahori_logo.png"],
    },
    {
        name: "北浜",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "扇町",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "柴島",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "淡路",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "下新庄",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "吹田",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "豊津",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "関大前",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "千里山",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "南千里",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "山田",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "北千里",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "上新庄",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "相川",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "正雀",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "摂津市",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "南茨木",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "茨木市",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "総持寺",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "富田",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "高槻市",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "上牧",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },
    {
        name: "水無瀬",
        trainLine: "大阪メトロ・堺筋線",
        img: ["./src/assets/Sakaisuji_logo.png"],
    },

    // ===== 大阪メトロ 長堀鶴見緑地線 =====
    {
        name: "大正",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "ドーム前千代崎",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "西大橋",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "松屋町",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "玉造",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "大阪ビジネスパーク",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "京橋",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "蒲生四丁目",
        trainLine: "大阪メトロ・長堀鶴見緑地線／今里筋線",
        img: ["./src/assets/Nagahori_logo.png", "./src/assets/Imazato_logo.svg"],
    },
    {
        name: "今福鶴見",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "横堤",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "鶴見緑地",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },
    {
        name: "門真南",
        trainLine: "大阪メトロ・長堀鶴見緑地線",
        img: ["./src/assets/Nagahori_logo.png"],
    },

    // ===== 大阪メトロ 今里筋線 =====
    {
        name: "井高野",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },
    {
        name: "瑞光四丁目",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },
    {
        name: "だいどう豊里",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },
    {
        name: "出来島",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },
    {
        name: "新森古市",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },
    {
        name: "関目成育",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },
    {
        name: "鴨野",
        trainLine: "大阪メトロ・今里筋線",
        img: ["./src/assets/Imazato_logo.svg"],
    },

    // ===== 大阪メトロ ニュートラム =====
    {
        name: "トレードセンター前",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "中ふ頭",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "ポートタウン西",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "ポートタウン東",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "フェリーターミナル",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "南港東",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "南港口",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },
    {
        name: "平林",
        trainLine: "大阪メトロ・ニュートラム",
        img: ["./src/assets/Newtram_logo.png"],
    },

    // ===== JR 大阪環状線 =====
    {
        name: "天王寺",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "新今宮",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "今宮",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "芦原橋",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "大正",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "弁天町",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "西九条",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "野田",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "福島",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "大阪",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "天満",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "桜ノ宮",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "京橋",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "大阪城公園",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "森ノ宮",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "玉造",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "鶴橋",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "桃谷",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },
    {
        name: "寺田町",
        trainLine: "JR・大阪環状線",
        img: ["./src/assets/JR_logo.png", "./src/assets/OsakaKanjou_logo.png"],
    },

    // ===== JR 阪和線 =====
    {
        name: "美章園",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "南田辺",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "鶴ヶ丘",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "長居",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "我孫子町",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "杉本町",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "浅香",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "堺市",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "三国ヶ丘",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "百舌鳥",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "上野芝",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "津久野",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "鳳",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "富木",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "北信太",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "信太山",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "和泉府中",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "久米田",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "下松",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "東岸和田",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "東貝塚",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "和泉橋本",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "東佐野",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "熊取",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "日根野",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "りんくうタウン",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },
    {
        name: "関西空港",
        trainLine: "JR・阪和線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Hanwa_logo.png"],
    },

    // ===== JR 大和路線 =====
    {
        name: "東部市場前",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "平野",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "加美",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "久宝寺",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "八尾",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "志紀",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "柏原",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "高井田",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },
    {
        name: "河内堅上",
        trainLine: "JR・大和路線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yamatoji_logo.png"],
    },

    // ===== JR ゆめ咲線 =====
    {
        name: "安治川口",
        trainLine: "JR・ゆめ咲線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yumesaki_logo.png"],
    },
    {
        name: "ユニバーサルシティ",
        trainLine: "JR・ゆめ咲線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yumesaki_logo.png"],
    },
    {
        name: "桜島",
        trainLine: "JR・ゆめ咲線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Yumesaki_logo.png"],
    },

    // ===== JR 学研都市線 =====
    {
        name: "海老江",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "北新地",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "大阪天満宮",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "鴫野",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "放出",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "徳庵",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "住道",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "四條畷",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "長尾",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "忍ケ丘",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },
    {
        name: "寝屋川公園",
        trainLine: "JR・学研都市線",
        img: ["./src/assets/JR_logo.png", "./src/assets/Gakken_logo.png"],
    },

    // ===== 京阪 本線 =====
    {
        name: "淀屋橋",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "北浜",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "天満橋",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "京橋",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "野江",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "関目",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "森小路",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "千林",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "滝井",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "土居",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "守口市",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "西三荘",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "門真市",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "古川橋",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "大和田",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "萱島",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "寝屋川市",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "香里園",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "光善寺",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "枚方公園",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "枚方市",
        trainLine: "京阪・本線",
        img: ["./src/assets/Keihan_logo.svg"],
    },

    // ===== 京阪 中之島線 =====
    {
        name: "なにわ橋",
        trainLine: "京阪・中之島線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "大江橋",
        trainLine: "京阪・中之島線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "渡辺橋",
        trainLine: "京阪・中之島線",
        img: ["./src/assets/Keihan_logo.svg"],
    },
    {
        name: "中之島",
        trainLine: "京阪・中之島線",
        img: ["./src/assets/Keihan_logo.svg"],
    },

    // ===== 南海 本線 =====
    {
        name: "なんば",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "新今宮",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "天下茶屋",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "粉浜",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "住吉大社",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "住之江",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "七道",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "堺",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "湊",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "石津川",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "諏訪ノ森",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "浜寺公園",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "羽衣",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "高石",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "北助松",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "松ノ浜",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "泉大津",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "忠岡",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "春木",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "和泉大宮",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "岸和田",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "羽倉崎",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "吉見ノ里",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "岡田浦",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "樽井",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "尾崎",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "鳥取ノ荘",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "箱作",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "淡輪",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "みさき公園",
        trainLine: "南海・本線",
        img: ["./src/assets/Nankai_logo.png"],
    },

    // ===== 南海 高野線 =====
    {
        name: "萩ノ茶屋",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "岸里玉出",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "帝塚山",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "住吉東",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "沢之町",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "我孫子前",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "浅香山",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "堺東",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "三国ヶ丘",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "百舌鳥八幡",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "中百舌鳥",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "白鷺",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "初芝",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "萩原天神",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "北野田",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "狭山",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "大阪狭山市",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "金剛",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "滝谷",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "千代田",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },
    {
        name: "河内長野",
        trainLine: "南海・高野線",
        img: ["./src/assets/Nankai_logo.png"],
    },

    // ===== 大阪モノレール 本線 =====
    {
        name: "大阪空港",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "蛍池",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "柴原阪大前",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "少路",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "千里中央",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "山田",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "万博記念公園",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "宇野辺",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "南茨木",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "沢良宜",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "摂津",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "南摂津",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "大日",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "門真市",
        trainLine: "大阪モノレール・本線",
        img: ["./src/assets/monorail_logo.svg"],
    },

    // ===== 大阪モノレール 彩都線 =====
    {
        name: "公園東口",
        trainLine: "大阪モノレール・彩都線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "阪大病院前",
        trainLine: "大阪モノレール・彩都線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "豊川",
        trainLine: "大阪モノレール・彩都線",
        img: ["./src/assets/monorail_logo.svg"],
    },
    {
        name: "彩都西",
        trainLine: "大阪モノレール・彩都線",
        img: ["./src/assets/monorail_logo.svg"],
    },

    // ===== 阪急線 =====
    {
        name: "大阪梅田",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "十三",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "南方",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "崇禅寺",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "淡路",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "上新庄",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "相川",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "正雀",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "摂津市",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "南茨木",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "茨木市",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "総持寺",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "富田",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "高槻市",
        trainLine: "阪急線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },

    // ===== 近鉄 南大阪線 =====
    {
        name: "大阪阿部野橋",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "河堀口",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "北田辺",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "今川",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "針中野",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "矢田",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "河内天美",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "布忍",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "高見ノ里",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "河内松原",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "恵我ノ里",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "高鷲",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "藤井寺",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "土師ノ里",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "道明寺",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "古市",
        trainLine: "近鉄・南大阪線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },

    // ===== 近鉄 奈良線（難波線含む）=====
    {
        name: "大阪難波",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "近鉄日本橋",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "大阪上本町",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "鶴橋",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "今里",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "布施",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "河内永和",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "河内小阪",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "八戸ノ里",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "若江岩田",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "河内花園",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "東花園",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "瓢箪山",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "枚岡",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "額田",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "石切",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
    {
        name: "生駒",
        trainLine: "近鉄・奈良線",
        img: ["./src/assets/Hankyu_logo.jpg"],
    },
];

stationBtn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * osakaStations.length);
    console.log(randomNum);
    let inputHTML = "";
    inputHTML += `
      <div class="flex gap-[12px]">
    `;
    osakaStations[randomNum].img.forEach((e) => {
        inputHTML += `
          <img
            id="trainImg"
            src="${e}"
            alt=""
            class="w-[48px] h-[48px] object-cover my-[12px] animate-fadeUp"
          />    
        `;
    });
    inputHTML += `
      </div>
    `;
    inputHTML += `
      <div class="flex flex-col gap-[4px] justify-center items-center">
          <h2 id="stationName" class="text-3xl font-bold md:text-4xl animate-fadeUp">${osakaStations[randomNum].name}</h2>
          <p id="trainLine" class="text-sm text-gray-500 animate-fadeUp">${osakaStations[randomNum].trainLine}</p>
      </div>
    `;
    stationWrap.innerHTML = inputHTML;
});
