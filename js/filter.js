//store_list : 음식집 정보를 넣어둠
const store_list = [
    {
        store_name : "hanyangchon",
        food_type : "korean",
        situation : ["alone"],
        taste : ["spicy","hot"],
        food_list : ["불고기","찌개","닭볶음","제육"]
    },
    {
        store_name : "daeyeongak",
        food_type : "chinese",
        situation : ["alone","delivery","many"],
        taste : ["spicy","hot"],
        food_list : ["짜장","자장","짬뽕","볶음밥","탕수육","깐풍기"]
    },
    {
        store_name : "minesskitchen",
        food_type : "japanese",
        situation : ["many"],
        taste : ["clean"],
        food_list : ["라멘","카레","우동","야끼","돈부리"]
    },
    {
        store_name : "dasiallchicken",
        food_type : "korean",
        situation : ["alone","many","soju"],
        taste : ["spicy","hot"],
        food_list : ["치킨","곰탕","칼국","닭똥"]
    },
    {
        store_name : "thaiinplate",
        food_type : "other",
        situation : ["alone","many"],
        taste : ["spicy","clean"],
        food_list : ["나시고","쌀국","팟타","푸팟퐁"]
    },
    {
        store_name : "gwizok",
        food_type : "korean",
        situation : ["many","wrap","delivery"],
        taste : ["clean"],
        food_list : ["보쌈","족발"]
    },
    {
        store_name : "crazy_padak",
        food_type : "yasik",
        situation : ["many","wrap","delivery"],
        taste : ["greasy"],
        food_list : ["파닭","치킨"]
    },
    {
        store_name : "chef",
        food_type : "boonsik",
        situation : ["many","alone"],
        taste : ["greasy","clean"],
        food_list : ["돈까스"]
    },
    {
        store_name : "hansot",
        food_type : "korean",
        situation : ["alone","wrap","speed","money"],
        taste : ["clean"],
        food_list : ["컵밥","마요","도시락"]
    },
    {
        store_name : "grandmother",
        food_type : "korean",
        situation : ["alone","many"],
        taste : ["clean"],
        food_list : ["불백","불고기"]
    },
    {
        store_name : "pizzarang",
        food_type : "yasik",
        situation : ["many","wrap","money"],
        taste : ["clean","greasy"],
        food_list : ["피자"]
    },
    {
        store_name : "kongnamul",
        food_type : "korean",
        situation : ["many","alone","soju"],
        taste : ["hot"],
        food_list : ["국밥"]
    },
    {
        store_name : "knife_noodle",
        food_type : "korean",
        situation : ["many","alone","soju"],
        taste : ["hot","clean"],
        food_list : ["칼국"]
    },
    {
        store_name : "chef_burger",
        food_type : "korean",
        situation : ["alone","wrap","speed","moeny"],
        taste : ["clean"],
        food_list : ["밥버"]
    },
    {
        store_name : "country",
        food_type : "korean",
        situation : ["alone","many"],
        taste : ["clean"],
        food_list : ["덮밥","찌개","제육"]
    },
    {
        store_name : "bossam_zebok",
        food_type : "korean",
        situation : ["alone","many"],
        taste : ["clean","hot","greasy"],
        food_list : ["보쌈","갈비","국밥"]
    },
    {
        store_name : "sageun_chicken",
        food_type : "yasik",
        situation : ["many","alone","wrap","delivery","money"],
        taste : ["greasy"],
        food_list : ["치킨","통닭"]
    },
    {
        store_name : "jongjum_toast",
        food_type : "other",
        situation : ["speed","money","wrapd"],
        taste : ["clean"],
        food_list : ["토스"]
    },
    {
        store_name : "kungfu",
        food_type : "chinese",
        situation : ["many","soju"],
        taste : ["spicy","hot"],
        food_list : ["마라"]
    },
    {
        store_name : "sincham",
        food_type : "boonsik",
        situation : ["many","alone","wrap"],
        taste : ["spicy"],
        food_list : ["떡볶","튀김","어묵","오뎅"]
    },
    {
        store_name : "banmi",
        food_type : "other",
        situation : ["alone","wrap","money","speed"],
        taste : ["spicy","clean"],
        food_list : ["반미","토스"]
    },
    {
        store_name : "daeseong",
        food_type : "korean",
        situation : ["many"],
        taste : ["clean"],
        food_list : ["불고","제육","볶음","삼겹","찌개"]
    },
    {
        store_name : "ddabong",
        food_type : "korean",
        situation : ["many","soju"],
        taste : ["spicy","hot"],
        food_list : ["감자","닭볶음"]
    },
    {
        store_name : "three_road",
        food_type : "korean",
        situation : ["many","alone",],
        taste : ["hot","clean"],
        food_list : ["백반","조림","찌개","제육"]
    },
    {
        store_name : "soon_dae_guk",
        food_type : "korean",
        situation : ["many","alone","soju","delivery","wrap"],
        taste : ["hot","spicy"],
        food_list : ["국밥"]
    },
    {
        store_name : "soup_villege",
        food_type : "korean",
        situation : ["many","alone","soju"],
        taste : ["hot","spicy"],
        food_list : ["찌개"]
    },
    {
        store_name : "one_kki",
        food_type : "korean",
        situation : ["alone","money"],
        taste : ["hot","clean"],
        food_list : ["찌개","순두","제육","볶음"]
    },
    {
        store_name : "dakeo",
        food_type : "japanese",
        situation : ["alone"],
        taste : ["clean"],
        food_list : ["덮밥","돈카","육회"]
    },
    {
        store_name : "ddukbaegi",
        food_type : "korean",
        situation : ["alone","many","soju"],
        taste : ["hot","spicy"],
        food_list : ["해장","라면","볶음밥","제육","볶음"]
    },
]

