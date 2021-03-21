let travelCardData = [{
    area: "台北",
    img: "images/photo-1@2x.png",
    title: "綠島自由行套裝行程",
    score: 5.3,
    introduction: "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    remaining: "剩下最後 8 組",
    price: "1,280",
}, {
    area: "台北",
    img: "images/photo-2@2x.png",
    title: "清境高空觀景步道二日遊",
    score: 8.2,
    introduction: "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    remaining: "剩下最後 12 組",
    price: "2,580",
}, {
    area: "台中",
    img: "images/photo-3@2x.png",
    title: "南庄度假村露營車二日遊",
    score: 9.2,
    introduction: "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    remaining: "剩下最後 2 組",
    price: "2,580",
}, {
    area: "台中",
    img: "images/photo-4@2x.png",
    title: "南庄度假村露營車二日遊",
    score: 9.3,
    introduction: "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    remaining: "限時搶購",
    price: "880",
}, {
    area: "台中",
    img: "images/photo-5@2x.png",
    title: "漁樂碼頭釣魚體驗套票",
    score: 8.2,
    introduction: "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    remaining: "剩下最後 5 組",
    price: "1,280",
}, {
    area: "高雄",
    img: "images/photo-6@2x.png",
    title: "熊森公園親子二日遊套票",
    score: 8.6,
    introduction: "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    remaining: "剩下最後 3 組",
    price: "2,480",
}]


const $travelCard_list = document.querySelector('.travelCard_list');
const $search_total = document.querySelector('#search_total');
const $filter = document.querySelector('#filter');

let str = "";

// 初始化
function init() {
    printData(travelCardData);
}

// filter改變的話，顯示對應結果
function filter() {
    $filter.addEventListener('change', function (e) {
        let strFilter = [];
        // 如果選到全部地區的話，要印出全部資料
        if(e.target.value === "全部地區"){
            console.log(travelCardData);
            printData(travelCardData);
            return
        }else{
            // 篩選對應資料
            travelCardData.forEach(function(value,index) {
                if(e.target.value === value.area){
                    strFilter.push(value)
                }
            });
            printData(strFilter)
        }
    })
}


// 把資料印在畫面上
function printData(data) {
    let str = "";
    data.forEach(function (value) {
        let content =
            `<li class="item col-12 col-md-6 col-lg-4">
                <div class="g_travelCard">
                    <div class="tag_area">${value.area}</div>
                    <div class="cover">
                        <div class="pb" style="background: url(${value.img});background-size: cover;">
                        </div>
                    </div>
                    <div class="info">
                        <div class="tag_scroe">${value.score}</div>
                        <h2 class="info_title">${value.title}</h2>
                        <p class="info_introdution">${value.introduction}</p>
                        <div class="row font_main align-items-center ">
                            <div class="col-6">
                                <i class="fas fa-exclamation-circle"></i>
                                <span>${value.remaining}</span>
                            </div>
                            <div class="col-6 text_right">
                                <span class="g_price">
                                    <span>TWD </span>
                                    <span class="price"><span>$</span><span>${value.price}</span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>`
        str += content
    });
    // 資料總數
    $search_total.textContent = data.length;
    // 下方卡片
    $travelCard_list.innerHTML = str;
}

init();
filter();