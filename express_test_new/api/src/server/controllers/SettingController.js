var Module = require("../modules/SettingModule");

/* GET 非線性 PID值 */
const temp_piddatGet = (req, res) => {
  // 取得修改參數
  Module.select_temp_piddat()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* PUT 更改非線性PID值 */
const temp_piddatPut = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_temp_piddat(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* PUT 更改溫度感測器狀態 */
const temp_select_Put = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_temp_select(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* 刪除資料記錄檔 */
const delete_alldataPost = (req, res) => {
  Module.delete_allrecdata()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* PUT 更改幾秒記錄一次溫度的秒數 */
const pbdat_rec_time_Put = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_pbdat_rec_time(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* POST 關閉樹梅派 */
const shutdownPost = (req, res) => {
  Module.shutdown()
    .then((stdout) => {
      res.send(header + stdout + footer);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* POST 重啟樹梅派 */
const restartPost = (req, res) => {
  Module.restart()
    .then((stdout) => {
      res.send(header + stdout + footer);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* POST 設定樹梅派時間 */
const setdatePost = (req, res) => {
  const insertValues = req.body;
  Module.set_date_time(insertValues)
    .then((stdout) => {
      res.send(header + stdout + footer);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* GET 取的按鈕狀態 */
const pbdatGet = (req, res) => {
  Module.select_pbdat()
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* PUT 更新非線性開關狀態 */
const exppbPut = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_exppb(insertValues).then((result) => {
      res.send(result); // 回傳修改成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/* PUT 更新線性開關狀態 */
const protocal_enablePut = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_protocal_enable(insertValues).then((result) => {
      res.send(result); // 回傳修改成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/* PUT 更新紀錄狀態和時間 */
const recpb_datetimePut = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_recpb_datetime(insertValues).then((result) => {
      res.send(result); // 回傳修改成功訊息
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

/* GET 索取開關的目前值 */
const temp_selectGet = (req, res) => {
  Module.select_temp_select()
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.temp_selectGet = temp_selectGet;
module.exports.exppbPut = exppbPut;
module.exports.protocal_enablePut = protocal_enablePut;
module.exports.recpb_datetimePut = recpb_datetimePut;
module.exports.pbdatGet = pbdatGet;
module.exports.temp_piddatGet = temp_piddatGet;
module.exports.temp_piddatPut = temp_piddatPut;
module.exports.temp_select_Put = temp_select_Put;
module.exports.delete_alldataPost = delete_alldataPost;
module.exports.pbdat_rec_time_Put = pbdat_rec_time_Put;
module.exports.shutdownPost = shutdownPost;
module.exports.restartPost = restartPost;
module.exports.setdatePost = setdatePost;