//filter_list : filter 체크한 것들을 각각 list에 넣어줌
let filter_type_list = [];
let filter_situation_list = [];
let filter_taste_list = [];

//감추는 기능을 위해 document를 받음, hidden은 const로 설정
const filter_button = document.querySelector("#filter button");
const checkbox_hidden = document.querySelector(".hidden_select");
const hidden_name = "hidden";

// 감추는 기능, hidden css에 display off기능으로, class를 추가하고 삭제
function hidden_reverse() {
    if(checkbox_hidden.classList.contains(hidden_name)) {
        checkbox_hidden.classList.remove(hidden_name);
    }
    else {
        checkbox_hidden.classList.add(hidden_name);
    }
}

//filter click event 발생으로 hidden을 class에 넣을지 말지 정함
filter_button.addEventListener("click",hidden_reverse);

// 필터 적용하기, 각 체크박스에 box_filter를 onclick_up으로 할당
function box_filter(target) {
    target.style.color = "White";
    //check box에 해당하는 요소들을 가져옴
    const value = target.value;
    const name = target.name;
    const IsCheck = target.checked;

    //만약 상관없음이면 함수 실행 X
    if(value == 'all'){
        return;
    }

    //ischeck로 체크한지 안한지 판단, 체크 시 filter_list들에 각각 나누어서 추가
    if(IsCheck == true){
        if(name == "food_type"){
            filter_type_list.push(value);
        }
        else if(name == "situation"){
            filter_situation_list.push(value);
        }
        else{
            filter_taste_list.push(value);
        }
    }

    //체크 풀 시 filter를 사용, 해당하는 내용을 걸러서 새로운 list를 만들어 바꿈
    else{
        if(name == "food_type"){
            let new_filter_list = filter_type_list.filter((target) => target !== value);
            filter_type_list = new_filter_list;
        }
        else if(name == "situation"){
            let new_filter_list = filter_situation_list.filter((target) => target !== value);
            filter_situation_list = new_filter_list;
        }
        else{
            let new_filter_list = filter_taste_list.filter((target) => target !== value);
            filter_taste_list = new_filter_list;
        }
    }

    //for문을 통해 store_list에서 가게를 하나씩 검사
    for(let i = 0; i < store_list.length; i++) 
    {
        //가게에 관한 정보를 가져옴
        const food = store_list[i];
        let type_ok = false;
        let situation_ok = false;
        let taste_ok = false;
        
        // 각각 필터에 대해서 for문을통해 filter의 text와 각 가게의 필터에 대한 정보 일치 여부 판단
        // 일치하면 true를 넣어줌
        for(let k = 0; k < filter_type_list.length; k++){
            if(filter_type_list[k] == food.food_type){
                type_ok = true;
            }
        }

        for(let k = 0; k < filter_situation_list.length; k++){
            for(let j = 0; j < food.situation.length;j++){
                if(food.situation[j] == filter_situation_list[k]){
                    situation_ok = true;
                }
            }
        }
        for(let k = 0; k < filter_taste_list.length; k++){
            for(let j = 0; j < food.taste.length;j++){
                if(food.taste[j] == filter_taste_list[k]){
                    taste_ok = true;
                }
            }
        }   

        //만약 각 필터에 대해 체크가 없을 경우, 무조건 true, 체크가 없음에도 가게가 안나타나는 것 방지
        if(filter_type_list.length == 0){
            type_ok = true;
        }
        if(filter_situation_list.length == 0){
            situation_ok = true;
        }
        if(filter_taste_list.length == 0){
            taste_ok = true;
        }
        
        //검색 검사 -> 가게이름 문자열을 찾으면 true 반환
        let search_ok = false;
        const search = document.getElementById("Search").value;
        const store_id = document.getElementById(store_list[i].store_name); //store의 전체 요소 가져오기
        const store_name = store_id.querySelector(".store_name").innerText;

        //검색 검사 -> 음식 이름 찾으면 true 반환
        const now_food_list = store_list[i].food_list;

        //음식이름이 포함 되는가?
        let food_is_true = -1;

        for(let k=0; k<store_list[i].food_list.length; k++)
        {
            const now_food = now_food_list[k];
            //음식이름에 해당하는 것을 찾음
            if(search.indexOf(now_food) != -1 || now_food.indexOf(search) != -1)
            {
                food_is_true = true;
                break;
            }

        }

        //indexoOf 사용, 문자열을 미포함 시 -1을 반환해주는 것 체크
        if(store_name.indexOf(search) == -1 && food_is_true == -1) {
            search_ok = false;
        }
        else {
            search_ok = true;
        }




        
        //true라면 dispaly, false라면 display 안함
        if(type_ok==true && situation_ok==true && taste_ok==true && search_ok==true) {
            const doc_name = document.getElementById(food.store_name);
            doc_name.style.display = "";
        }
        else {
            const doc_name = document.getElementById(food.store_name);
            doc_name.style.display = "none";
        }
    }
}
