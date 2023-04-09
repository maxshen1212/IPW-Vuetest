// 多目標專用module
var mariadb = require("mariadb/callback");
var con = require("../../config/DBconfig");

const pool = mariadb.createPool({
  port: con.port, // 連接阜號
  host: con.host, // 主機名稱
  user: con.user, // 用戶名稱
  password: con.password, // 資料庫密碼
  database: con.database, // 資料庫名稱
  connectionLimit: con.connectionLimit, //連線池限制
});

/* GET 取得目前pso參數 */
const get_mopso_info = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("select * from mopso_ai", (error, result) => {
          if (error) {
            console.error("SQL error: ", error);
            console.log("okkkkk");
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

/* PUT 上傳母體數量 */
const put_mopso_size = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let size = insertValues.mopso_size;

        conn.query(
          "UPDATE mopso_ai SET mopso_size ='" + size + "' Where ai_id = 1",
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

/* PUT 上傳迭帶次數 */
const put_mopso_iterate = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let number = insertValues.mopso_iterate;
        conn.query(
          "UPDATE mopso_ai SET mopso_iterate ='" + number + "' Where ai_id = 1",
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

/* PUT 上傳儲存庫大小 */
const put_mopso_repository_size = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let size = insertValues.mopso_repository_size;
        conn.query(
          "UPDATE mopso_ai SET mopso_repository_size ='" +
            size +
            "' Where ai_id = 1",
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

/* PUT 上傳是否已選擇模型  */
const update_choose_model = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        if (insertValues.q == 1) {
          conn.query(
            "UPDATE pbdat SET choose_model_check= '" +
              insertValues.q +
              "' Where pb_id = 0",
            [insertValues.q],
            (error, result) => {
              console.log(insertValues.q);
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
          conn.query(
            "UPDATE pbdat SET choose_model_check= '" +
              insertValues.q +
              "' WHERE pb_id=0",
            [insertValues.q],
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

/* GET 取得選擇模型狀態 */
const get_choose_model = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT choose_model_check FROM pbdat WHERE pb_id = 0",
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

/* PUT 上傳pso狀態 */
const put_mopso_check_state = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // console.log(insertValues)
        let state = insertValues.state;
        conn.query(
          "UPDATE pbdat SET polynomial_or_bpnn_model ='" +
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

/* GET 取得pso狀態 */
const get_mopso_check_state = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT polynomial_or_bpnn_model FROM pbdat WHERE pb_id = 0",
          (error, result) => {
            if (error) {
              console.error("SQL error: ", error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            } else {
              console.log(result)
              resolve(result); // 撈取成功回傳 JSON 資料
            }
            conn.release();
          }
        );
      }
    });
  });
};

module.exports.get_mopso_info = get_mopso_info;
module.exports.put_mopso_size = put_mopso_size;
module.exports.put_mopso_iterate = put_mopso_iterate;
module.exports.put_mopso_repository_size = put_mopso_repository_size;
module.exports.update_choose_model = update_choose_model;
module.exports.get_choose_model = get_choose_model;
module.exports.put_mopso_check_state = put_mopso_check_state;
module.exports.get_mopso_check_state = get_mopso_check_state;
