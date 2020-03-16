let x=0;
let example = Array();

function add_element_to_array() {
    example[x] = document.getElementById("txtValue") ;//lay gia tri tu input-text va gan phan tu vi tri x
    alert("Element: " + example[x] + " Added at index " + x);
    x++;//tang gia tri x len 1
    document.getElementById("txtValue ") = ""; // gan gia tri rong cho input-text
}
function display_array() {
    let e = "<hr/>";
    for (let i=0; i<example.length; i++){
        e += "Element: " + i +" = " + example[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e ;
}