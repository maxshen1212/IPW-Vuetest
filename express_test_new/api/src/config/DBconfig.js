var config = {
  port: "3306", // 連接阜號
  host: "127.0.0.1", // 主機名稱 
  user: "root", // 用戶名稱
  password: "1212", // 資料庫密碼
  database: "temps", // 資料庫名稱
  connectionLimit: 10 //連線池限制
};

module.exports = config; //模組匯出
