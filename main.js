//Bài 2
function checkNumber(a) {
    if(a % 2 == 0) {
        console.log('Đây là số chẵn');
    }else {
        console.log('Đây là số lẻ');
    }
}
checkNumber(4);
//Bài 3
function checkDiem(diemToan, diemLi, diemHoa) {
    var diemTB = (diemToan + diemLi + diemHoa)/3;
    console.log('Điểm trung bình là:',diemTB);
    if(diemTB >= 0 && diemTB < 4) {
        console.log('Yếu');
    } if(diemTB >= 4 && diemTB < 6 ) {
        console.log('Trung bình');
    }if(diemTB >= 6 && diemTB < 8) {
        console.log('Khá');
    }if(diemTB >=8 && diemTB <=10){
        console.log('Giỏi');
    }   

}
checkDiem(7,8,9);