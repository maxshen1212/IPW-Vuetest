//設定功能專用module
var mariadb = require("mariadb/callback");
var con = require("../../config/DBconfig");
var exec = require("child_process").exec;

// 資料庫連線
const pool = mariadb.createPool({
  port: con.port, // 連接阜號
  host: con.host, // 主機名稱
  user: con.user, // 用戶名稱
  password: con.password, // 資料庫密碼
  database: con.database, // 資料庫名稱
  connectionLimit: con.connectionLimit, //連線池限制
});


/* PUT 更新 pbdat 資料表 exppb 欄位  */
const update_exppb = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "UPDATE pbdat SET exppb= ? WHERE pb_id=0",
          [insertValues.x],
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

/* PUT 更新 pbdat 資料表 protocal_enable 欄位  */
const update_protocal_enable = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "UPDATE `pbdat` SET `protocal_enable`= ? WHERE `pb_id`=0",
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
    });
  });
};

/* PUT 更新 pbdat 資料表 recpb,rec_start_datetime 欄位  */
const update_recpb_datetime = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        if (insertValues.q == 1) {
          conn.query(
            "UPDATE pbdat SET recpb= ? ,rec_start_datetime =now() WHERE pb_id=0",
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
            "UPDATE pbdat SET recpb= ? ,rec_stop_datetime =now() WHERE pb_id=0",
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

//感測器開關狀態 功能
/* GET 取得 temp_select 資料表 */
const select_temp_select = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "Select * from `temp_select` WHERE `temp_select_id`=1",
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

/* PUT 更新 temp_select 資料表 更改感測器開關值  */
const update_temp_select = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "UPDATE `temp_select` SET " +
            insertValues.y +
            "=" +
            insertValues.x +
            " WHERE `temp_select_id`=1",
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

/* GET 取得 pbdat 資料表 */
const select_pbdat = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("Select * from `pbdat` WHERE `pb_id`=0", (error, result) => {
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

/* PUT 更改 pbdat 資料表 幾秒記錄一次溫度  */
const update_pbdat_rec_time = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "UPDATE `pbdat` SET `rec_time`=" +
            insertValues.q +
            " WHERE `pb_id`=0",
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

/* 刪除資料夾所有txt檔案 */
const delete_allrecdata = () => {
  return new Promise((resolve, reject) => {
    var alldata = fs.readdirSync("" + fileurl.url + "");
    console.log(alldata);

    for (i = 0; i < alldata.length; i++) {
      fs.unlinkSync("" + fileurl.url + "" + "/" + alldata[i] + "");
    }
    resolve(result); // 撈取成功回傳 JSON 資料
    console.log("已經刪除所有檔案!");
  });
};


//樹莓派端設定相關 功能
/* 終端機關機指令 */
const shutdown = () => {
  return new Promise((resolve, reject) => {
    exec("sudo shutdown -h now", function (err, stdout, stderr) {
      resolve(stdout); // 撈取成功回傳 JSON 資料
    });
  });
};

/* 終端重開機指令 */
const restart = () => {
  return new Promise((resolve, reject) => {
    exec("sudo systemctl restart xrdp.service", function (err, stdout, stderr) {
      resolve(stdout); // 撈取成功回傳 JSON 資料
    });
  });
};

/* 終端設定時間指令 */
const set_date_time = (insertValues) => {
  return new Promise((resolve, reject) => {
    console.log(insertValues.q);
    exec(`sudo date --s="${insertValues.q}"`, function (err, stdout, stderr) {
      resolve(stdout); // 撈取成功回傳 JSON 資料
    });
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "UPDATE `pbdat` SET `rec_time`=" +
            insertValues.q +
            " WHERE `pb_id`=0",
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


//取得pid加熱片參數 功能
/* GET 取得 temp_piddat 資料表 */
const select_temp_piddat = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query("SELECT * FROM temp_piddat", (error, result) => {
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

/* PUT 更新 temp_piddat 資料表 更改非線性PID值  */
const update_temp_piddat = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        // 改變的值
        pidvalue = insertValues.x;
        // 選擇的溫控點
        pid_id = insertValues.y;
        // 選擇改變(P/I/D/limit/frequency)
        pidselect = insertValues.z;
        // 將選擇變成資料庫裡的名稱
        if (pidselect === "limit") {
          pidselect = "pwm_limit";
        }
        conn.query(
          "UPDATE temp_piddat SET " +
            pidselect +
            "=" +
            pidvalue +
            " WHERE pid_id =" +
            pid_id +
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
    });
  });
};

module.exports.update_exppb = update_exppb;
module.exports.update_protocal_enable = update_protocal_enable;
module.exports.update_recpb_datetime = update_recpb_datetime;
module.exports.select_pbdat = select_pbdat;
module.exports.update_pbdat_rec_time = update_pbdat_rec_time;
module.exports.select_temp_select = select_temp_select;
module.exports.update_temp_select = update_temp_select;
module.exports.select_temp_piddat = select_temp_piddat;
module.exports.update_temp_piddat = update_temp_piddat;
module.exports.shutdown = shutdown;
module.exports.restart = restart;
module.exports.set_date_time = set_date_time;
module.exports.delete_allrecdata = delete_allrecdata;