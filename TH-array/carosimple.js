// hien thi ban co
let b =  document.getElementById("carogame");
let board = [];
let data = "";
                                                    // tao 1 mang chua cac so 0
for (let i = 0; i<5; i++){
    board[i] = new Array(0,0,0,0,0);
}
                                                    //dien so 0 vao cac hang, cot
for (let i = 0;i<5;i++){
    data += "<br/>";                                //tao dong
    for (let j=0;j<5;j++){                          // dien so khong vao tung dong
        data +=board[i][j] + "&nbsp;&nbsp;";
    }
}
b.innerHTML= data;
function changeValue() {
    let positionX = prompt("X: ") ;
    while (positionX >= 5) {
        positionX = prompt("X: ");
    }
    let positionY = prompt("Y: ");
    while (positionY >= 5) {
        positionY = prompt("Y: ");
    }
    data="";
    board[positionX][positionY] = "x";               // x la gia tri muon chuyen tu so 0
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";       // tao lai bang voi chu x
        }
    }
    b.innerHTML =  data;
}