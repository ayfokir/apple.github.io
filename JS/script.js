// let store = document.getElementById("stores");
// store.onmouseover = function () {
//   document.getElementsByClassName("store")[0].classList.add("active")
//   document.getElementsByClassName("header")[0].style.backgroundColor = "black";
// }
//console.log($(".stores1"));


//below is mouseover event on the header part
$(".header .stores1").mouseover(function (e) {
  e.preventDefault();
  $(".store").slideDown(300);
  // $(".store").addClass("active");
  $(".header").css("backgroundColor", "black");
  $(".store").css("color", "white")
  $(".store").css("display", "flex")
  $(".store").css("padding-top", "50px")
  $(".store").css("justify-content", "left")
  $(".store").css("height", "100vh");
  // console.log($(".store").attr("class"));
});


$(".header .stores1").mouseout(function (e) {
  e.preventDefault();
  $(".store").css("height", "100vh");
});



// below is mouseout event on the header part

$(".store").mouseover(function () {
  $(".store").css("height", "100vh");
})

$(".header .store").mouseout(function (e) {
  e.preventDefault();
  $(".store").slideUp(300);
  $(".header").css("backgroundColor", "rgba(0, 0, 0, 0.7)");
});



// below is used to show the header text at mim-width
let xMark;

$(".barItem").click(function (e) {
  e.preventDefault();
  $(".atminwidth").slideDown(200);
  
  $(".atminwidth").css("display", "block");
  $(".header").css("backgroundColor", "black");
  $(".atminwidth a").css("color", "white")

  xMark = $(".barItem").html("<p> x </p>");
  xMark.css("color", "white");
  xMark.css("fontSize", "3rem")
  xMark.css("cursor", "pointer")
  $(".logo1, .logo2, .logo3").css("display", "none");
  $(".lessScreen").css("position", "relative");
  
   $(".logoes").css("position", "absolute");
  $(".logoes").css("right", "5px");
  $(".logoes").css("top", "0px");
  $(".logoes").attr("class", "ayele");
});

// let us handle click on xMark
$(".ayele .barItem").click(function (e) {
  e.preventDefault();
  $(".atminwidth").css("display", "none");

  console.log($("#logo").attr("class"));
})





// store.onmouseout = function () {
//   document.getElementsByClassName("store")[0].classList.remove("active")
//   document.getElementsByClassName("header")[0].style.backgroundColor = "rgba(0, 0, 0, 0.7)";

// }




// below is the footer part event handling.
let plus = document.getElementsByClassName("handlEvent");

for (let i = 0; i < plus.length; i++){
  plus[i].onclick = function (e) {
    e.preventDefault();
    plus[i].classList.toggle("show");
  
  }
}
let firstUl = document.querySelectorAll(".hide li");
// console.log(firstUl); 
// console.log(firstUl[1]);

// for (let i = 0; i < firstUl.length; i++){
//   firstUl[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open("https://www.apple.com/mac/", "_blank");
//   });
// }


