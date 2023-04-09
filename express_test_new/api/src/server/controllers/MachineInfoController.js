var Module = require("../modules/MachineInfoModule");

/* POST 寫入machine_info 10筆資料 */
const insert_machine_info_POST = (req, res) => {
  const insertValues = req.query;
  Module.insert_machine_info(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};
/* GET 取得machine_info 最新資料 */
const get_machine_info = (req, res) => {
  Module.select_machine_info()
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

/*  GET 取得machine_info 歷史資料 */
const get_machine_info_list = (req, res) => {
  // 取得修改參數
  const insertValues = req.query.x;
  Module.select_machine_info_list(insertValues)
    .then((result) => {
      res.send(result); // 回傳修改成功訊息
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息
};

var check;
/*  GET 取得 XYZ 軸值 */
const get_expl_tempdat_xyz = (req, res) => {
  Module.select_pbdat()
    .then((result) => {
      check = result[0].protocal_enable;
      // console.log(result[0].protocal_enable);//顯示線性補償開關狀態
    })
    .catch((err) => {
      return res.send(err);
    }); // 失敗回傳錯誤訊息

  if (check) {
    // 取得修改參數
    const insertValues = req.query.select;
    Module.select_expl_tempdat_xyz(insertValues)
      .then((result) => {
        res.send(result); // 回傳修改成功訊息
      })
      .catch((err) => {
        return res.send(err);
      }); // 失敗回傳錯誤訊息
  } else {
    res.send([{ expl_temperature: 0 }]);
  }
};

module.exports.insert_machine_info_POST = insert_machine_info_POST;
module.exports.get_machine_info = get_machine_info;
module.exports.get_machine_info_list = get_machine_info_list;
module.exports.get_expl_tempdat_xyz = get_expl_tempdat_xyz;
