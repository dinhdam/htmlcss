//tiêu đề
function updateChange(alias) {
   let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim();
    return str;

}

function myFuntion() {
     let getString = document.getElementById('input').value;
     let myLink = "http://localhost/wordpress/2017/03/23/";
     let  str = updateChange(getString);
     document.getElementById('myLink').innerHTML = myLink + str;

}


// function allWriter(inputtxt){
//     let banner = document.getElementById("subject")
//     let charWriter = /^[A-Za-z]+$/.test(banner);
//     if(charWriter){
//         alert('Your name have accepted : you can try another');
//         return true;
//     }else {
//         alert('Please input alphabet characters only');
//         return false;
//     }
//
// }