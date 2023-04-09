var Module = require("../modules/Module");

/* 刪除資料庫溫度紀錄擋 */
const delete_rec = (req, res) => {
  // const insertValues = req.body;
  Module.delete_rec_data()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 溫度感知點 */
const tempdatGet = (req, res) => {
  Module.select_tempdat()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 歷史溫度300筆 */
const rec_tempdatGet = (req, res) => {
  // 取得修改參數
  const insertValues = req.query.x;
  Module.select_temptext(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 非線性係數熱彎曲量 */
const exp_bending = (req, res) => {
  // 取得修改參數
  Module.select_exp_bending()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 取得無線有線狀態 */
const select_wire_or_wireless = (req, res) => {
  Module.select_wire_or_wireless()
    .then((result) => {
      res.send(result); // 回傳取得成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 上傳無線有線狀態
const put_wire_or_wireless = (req, res) => {
  const insertValues = req.body;
  Module.put_wire_or_wireless(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.put_wire_or_wireless = put_wire_or_wireless;
module.exports.select_wire_or_wireless = select_wire_or_wireless;
module.exports.tempdatGet = tempdatGet;
module.exports.rec_tempdatGet = rec_tempdatGet;
module.exports.exp_bending = exp_bending;
module.exports.delete_rec = delete_rec;



/* ----以下api本專題沒有使用---- */



/* GET 期望溫度1～10 */
const cool_ctrl = (req, res) => {
  Module.select_cool_temp()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 冷卻非線性係數值 C */
const exp_cool = (req, res) => {
  // 取得修改參數
  Module.select_cool_exp()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
// 取目前pso參數
const get_pso = (req, res) => {
  Module.get_now_pso()
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
// 上傳母體數量
const put_size = (req, res) => {
  const insertValues = req.body;
  Module.put_pso_size(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
// 上傳 pso狀態
const put_pso_state = (req, res) => {
  const insertValues = req.body;
  Module.pso_state(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
// 上傳迭帶次數
const put_run_times = (req, res) => {
  const insertValues = req.body;
  Module.put_run_number(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 取得資料庫時間 */
const select_now_Get = (req, res) => {
  Module.select_now()
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.select_now_Get = select_now_Get;
module.exports.put_size = put_size;
module.exports.put_run_times = put_run_times;
module.exports.get_pso = get_pso;
module.exports.put_pso_state = put_pso_state;
module.exports.cool_ctrl = cool_ctrl;
module.exports.exp_cool = exp_cool;
