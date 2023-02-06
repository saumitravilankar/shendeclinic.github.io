
function closeForm(){
    document.getElementById('getintouch-form').style.display = 'none'
    document.getElementById('getintouch-btn').style.display = 'block'
}

function openForm(){
    document.getElementById('getintouch-form').style.display = 'block'
    document.getElementById('getintouch-btn').style.display = 'none'
}

let topBtn = document.getElementById('go-to-top')

let myScrollFunc = function(){
    let y = window.scrollY;
    if (y>=800) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
};

window.addEventListener("scroll",myScrollFunc)