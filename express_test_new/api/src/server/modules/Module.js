var mariadb = require("mariadb/callback");
var con = require("../../config/DBconfig");
var fs = require("fs");
var exec = require("child_process").exec;
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

// 取得溫度＆熱變形數據資料 功能
/* GET 取得 tempdat 資料表 */
const select_tempdat = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT * FROM tempdat ORDER BY temp_id DESC LIMIT 1",
          (error, result) => {
            if (error) {
              console.error("SQL error: ", error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            } else {
              resolve(result); // 撈取成功回傳 JSON 資料
              // console.log(result);
            }
            conn.release();
          }
        );
      }
    });
  });
};

/* GET 取得 rec_tempdat 資料表 */
const select_temptext = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT " +
            insertValues +
            " FROM  `rec_tempdat` ORDER BY `rec_id` DESC LIMIT 0,300",
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

/* GET 取得 exp_bending 熱變型 */
const select_exp_bending = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("SELECT * FROM displacement", (error, result) => {
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

/* GET 取得無線有線狀態 */
const select_wire_or_wireless = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT wire_or_wireless FROM pbdat WHERE pb_id = 0",
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

/* PUT 上傳無線有線狀態 */
const put_wire_or_wireless = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let state = insertValues.state;
        conn.query(
          "UPDATE pbdat SET wire_or_wireless ='" +
            state +
            "' Where pb_id = 0",
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

// 刪除資料 功能
/* DELET 刪除rec_tempdat 30筆資料 功能*/
const delete_rec_data = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("select rec_id from rec_tempdat", (error, result) => {
          if (error) {
            console.error("SQL error: ", error);
            reject(error); // 寫入資料庫有問題時回傳錯誤
          } else {
            resolve(result); // 撈取成功回傳 JSON 資料
          }
          console.log("sasdsd", result.length);
          const temp_len = result.length;
          if (temp_len > 345600) {
            conn.query(
              "DELETE FROM rec_tempdat ORDER BY rec_id ASC LIMIT 172800",
              (error, result) => {
                if (error) {
                  console.error("SQL error: ", error);
                  reject(error); // 寫入資料庫有問題時回傳錯誤
                } else {
                  conn.query(
                    "UPDATE rec_tempdat SET rec_id = rec_id - 172800 ",
                    (error, result) => {
                      if (error) {
                        console.error("SQL error: ", error);
                        reject(error); // 寫入資料庫有問題時回傳錯誤
                      } else {
                        resolve(result); // 撈取成功回傳 JSON 資料
                        console.log("akhdaskdksa");
                      }
                      conn.release();
                    }
                  );
                }
                conn.release();
              }
            );
          }
          conn.release();
        });
      }
    });
  });
};

module.exports.put_wire_or_wireless = put_wire_or_wireless;
module.exports.select_wire_or_wireless = select_wire_or_wireless;
module.exports.delete_rec_data = delete_rec_data;
module.exports.select_tempdat = select_tempdat;
module.exports.select_temptext = select_temptext;
module.exports.select_exp_bending = select_exp_bending;

/* ----以下api此專題沒用到---- */

// 冷卻用期望溫度資料 功能
/* GET 取得 cool_temp 資料表 expl_temperature 欄位 */
const select_cool_temp = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("SELECT exp_temperature FROM cool_exp", (error, result) => {
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

const select_cool_exp = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("SELECT * FROM cool_exp ", (error, result) => {
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

// pso單目標相關功能
/* GET 取得目前pso參數  */
const get_now_pso = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("select * from ai", (error, result) => {
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

// 上傳母體數量
const put_pso_size = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let size = insertValues.pso_size;

        conn.query(
          "UPDATE ai SET pso_size ='" + size + "' Where ai_id = 1",
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

// 上傳pso狀態
const pso_state = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let state = insertValues.state;
        conn.query(
          "UPDATE ai SET check_state ='" + state + "' Where ai_id = 1",
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

// 上傳迭帶次數
const put_run_number = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let number = insertValues.pso_run_times;
        conn.query(
          "UPDATE ai SET pso_run_times ='" + number + "' Where ai_id = 1",
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

/* GET 取得資料庫時間  */
const select_now = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("select now()", (error, result) => {
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

module.exports.select_now = select_now;
module.exports.put_pso_size = put_pso_size;
module.exports.put_run_number = put_run_number;
module.exports.get_now_pso = get_now_pso;
module.exports.pso_state = pso_state;
module.exports.select_cool_temp = select_cool_temp;
module.exports.select_cool_exp = select_cool_exp;
