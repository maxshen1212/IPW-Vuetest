//取得多項式資料 功能
var mariadb = require("mariadb/callback");
var con = require("../../config/DBconfig");

// 資料庫連線
const pool = mariadb.createPool({
  port: con.port, // 連接阜號
  host: con.host, // 主機名稱
  user: con.user, // 用戶名稱
  password: con.password, // 資料庫密碼
  database: con.database, // 資料庫名稱
  connectionLimit: con.connectionLimit, //連線池限制
});

/* GET 取得 exp_tempdat 資料表 exp_temperature 欄位 */
const select_exp_temperature = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT exp_temperature FROM exp_tempdat",
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

/* GET 取得 expl_tempdat 資料表 expl_temperature 欄位 */
const select_expl_temperature = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT expl_temperature FROM expl_tempdat",
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

/* GET 取得 expl_tempdat 資料表 */
const select_expl_tempdat = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("SELECT * FROM expl_tempdat", (error, result) => {
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

/* GET 取得 exp_tempdat 資料表 */
const select_exp_tempdat = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("SELECT * FROM exp_tempdat ", (error, result) => {
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

/* PUT 更新 exp_tempdat 資料表 更改非線性C值  */
const update_exp_tempdat = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // 改變的值
        exp_pa = insertValues.x; //c
        exp_sq = insertValues.n; //n
        // 選擇的溫控點
        exp_id = insertValues.y;
        // 選擇改變的係數值C
        paselect = insertValues.z;

        if (exp_id == 11) {
          exp_id = 1;
          // 將選擇變成資料庫裡的名稱
          if (paselect == 0) {
            //多項式不用乘
            exp_paselect = "exp_c";

            conn.query(
              "UPDATE cool_exp SET " +
                exp_paselect +
                "=" +
                exp_pa +
                " WHERE exp_id = " +
                exp_id +
                " ",
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
          } else {
            exp_paselect = "exp_pa" + paselect;
            exp_sqselect = "exp_sq" + paselect;

            conn.query(
              "UPDATE exp_tempdat SET " +
                exp_paselect +
                "=" +
                exp_pa +
                "," +
                exp_sqselect +
                "=" +
                exp_sq +
                " WHERE exp_id = " +
                exp_id +
                " ",
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
        } else {
          // 將選擇變成資料庫裡的名稱
          if (paselect == 0) {
            //多項式不用乘
            exp_paselect = "exp_c";

            conn.query(
              "UPDATE exp_tempdat SET " +
                exp_paselect +
                "=" +
                exp_pa +
                " WHERE exp_id = " +
                exp_id +
                " ",
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
          } else {
            exp_paselect = "exp_pa" + paselect;
            exp_sqselect = "exp_sq" + paselect;

            conn.query(
              "UPDATE exp_tempdat SET " +
                exp_paselect +
                "=" +
                exp_pa +
                "," +
                exp_sqselect +
                "=" +
                exp_sq +
                " WHERE exp_id = " +
                exp_id +
                " ",
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
        }
      }
    });
  });
};

/* PUT 更新 expl_tempdat 資料表 更改線性C值  */
const update_expl_tempdat = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // 改變的值
        expl_pa = insertValues.x;
        expl_sq = insertValues.n;
        // 選擇的溫控點
        expl_id = insertValues.y;
        // 選擇改變的係數值C
        paselect = insertValues.z;
        // 將選擇變成資料庫裡的名稱
        if (paselect == 0) {
          expl_paselect = "expl_c";
          conn.query(
            "UPDATE expl_tempdat SET " +
              expl_paselect +
              "=" +
              expl_pa +
              " WHERE expl_id =" +
              expl_id +
              "",
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
        } else {
          expl_paselect = "expl_pa" + paselect;
          expl_sqselect = "expl_sq" + paselect;
          conn.query(
            "UPDATE expl_tempdat SET " +
              expl_paselect +
              "=" +
              expl_pa +
              "," +
              expl_sqselect +
              "=" +
              expl_sq +
              " WHERE expl_id =" +
              expl_id +
              "",
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
      }
    });
  });
};

module.exports.select_exp_temperature = select_exp_temperature;
module.exports.select_expl_temperature = select_expl_temperature;
module.exports.select_expl_tempdat = select_expl_tempdat;
module.exports.select_exp_tempdat = select_exp_tempdat;
module.exports.update_expl_tempdat = update_expl_tempdat;
module.exports.update_exp_tempdat = update_exp_tempdat;