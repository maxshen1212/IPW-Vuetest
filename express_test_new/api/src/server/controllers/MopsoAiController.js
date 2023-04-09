// 多目標資料專用controller
var Module = require("../modules/MopsoAiModule");

// 取得目前mopso參數
const get_mopso_info = (req, res) => {
  Module.get_mopso_info()
    .then((result) => {
      res.send(result); // 回傳取得成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 上傳母體數量
const put_mopso_size = (req, res) => {
  const insertValues = req.body;
  Module.put_mopso_size(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 上傳迭帶次數
const put_mopso_iterate = (req, res) => {
  const insertValues = req.body;
  Module.put_mopso_iterate(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 上傳儲存庫大小
const put_mopso_repository_size = (req, res) => {
  const insertValues = req.body;
  Module.put_mopso_repository_size(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

const get_choose_model = (req, res) => {
  Module.get_choose_model()
    .then((result) => {
      res.send(result); // 回傳取得成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/* 更新是否上傳模型 */
const update_choose_model = (req, res) => {
  // 取得修改參數
  const insertValues = req.body;
  Module.update_choose_model(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 取得pso狀態
const get_mopso_check_state = (req, res) => {
  Module.get_mopso_check_state()
    .then((result) => {
      res.send(result); // 回傳取得成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

// 上傳pso狀態
const put_mopso_check_state = (req, res) => {
  const insertValues = req.body;
  Module.put_mopso_check_state(insertValues)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

module.exports.get_mopso_info = get_mopso_info;
module.exports.put_mopso_size = put_mopso_size;
module.exports.put_mopso_iterate = put_mopso_iterate;
module.exports.put_mopso_repository_size = put_mopso_repository_size;
module.exports.update_choose_model = update_choose_model;
module.exports.get_choose_model = get_choose_model;
module.exports.put_mopso_check_state = put_mopso_check_state;
module.exports.get_mopso_check_state = get_mopso_check_state;
