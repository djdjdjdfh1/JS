let routineList = document.querySelectorAll("main form");
console.log(routineList);
let workout = document.querySelectorAll(".workout h4");
console.log(workout);
let forms = document.forms;
console.log(forms);


for(let i= 0; i<workout.length;i++) {
    workout[i].addEventListener("click", function () {
            for(let j= 0; j<forms.length; j++) {
                forms[j].classList.add("none");
            }
            //forms[i].classList.remove("none");
            forms[i].classList.toggle("none");
    })
}

/*function show(e) {
    if(e.target == workout[0]) {
        idBack.classList.add("none")
        idShoulder.classList.add("none");
        idChest.classList.remove("none");    
    } else if(e.target == workout[1]) {
        idChest.classList.add("none");
        idShoulder.classList.add("none");
        idBack.classList.remove("none");
    } else if(e.target == workout[2]) {
        idChest.classList.add("none");
        idBack.classList.add("none")
        idShoulder.classList.remove("none");
    }
}*/

/*
let idChest = document.querySelector("#routineChest")
let idBack = document.querySelector("#routineBack");
let idShoulder = document.querySelector("#routineShoulder")


let classChest = document.querySelector(".chest");
let classBack = document.querySelector(".back");
let classShoulder = document.querySelector(".shoulder");

classChest.addEventListener("click", function() {
    idBack.classList.add("none");
    idShoulder.classList.add("none");
    idChest.classList.remove("none");
})
classBack.addEventListener("click",function() {
    idChest.classList.add("none");
    idShoulder.classList.add("none");
    idBack.classList.remove("none");
})
classShoulder.addEventListener("click",function() {
    idChest.classList.add("none");
    idBack.classList.add("none");
    idShoulder.classList.remove("none");
})*/

// 초기값에서 클래스네임 설정 어떻게 할건가
// 시작할떄 다 논으로 했다가 하나만 추가해주면 되지 
//back.className = "none";
//shoulder.className = "none";
