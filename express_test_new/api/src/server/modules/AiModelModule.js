//模型使用相關 功能
var mariadb = require("mariadb/callback");
var con = require("../../config/DBconfig");
var fs = require("fs");
var fileurl = require("../../config/Fileconfig");

// 資料庫連線
const pool = mariadb.createPool({
  port: con.port, // 連接阜號
  host: con.host, // 主機名稱
  user: con.user, // 用戶名稱
  password: con.password, // 資料庫密碼
  database: con.database, // 資料庫名稱
  connectionLimit: con.connectionLimit, //連線池限制
});

//nn_network.html 頁面功能
const get_filelength = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("" + fileurl.url_module + "", (err, result) => {
      if (err) console.log(err);
      resolve(result); // 撈取成功回傳 JSON 資料
    });
  });
};

/* 刪除模型 */
const delete_nn_module = (insertValues) => {
  return new Promise((resolve, reject) => {
    console.log(insertValues.x, "adsasd");
    fs.unlink(
      "" + fileurl.url_module + "" + "/" + insertValues.x + "",
      (err, result) => {
        if (err) console.log(err);
        console.log(insertValues.x, "adsasdaaa");
        resolve(result); // 撈取成功回傳 JSON 資料
        console.log("已經刪除檔案!");
      }
    );
  });
};

/* GET 取得現在使用的模型  */
const select_module = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("select module_name from bpnn_module", (error, result) => {
          if (error) {
            console.error("SQL error: ", error);
            reject(error); // 寫入資料庫有問題時回傳錯誤
          } else {
            resolve(result); // 撈取成功回傳 JSON 資料
          }
          conn.release();
        });
      }
    });
  });
};

//更新模型路徑
const Insert_NN_file = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        file_namee = insertValues.file_name;
        file_path = fileurl.url_module + file_namee;
        conn.query(
          "UPDATE bpnn_module SET module_name ='" +
            file_path +
            "' Where module_ID = 1",
          (error, result) => {
            if (error) {
              console.error("SQL error: ", error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            } else {
              resolve(result); // 撈取成功回傳 JSON 資料
            }
            conn.release();
          }
        );
      }
    });
  });
};


module.exports.Insert_NN_file = Insert_NN_file;
module.exports.get_filelength = get_filelength;
module.exports.delete_nn_module = delete_nn_module;
module.exports.select_module = select_module;