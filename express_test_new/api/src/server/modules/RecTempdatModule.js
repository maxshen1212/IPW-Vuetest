//溫度履歷資料相關 功能
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

/* GET 取得 rec_tempdat 資料表 範圍內紀錄  */
const select_rec_tempdat = (insertValues) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((connectionError, conn) => {
      // 資料庫連線
      if (connectionError) {
        reject(connectionError); // 若連線有問題回傳錯誤
      } else {
        const start_time = insertValues.x;
        const stop_time = insertValues.y;
        console.log("test:");
        console.log(start_time, stop_time);
        var sptime = start_time.split(" ");
        var eptime = stop_time.split(" ");
        console.log(sptime, eptime);
        var sdate = sptime[0];
        var stime = sptime[1];

        //console.log(sdate);
        //console.log(stime);

        var edate = eptime[1];
        var etime = eptime[2];
        //console.log(edate);
        //console.log(etime);

        if (sdate != edate) {
          const query =
            "SELECT * FROM rec_tempdat WHERE rec_tempdat.rec_tdate = '" +
            sdate +
            "' AND rec_tempdat.rec_ttime >= '" +
            stime +
            "' OR rec_tempdat.rec_tdate> '" +
            sdate +
            "' AND rec_tempdat.rec_tdate< '" +
            edate +
            "' OR rec_tempdat.rec_tdate = '" +
            edate +
            "' AND rec_tempdat.rec_ttime<= '" +
            etime +
            "'  ";
          console.log("testtt:", query);
          conn.query(query, (error, result) => {
            if (error) {
              console.error("SQL error: ", error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            } else {
              resolve(result); // 撈取成功回傳 JSON 資料
              var length = result.length;
              for (i = 0; i < length; i++) {
                change = result[i].rec_tdate.toLocaleString().split(" ");
                result[i].rec_tdate = change[0];
              }
              dataname =
                "" +
                sdate.replace(/\//g, "-") +
                "-" +
                stime.replace(/:/g, "-") +
                "-" +
                edate.replace(/\//g, "-") +
                "-" +
                etime.replace(/:/g, "-") +
                "";

              fs.writeFile(
                "" + fileurl.url + "" + "/" + dataname + ".txt",
                "ID,DATE,TIME,TT1,TT2,TT3,TT4,TT5,TT6,TT7,TT8,TT9,TT10,TC11,TC12,TC13,TC14,TC15,TC16,TC17,TC18,TC19,TC20,PT1,PT2,PT3,PT4,PA1,PA2,PA3,PA4,PA5,PA6,PA7,PA8,PA9,PA10 \r\n",
                "UTF8",
                function (err) {
                  if (err) console.log(err);
                  else console.log("Write operation complete.");
                }
              );
              var data = "";
              for (i = 0; i < result.length; i++) {
                // data.push(""+result[i].rec_id+","+result[i].rec_tdate+","+result[i].rec_ttime+","+result[i].tt1+","+result[i].tt2+","+result[i].tt3+","+result[i].tt4+","+result[i].tt5+","+result[i].tt6+","+result[i].tt7+","+result[i].tt8+","+result[i].tt9+","+result[i].tt10+","+result[i].tc1+","+result[i].tc2+","+result[i].tc3+","+result[i].tc4+","+result[i].tc5+","+result[i].tc6+","+result[i].tc7+","+result[i].tc8+","+result[i].tc9+","+result[i].tc10+","+result[i].pt1+","+result[i].pt2+","+result[i].pt3+","+result[i].pt4+","+result[i].exp1+","+result[i].exp2+","+result[i].exp3+","+result[i].exp4+","+result[i].exp5+","+result[i].exp6+","+result[i].exp7+","+result[i].exp8+","+result[i].exp9+","+result[i].exp10+"\r\n");
                data +=
                  "" +
                  result[i].rec_id +
                  "," +
                  result[i].rec_tdate +
                  "," +
                  result[i].rec_ttime +
                  "," +
                  result[i].tt1 +
                  "," +
                  result[i].tt2 +
                  "," +
                  result[i].tt3 +
                  "," +
                  result[i].tt4 +
                  "," +
                  result[i].tt5 +
                  "," +
                  result[i].tt6 +
                  "," +
                  result[i].tt7 +
                  "," +
                  result[i].tt8 +
                  "," +
                  result[i].tt9 +
                  "," +
                  result[i].tt10 +
                  "," +
                  result[i].tc1 +
                  "," +
                  result[i].tc2 +
                  "," +
                  result[i].tc3 +
                  "," +
                  result[i].tc4 +
                  "," +
                  result[i].tc5 +
                  "," +
                  result[i].tc6 +
                  "," +
                  result[i].tc7 +
                  "," +
                  result[i].tc8 +
                  "," +
                  result[i].tc9 +
                  "," +
                  result[i].tc10 +
                  "," +
                  result[i].pt1 +
                  "," +
                  result[i].pt2 +
                  "," +
                  result[i].pt3 +
                  "," +
                  result[i].pt4 +
                  "," +
                  result[i].exp1 +
                  "," +
                  result[i].exp2 +
                  "," +
                  result[i].exp3 +
                  "," +
                  result[i].exp4 +
                  "," +
                  result[i].exp5 +
                  "," +
                  result[i].exp6 +
                  "," +
                  result[i].exp7 +
                  "," +
                  result[i].exp8 +
                  "," +
                  result[i].exp9 +
                  "," +
                  result[i].exp10 +
                  "\r\n";
              }
              fs.appendFile(
                "" + fileurl.url + "" + "/" + dataname + ".txt",
                data,
                "UTF8",
                function (err) {
                  if (err) console.log(err);
                }
              );
            }
            data = "";

            conn.release();
          });
        } else if (sdate == edate) {
          const query =
            "SELECT * FROM rec_tempdat WHERE rec_tempdat.rec_tdate = '" +
            sdate +
            "' AND rec_tempdat.rec_ttime BETWEEN '" +
            stime +
            "' AND '" +
            etime +
            "' ";
          console.log("testtt:", query);
          conn.query(query, (error, result) => {
            if (error) {
              console.error("SQL error: ", error);
              reject(error); // 寫入資料庫有問題時回傳錯誤
            } else {
              resolve(result); // 撈取成功回傳 JSON 資料
              // console.log("result:",result)
              var length = result.length;
              for (i = 0; i < length; i++) {
                change = result[i].rec_tdate.toLocaleString().split(" ");
                console.log("chang:", change);
                result[i].rec_tdate = change[0];
              }

              dataname =
                "" +
                sdate.replace(/\//g, "-") +
                "-" +
                stime.replace(/:/g, "-") +
                "-" +
                edate.replace(/\//g, "-") +
                "-" +
                etime.replace(/:/g, "-") +
                "";

              fs.writeFile(
                "" + fileurl.url + "" + "/" + dataname + ".txt",
                "ID,DATE,TIME,TT1,TT2,TT3,TT4,TT5,TT6,TT7,TT8,TT9,TT10,TC11,TC12,TC13,TC14,TC15,TC16,TC17,TC18,TC19,TC20,PT1,PT2,PT3,PT4,PA1,PA2,PA3,PA4,PA5,PA6,PA7,PA8,PA9,PA10 \r\n",
                "UTF8",
                function (err) {
                  if (err) console.log(err);
                  else console.log("Write operation complete.");
                }
              );
              var data = "";
              for (i = 0; i < result.length; i++) {
                // data.push(""+result[i].rec_id+","+result[i].rec_tdate+","+result[i].rec_ttime+","+result[i].tt1+","+result[i].tt2+","+result[i].tt3+","+result[i].tt4+","+result[i].tt5+","+result[i].tt6+","+result[i].tt7+","+result[i].tt8+","+result[i].tt9+","+result[i].tt10+","+result[i].tc1+","+result[i].tc2+","+result[i].tc3+","+result[i].tc4+","+result[i].tc5+","+result[i].tc6+","+result[i].tc7+","+result[i].tc8+","+result[i].tc9+","+result[i].tc10+","+result[i].pt1+","+result[i].pt2+","+result[i].pt3+","+result[i].pt4+","+result[i].exp1+","+result[i].exp2+","+result[i].exp3+","+result[i].exp4+","+result[i].exp5+","+result[i].exp6+","+result[i].exp7+","+result[i].exp8+","+result[i].exp9+","+result[i].exp10+"\r\n");
                data +=
                  "" +
                  result[i].rec_id +
                  "," +
                  result[i].rec_tdate +
                  "," +
                  result[i].rec_ttime +
                  "," +
                  result[i].tt1 +
                  "," +
                  result[i].tt2 +
                  "," +
                  result[i].tt3 +
                  "," +
                  result[i].tt4 +
                  "," +
                  result[i].tt5 +
                  "," +
                  result[i].tt6 +
                  "," +
                  result[i].tt7 +
                  "," +
                  result[i].tt8 +
                  "," +
                  result[i].tt9 +
                  "," +
                  result[i].tt10 +
                  "," +
                  result[i].tc1 +
                  "," +
                  result[i].tc2 +
                  "," +
                  result[i].tc3 +
                  "," +
                  result[i].tc4 +
                  "," +
                  result[i].tc5 +
                  "," +
                  result[i].tc6 +
                  "," +
                  result[i].tc7 +
                  "," +
                  result[i].tc8 +
                  "," +
                  result[i].tc9 +
                  "," +
                  result[i].tc10 +
                  "," +
                  result[i].pt1 +
                  "," +
                  result[i].pt2 +
                  "," +
                  result[i].pt3 +
                  "," +
                  result[i].pt4 +
                  "," +
                  result[i].exp1 +
                  "," +
                  result[i].exp2 +
                  "," +
                  result[i].exp3 +
                  "," +
                  result[i].exp4 +
                  "," +
                  result[i].exp5 +
                  "," +
                  result[i].exp6 +
                  "," +
                  result[i].exp7 +
                  "," +
                  result[i].exp8 +
                  "," +
                  result[i].exp9 +
                  "," +
                  result[i].exp10 +
                  "\r\n";
              }
              console.log(fileurl.url, dataname, data, typeof data);
              fs.appendFile(
                "" + fileurl.url + "" + "/" + dataname + ".txt",
                data,
                "UTF8",
                function (err) {
                  if (err) console.log(err);
                }
              );
            }
            data = "";
            conn.release();
          });
        }
      }
    });
  });
};
/* 讀取資料夾txt檔案 */
const get_recdata = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("" + fileurl.url + "", (err, result) => {
      if (err) console.log(err);
      resolve(result); // 撈取成功回傳 JSON 資料
    });
  });
};

/* 刪除資料夾txt檔案 */
const delete_recdata = (insertValues) => {
  return new Promise((resolve, reject) => {
    fs.unlink(
      "" + fileurl.url + "" + "/" + insertValues.x + "",
      (err, result) => {
        if (err) console.log(err);
        resolve(result); // 撈取成功回傳 JSON 資料
        console.log("已經刪除檔案!");
      }
    );
  });
};

/* 下載資料夾txt檔案 */
const download_recdata = (insertValues) => {
  console.log("modle", insertValues.x);
  return new Promise((resolve, reject) => {
    fs.readFile(
      "" + fileurl.url + "" + "/" + insertValues.x + "",
      (err, result) => {
        if (err) console.log(err);
        resolve(result); // 撈取成功回傳 JSON 資料
        console.log("下載檔案成功!");
      }
    );
  });
};

module.exports.select_rec_tempdat = select_rec_tempdat;
module.exports.get_recdata = get_recdata;
module.exports.delete_recdata = delete_recdata;
module.exports.download_recdata = download_recdata;
