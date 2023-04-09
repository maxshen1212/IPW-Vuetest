var Module = require("../modules/RecTempdatModule");

/* 取得資料記錄檔 */
const rec_dataGettt = (req, res) => {
  Module.get_recdata()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* 刪除資料記錄檔 */
const delete_dataPost = (req, res) => {
  const insertValues = req.body;
  Module.delete_recdata(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 範圍內溫度紀錄 */
const rec_tempdatGettt = (req, res) => {
  // 取得修改參數
  const insertValues = req.query;
  Module.select_rec_tempdat(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* 下載資料記錄檔 */
const download_dataPost = (req, res) => {
  const insertValues = req.query;
  console.log("controller", insertValues);
  Module.download_recdata(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.rec_dataGettt = rec_dataGettt;
module.exports.delete_dataPost = delete_dataPost;
module.exports.rec_tempdatGettt = rec_tempdatGettt;
module.exports.download_dataPost = download_dataPost;
