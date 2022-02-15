

// -------------フェードイン------------
$(function(){
    setTimeout(function(){
        $(".start p").fadeIn(1600);
    },500);
    setTimeout(function(){
        $(".start").fadeOut(1600);
    },4000);
});



// -------------ボタンを取る---------------
// let btn = document.getElementById("check");

// -----------ボタンにクリックイベントを追加 Bucket list------------
// btn.addEventListener("click",function(){
//     let text = document.getElementById("dream");
//     if (text.value != ""){
//     let list = document.createElement("li");
//     list.classList.add("list");
//     list.textContent = text.value;
//     let inner = document.getElementsByClassName("text-inner");
//     inner[0].appendChild(list);
//     let div = document.createElement("div");
//     div.classList.add("div-icon");
//     list.appendChild(div);
//     let divss = document.createElement("div");
//     divss.classList.add("success");
//     div.appendChild(divss);
//     let divde = document.createElement("div");
//     divde.classList.add("delete");
//     div.appendChild(divde);
//     divss.addEventListener("click",function(){
//         swal("Congratulation!!");
//         list.remove();
//     })
//     divde.addEventListener("click",function(){
//         var options = {
//             text: "Do you want to give up？",
//             buttons: {
//                 cancel: "I will try again",
//                 ok: "Give up"
//             }
//         };
//         swal(options).then(function(value){
//             if(value){
//                 swal("Fuck you");
//                 list.remove();
//             }else{
//                 swal("You can do it")
//             }
//         });
        
    
//     })
//     text.value = "";
// }
// })

let data = JSON.parse(localStorage.getItem("key"));
if(data == null){
    data = [];
}else{
for(const d of data){
    createTask(d);
}
}


// -------------ボタンを取る---------------
let btn = document.getElementById("check");

// -----------ボタンにクリックイベントを追加 Bucket list------------
btn.addEventListener("click",function(){
    let text = document.getElementById("dream");
    if (text.value != ""){
        createTask(text.value);
        data.push(text.value);
        localStorage.setItem("key",JSON.stringify(data));
        text.value = "";
    }
})
        function createTask(item){
    let list = document.createElement("li");
    list.classList.add("list");
    list.textContent = item;
    let inner = document.getElementsByClassName("text-inner");
    inner[0].appendChild(list);
    
    let div = document.createElement("div");
    div.classList.add("div-icon");
    list.appendChild(div);
    let divss = document.createElement("div");
    divss.classList.add("success");
    div.appendChild(divss);
    let divde = document.createElement("div");
    divde.classList.add("delete");
    div.appendChild(divde);
    divss.addEventListener("click",function(){
        swal("Congratulation!!");
        list.remove();
        data.splice(data.indexOf(item),1);
        localStorage.setItem("key",JSON.stringify(data));
    })
    divde.addEventListener("click",function(){
        var options = {
            text: "Do you want to give up？",
            buttons: {
                cancel: "I will try again",
                ok: "Give up"
            }
        };
        swal(options).then(function(value){
            if(value){
                swal("Fuck you");
                list.remove();
            }else{
                swal("You can do it")
            }
        });
        
        data.splice(data.indexOf(item),1);
        localStorage.setItem("key",JSON.stringify(data));
        
    })
   
}

// ------------現在時刻--------------
const clock = () => {
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekDay = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let day = weekDay[dayNum];
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    month = month < 10 ?"0" + month : month;
    date = date < 10 ?"0" + date : date;
    hour = hour < 10 ?"0" + hour : hour;
    min = min < 10 ?"0" + min : min;
    sec = sec < 10 ?"0" + sec : sec;

    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;

    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
};

setInterval(clock,1000);



// -------------年齢チェックからの寿命カウントダウン---------------
let age_btn = document.getElementById("age-check");
let age_gender = document.querySelector("#select_gender");

age_btn.addEventListener("click",function(){
    let set = document.querySelector(".date").value;
    let split = set.split("-");
    let split_year = Number(split[0]);
    let split_age = 2022 - split_year;
    let split_month = Number(split[1]);
    let split_day = Number(split[2]);
    let container2 = document.querySelector(".container2");
    container2.classList.remove("hide");
    if(age_gender.value == "male"){
        item = 82;
    }else if(age_gender.value == "female"){
        item = 88;
    }
    let answer = item - split_age;
const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const future = currentYear + answer;
const futureTime = new Date(`${split_month} ${split_day} ${future} 00:00:00`);
year.innerText = future;

function updateCountdown(){
    const currentTime = new Date();
    const diff = futureTime - currentTime;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    hours.innerText = h < 10 ?"0" + h : h;
    minutes.innerText = m < 10 ?"0" + m : m;
    seconds.innerText = s < 10 ?"0" + s : s;
}
updateCountdown();
setInterval(updateCountdown, 1000);
const currentTime = new Date();
const diff = futureTime - currentTime;
const dd = Math.floor(diff / 1000 / 60 / 60 / 24);

days.innerText = dd;
})





