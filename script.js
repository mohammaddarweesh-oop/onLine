let title = document.querySelector("#title");
let ul = document.querySelector("ul");
let reload = document.querySelector(".reload");





//=======================================================
window.onload = function(){
    if ( window.navigator.onLine == true) {
        onLine();
    }
    else{
        offLine();
    }
};


if (navigator.offLine == false) {
    console.log('offline');
} else {
    console.log('online');
}

//=======================================================
window.addEventListener("online",function () {
    onLine();
});

window.addEventListener("offline",function () {
    offLine();
});


reload.onclick = function(){
    window.location.reload();
};


function onLine(){
    title.innerHTML = "OnLine Now";
    title.style.color = 'green';
    ul.classList.add("hide");
    reload.classList.add("hide");
};
function offLine(){
    title.innerHTML = "OffLine Now";
    ul.classList.remove("hide");
    reload.classList.remove("hide");
    title.style.color = '#666';
};


