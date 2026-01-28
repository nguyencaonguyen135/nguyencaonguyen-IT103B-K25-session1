//khai bao bien
let bookName="  Lap trinh web voi JavaScript   ";
let authorName="Nguyen Van A";
let publish=2022;
let price=100000;
let quality=100;

//chuan hoa du lieu
bookName.trim();//loai bo trang o dau va cuoi
bookName.toUpperCase();//chuyen thanh chu hoa
console.log("chuoi sau khi sua:",bookName.trim().toUpperCase());
console.log("Ten tac gia sau sua:", authorName.toUpperCase());

//tao ma dinh dang
console.log("3 ki tu dau ten tac gia",authorName.slice(0,3));
console.log("nam xuat ban",publish);
console.log("so ngau nhien tu 1->1000",Math.ceil(Math.random()*1000));

let bookCode=`${authorName.slice(0,3)}-${publish}-${Math.ceil(Math.random()*1000)}`;

console.log("ma sach:",bookCode);

//tinh toan so lieu
console.log("thoi gian hien tai:", new Date());
//lay thoi gian
let year=new Date().getFullYear();
let month=new Date().getMonth()+1;
let day=new Date().getDate();
let hour=new Date().getHours();
let minute=new Date().getMinutes();
let second=new Date().getSeconds();

console.log("nam hien tai:",year);
console.log("thang hien tai:",month);
//tuoi cua sach
let bookAge=year - publish;
console.log("tuoi cua sach:",bookAge);
//tong tien sach
let totalPrice=price * quality;
console.log("tong tien sach:",totalPrice);

//in ra phieu nhap kho
console.log(`
    ---PHIEU NHAP KHO---
    Ma sach: ${bookCode}
    Ten sach: ${bookName.trim().toUpperCase()}
    Tac gia: ${authorName.toUpperCase()}
    Nam xuat ban: ${publish}
    Tuoi sach: ${bookAge} nam
    Tong gia tri don hang: ${totalPrice} VND
    Ngan ke goi y:Ke so ${Math.ceil(Math.random()*10)}(so ngau nhien tu 1 den 10)
`);