let tenSach = prompt("Nhập tên sách:");
let soThuTu = prompt("Nhập số thứ tự của sách trong thư viện:");

let tenSachGoc = tenSach;

let tenSachChuanHoa = tenSach.trim().toUpperCase();

let maSach = "LIST - " + tenSachChuanHoa + " - " + soThuTu;

console.log("Tên sách gốc: " + tenSachGoc);
console.log("Mã sách sau chuẩn hóa: " + maSach);