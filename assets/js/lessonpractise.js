// console.log(document);

// let heads = document.getElementsByTagName("h3");

// for (const item of heads) {
//     console.log(item);
// }

// let head = document.getElementById("test");
// console.log(head);

// let head = document.querySelector(".test");
// let heads = document.querySelectorAll(".test");
// console.log(heads);

// for (const item of heads) {
//     console.log(item)    
// }

// console.log(document.querySelector("#list-news .test ul"));

// let elem = document.querySelector(".test");
// elem.className = "hi";

// elem.classList.remove("test1");
// elem.classList.add("saada");

// if(elem.classList.contains("test1")){
//     elem.classList.remove("test1");
// }else{
//     console.log("yoxdur");
// }

// console.log(elem);

// let span = document.querySelector("#list-news .small-text");
// console.log(span.innerHTML);
// console.log(span.innerText);

// span.innerHTML = "Hi";

// let addBtn = document.querySelector(".add-btn");
// console.log(addBtn);

// function clickBtn(){
//     alert("Hello")
// }

// addBtn.onclick = function(){
//     clickBtn();
// }

// addBtn.addEventListener("click", function(){
//     alert('Good morning');
// })

// addBtn.addEventListener("click", function(){
//     alert('Good night');
// })

// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area");

// let head = document.querySelector("h1");


// addBtn.addEventListener("click", function(){
//      head.innerText = text.value;
//     text.value = "";
// })

// addBtn.addEventListener("click", function(){
//     if(text.value == "" ){
//         alert("Bosdu");
//         return;
//     }

//     head.innerText = text.value;
   
//    if(head.classList.contains("active-head")){
//     head.classList.remove("active-head")
//     head.classList.add("inActive-head")
//    }

//    text.value = "";
// })

// removeBtn.addEventListener("click", function(){
//     if(text.value == "" ){
//         alert("Bosdu");
//         return;
//     }

//     head.innerText = text.value;
   
//    if(head.classList.contains("inActive-head")){
//     head.classList.remove("inActive-head")
//     head.classList.add("active-head")
//    }

//    text.value = "";
// })

// let addBtn = document.querySelector(".add-btn");

// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area");

// let head = document.querySelector("h1");

// let parentLi = document.querySelector(".list-area");

// addBtn.addEventListener("click", function () {
//   if (text.value == "") {
//     alert("Bosdu");
//     return;
//   }

//   ul.innerHTML += `<li class="list-group-item">${text.value}</li>`

//   let li = document.createElement("li");

//   let icon = document.createElement("i");

//   icon.classList.add("fa-solid");
//   icon.classList.add("fa-circle-xmark");

//   li.classList.add("list-group-item");
//   li.style.border = "1px solid red";
//   li.style.backgroundColor = "green";
//   li.style.color = "white";

//   li.innerText = text.value;
//   ul.append(li);
//   icon.classList.add("icon");
//   li.append(icon);
  
//   icon.onclick = function () {
//     li.innerText = "";
//   };

//   text.value = "";
// });

// window.addEventListener("load", (event) => {
//   alert("Are you sure?");
// });
