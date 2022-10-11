// ! change title by IDname  1
    let tag = document.getElementById("tag")
const changeTitle = function() {
  tag.innerText="this header is changed by ID"     

};

/* ! this is arrow function
myHeading = () => document.getElementsByClassName("myHeading").innerHTML = "this header  changed by ClassName"

*/
//    !  this title change by classname 2
const addClassToTitle = function() {
     var tagClass = document.getElementsByClassName("myHeading")
    for (let m = 0; m < tagClass.length; m++) {
        tagClass[m].innerHTML = "this text is changed by Class name"
        
    }
}
//   ! change p tag as a child elemenet 3
const changePcontent =  function() {
    var parent = document.getElementById('parentDiv');
    var  child = parent.childNodes;

    child[1].innerHTML = " this text change as child element"
    
}

// ! change href every click 4
const chanegUrls = function() {
    var link  = document.querySelector("a")
  link.getAttribute("href");
  link.setAttribute("href", "https://www.javascript.com/");
  link.textContent = " This web site changed to JS Website"
}


// ! Adding new list  5 
const addToTheSecond = function(){
    var ulli = document.getElementById("secondList")
     ulli.addEventListener("click", ()  => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode("first"));
        ulli.appendChild(li)
     })
}

 
// ! Adding paragraph 6 

const addParagraph = function() {
     var addP = document.getElementById("addP");
     addP.innerHTML +=  "<h4>Added new html p tag </h4>"

}

// ! Dissapear from list 7

const fistUlDisappear = function() {
     const dissApper = document.getElementById("firstList");
     dissApper.style.display = 'none' + paintItGreen()
    }
     
    // ! there is I got  some problem I'll try to fix it 
    
    const paintItGreen = function() {
        // alert("hih")
        const dissApper = document.getElementById("firstList");
        dissApper.style.background = 'green'
}

// ! change heading color    when you click header one it will change color 9

const makeItClickable = function(){
    let tag = document.getElementById("tag")
    tag.style.color = randomColor()
}
function randomColor(){
    return ("#" + (Math.floor(Math.random()*16777215).toString(16)));
  };

//   ! change footer text 10 

const changeFooterText = function() {
    var footer = document.getElementById("footer")

    footer.innerHTML = "You clicket the footer"
}


// !  11 something went wrong 

const inputField = document.getElementById("input-field");
var inputres = document.getElementById("inputRes")
function changeHeader(){
 for (let b = 0; b < inputField.length; b++) {
    
     inputField[b].addEventListener('click', function() {
        inputres(this.value)
     })
 }    
}


// !  12 
 window.onload = function(){
     document.getElementById("onLoad").innerHTML = "thi text is change"
 }