['contextmenu','selectstart'].forEach(function(t){document.querySelector(".keyboard").addEventListener(t,function(e){e.preventDefault();});});

let xBtn = document.querySelector(".x-btn");
let loginIcon = document.querySelector(".login-icon");
let inputText = document.querySelector("#inputText");
let keyBoard = document.querySelector(".keyboard");
let keys = document.querySelectorAll(".keyboard > div > div");
// document.querySelector(".")
function close(){
    document.querySelector(".login-cover").style.display = "none";
    document.querySelector(".question-cover").style.display = "none";
    keyBoard.style.marginTop = "300px";
    keyBoard.style.visibility = "hidden";
    document.querySelector(".moniter").style.marginTop = "100px"
    inputText.value = "";
}
document.querySelector(".backspace").addEventListener("click", function(){
    cal.password.value = cal.password.value.substring(0, cal.password.value.length-1);
});

function add(char) {
    inputText.value = inputText.value + char;
}
window.onkeydown = (event) => {
    if(event.keyCode == 27){
        close()
    };
};
  
// 전원버튼
document.querySelector(".btn-cover").addEventListener("click", ()=>{
    close()
    document.querySelector(".display-off-toggle").classList.toggle("display-off");
    document.querySelector(".light").classList.toggle("light-on");
    document.querySelector(".game").style.display = "none";
    document.querySelector(".help").style.display = "none";
    document.querySelector(".key-sound").play()
});
xBtn.addEventListener("click", ()=>{
    close()
});
document.querySelector(".qx-btn").addEventListener("click",()=>{
    document.querySelector(".question-cover").style.display = "none";
})
document.querySelector(".question-btn").addEventListener("click",()=>{
    document.querySelector(".question-cover").style.display = "block";
})



document.querySelector(".esc").addEventListener("click", ()=>{
    close()
});
loginIcon.addEventListener("click", ()=>{
    document.querySelector(".login-cover").style.display = "block";
    keyBoard.style.visibility = "visible";
    keyBoard.style.marginTop = "20px";
    document.querySelector(".moniter").style.marginTop = "-80px";
    inputText.focus();
});



document.querySelector(".t-rex-icon").addEventListener("click", ()=>{
    document.querySelector(".game").style.display = ""
});
document.querySelector(".game-close").addEventListener("click", ()=>{
    document.querySelector(".game").style.display = "none"
});

document.querySelector(".window-icon").addEventListener("click", function(){
    document.querySelector(".help").style.display = "block"
});
document.querySelector(".help-close").addEventListener("click", function(){
    document.querySelector(".help").style.display = "none"
});


for(let i = 0; i < keys.length; i ++){
    keys[i].addEventListener("click", function(){
        document.querySelector(".on-off-sound").play()
    });
}

// sha256

function sha256(str) {
    var buffer = new TextEncoder("utf-8").encode(str);
    return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
        return hex(hash);
    });
}
function hex(buffer) {
    var hexCodes = [];
    var view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
        var value = view.getUint32(i)
        var stringValue = value.toString(16)
        var padding = '00000000'
        var paddedValue = (padding + stringValue).slice(-padding.length)
        hexCodes.push(paddedValue);
    }
    return hexCodes.join("");
}

$(document).ready(function(){
    function login(){
        sha256($("#inputText").val()).then(function(digest) {
            if(digest == "d6acddffc62cf9e1fd090c4e03dbea2627795eeab5e80724d0104c49e9c2eedb"){
                close()
                document.querySelector(".login-sound").play()
                document.querySelector(".fin-login").style.backgroundColor = "black"
                document.querySelector(".fin-login").style.zIndex = "100"
                document.querySelector(".fin-login").style.opacity = "1"
                setTimeout(function(){
                    location.href="https://pybin94.github.io/portfolio.github.oi/main.html";
                }, 3500);
            }else{
                document.querySelector(".error-sound").play()
                inputText.value = "";
            }
        });
    }
    
    $("#sha256Button").click(function(){
        login()
    });
    $(".enter").click(function(){
        login()
    });
});


