//tiêu đề
function updateChange(alias) {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.split(/\s|_|(?=[A-Z])/).join('-');
    str = str.trim();
    return str;

}

function myFuntion() {
    let getString = document.getElementById('myInput').value;
    let myLink = "http://localhost/wordpress/2017/03/23/";
    let str = updateChange(getString).toLowerCase();
    document.getElementById('myLink').value = myLink + str;

}


function allWriter(inputtxt) {
    let banner = document.getElementById("subject")
    let charWriter = /^[A-Za-z]+$/.test(banner);
    if (charWriter) {
        alert('Your name have accepted : you can try another');
        return true;
    } else {
        alert('Please input alphabet characters only');
        return false;
    }

}

function functionReset() {
    document.getElementById("myFrom").reset();
}

function functionSubmit() {
    document.getElementById("mySubmit").submit();
}

let arr = [];
let end = 0;
function Add_Element() {
    let input = document.getElementById("input");
    let result = document.getElementById("all_product");
    for (let i in arr) {
        if (end > arr.length) {
            end++;
            let box = "<div class='box'> <strong>" + (input.value).replace(/ +/g, "").toLowerCase() + "</strong>"
                + "<input class='btn' type='button' name='add' value='✖' onclick='Remove_Element(this);'>"
                + "</div>";

            result.innerHTML += box;
            input.value = "";

        }else if(input === (input.value).replace(/ +/g, "").toLowerCase() ){
            alert("phan tu da dc tao")
        }
    }

}

function Remove_Element(elm) {
    elm.parentElement.parentElement.removeChild(elm.parentElement);


}

