var Module = require("../modules/PolynomialTempModule");

/* PUT 更改線性C值 */
const expl_tempdatPut = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_expl_tempdat(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* PUT 更改非線性C值 */
const exp_tempdatPut = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_exp_tempdat(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* GET 線性係數值 C */
const expl_tempdatGet = (req, res) => {
  // 取得修改參數
  Module.select_expl_tempdat()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* GET 非線性係數值 C */
const exp_tempdatGet = (req, res) => {
  // 取得修改參數
  Module.select_exp_tempdat()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* GET 期望溫度1～10 */
const exp_temperaturetGet = (req, res) => {
  Module.select_exp_temperature()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* GET 期望溫度1～10 */
const expl_temperatureGet = (req, res) => {
  Module.select_expl_temperature()
    .then((result) => {
      res.send(result); // 成功回傳result結果
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.exp_temperaturetGet = exp_temperaturetGet;
module.exports.expl_temperatureGet = expl_temperatureGet;
module.exports.expl_tempdatPut = expl_tempdatPut;
module.exports.exp_tempdatPut = exp_tempdatPut;
module.exports.expl_tempdatGet = expl_tempdatGet;
module.exports.exp_tempdatGet = exp_tempdatGet;
