//取得機台資訊功能
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

/* POST 寫入 machine_info 10筆資料  */
const insert_machine_info = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        console.log('testtest')
        conn.query(
          "Insert into machine_info (spindle_speed,current,voltage,power,speed_loop_feedback,position_loop_feedback,spring_constant,viscosity_coefficient,quadrant_protrusion_correction,machine_processing_time)" +
            "values(" +
            insertValues.spindlespeed +
            "," +
            insertValues.current +
            "," +
            insertValues.voltage +
            "," +
            insertValues.power +
            "," +
            insertValues.speedloopfeedback +
            "," +
            insertValues.positionloopfeedback +
            "," +
            insertValues.springconstant +
            "," +
            insertValues.viscositycoefficient +
            "," +
            insertValues.quadrantprotrusioncorrection +
            "," +
            insertValues.machineprocessingtime +
            ") ",
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

/* GET 取得 machine_info 資料表 最新資料 */
const select_machine_info = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT* FROM machine_info ORDER BY id DESC LIMIT 0,1",
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

/* GET 取得 machine_info 資料表 歷史資料 */
const select_machine_info_list = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        conn.query(
          "SELECT " +
            insertValues +
            " FROM machine_info ORDER BY id DESC LIMIT 0,150",
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

/* GET 取得 expl_tempdat 資料表 X,Y,Z軸 */
const select_expl_tempdat_xyz = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        if (insertValues == "x") select = 1;
        if (insertValues == "y") select = 2;
        if (insertValues == "z") select = 3;

        conn.query(
          "SELECT expl_temperature FROM expl_tempdat WHERE expl_id = " +
            select +
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
    });
  });
};

module.exports.insert_machine_info = insert_machine_info;
module.exports.select_machine_info = select_machine_info;
module.exports.select_machine_info_list = select_machine_info_list;
module.exports.select_expl_tempdat_xyz = select_expl_tempdat_xyz;