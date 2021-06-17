var listItem = document.querySelector(".list-item");
var iconNav = document.getElementById("icon-nav");
var iconClose = document.getElementById("icon-close");
var httpReq = new XMLHttpRequest();
var allDate = [];



getDate();
function getDate(){

    httpReq.open("GET", "https://jsonplaceholder.typicode.com/posts")
    httpReq.send();

    httpReq.onreadystatechange = function(){
        if(httpReq.readyState == 4 && httpReq.status == 200){
            allDate = JSON.parse(httpReq.response)
            displayData();
        }
    }

}


function displayData(){
    temp = "";
    for(var i=0 ; i < allDate.length ; i++){
        temp+=`<div class="item">
        <img src="img.jpg" alt="image">
        <span>`+allDate[i].id+`</span>
        <h2>`+allDate[i].title+`</h2>
        <p>`+allDate[i].body+`</p> 
        </div>`
    }
    document.getElementById("row-data").innerHTML = temp
}


// navbar
// to show the list item 
iconNav.addEventListener("click", showList);
function showList(){
    listItem.style.top = "0"
}
// to hiden the list item
iconClose.addEventListener("click",hidenList);
function hidenList(){
    listItem.style.top = "-440px"
}
