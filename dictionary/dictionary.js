var eng = ["foe","bow","worthy","swallow","overexposure","stuff","fear","pure"];
var vie = ["kẻ địch","cúi chào","xứng đáng","nuốt","tiếp xúc quá mức","đồ đạc","sợ hãi","nguyên chất"];
var str = "";
var index = -1;

function SearchWord() {
    str = document.getElementById("word").value;
    eng.toString();
    for (let i = 0; i < str.length; i++) {
        if (str === eng[i]) {
            index = i;
            break;
        }
    }
    if (index != -1){
        document.getElementById("result").innerHTML = vie[index];
    }else document.getElementById("result").innerHTML = "not found";
    index = -1;
}
