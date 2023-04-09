var Module = require("../modules/AiModelModule");

/* 刪除模型 */
const delete_module = (req, res) => {
  const insertValues = req.body;
  Module.delete_nn_module(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 上傳檔案
const uploadNNfile = (req, res) => {
  const insertValues = req.body;
  Module.Insert_NN_file(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

//nn_network.html 頁面功能
const filelength = (req, res) => {
  Module.get_filelength()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 取目前模型
const select_now_module = (req, res) => {
  Module.select_module()
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.select_now_module = select_now_module;
module.exports.filelength = filelength;
module.exports.uploadNNfile = uploadNNfile;
module.exports.delete_module = delete_module;