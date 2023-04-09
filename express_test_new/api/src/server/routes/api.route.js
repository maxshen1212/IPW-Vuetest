var express = require("express");
var router = express.Router();
var Ctrl = require("../controllers/Controller");
var Ctrl_mospso_ai = require("../controllers/MopsoAiController");
var Ctrl_ai_model = require("../controllers/AiModelController");
var Ctrl_machine_info = require("../controllers/MachineInfoController");
var Ctrl_polynomial_temp = require("../controllers/PolynomialTempController");
var Ctrl_rec_tempdat = require("../controllers/RecTempdatController");
var Ctrl_setting = require("../controllers/SettingController");
const fs = require("fs");
const multer = require("multer");
var fileurl = require("../../config/Fileconfig");
module_file_path = "../Bpnn_module";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "" + fileurl.url_module + ""); //process.cwd()當前工作目錄 process.cwd()+'/'
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

/* 以下是 controller api */
router.delete("/delete_rectemp", Ctrl.delete_rec); //當資料筆數過大時 清除recdata資料筆數
router.get("/Temp_Perception", Ctrl.tempdatGet); //取得 tempdat 資料表
router.get("/Historical_Temp", Ctrl.rec_tempdatGet); //取得 rec_tempdat資料表 temptext欄位
router.get("/conn", Ctrl.tempdatGet); //取得 tempdat 資料表
router.get("/connn", Ctrl.tempdatGet); //取得 tempdat 資料表
router.get("/select_now", Ctrl.select_now_Get); //取得資料庫現在時間
router.get("/bending", Ctrl.exp_bending); //取得 熱彎曲量
router.get("/select_wire_or_wireless", Ctrl.select_wire_or_wireless); //取得 取得無線有線狀態
router.put("/put_wire_or_wireless", Ctrl.put_wire_or_wireless); //更新 取得無線有線狀態

/* 以下為本專題沒用到的api */
router.put("/upload_state", Ctrl.put_pso_state); //更新 上傳狀態
router.get("/tempdattt", Ctrl.tempdatGet); //取得 tempdat 資料表
router.put("/put_pso_size", Ctrl.put_size); //上傳母體數量
router.put("/put_pso_number", Ctrl.put_run_times); //上傳迭帶次數
router.get("/now_pso", Ctrl.get_pso); //取現在pso的參數
router.get("/cool_temp", Ctrl.cool_ctrl); //取得 exp_tempdat 資料表 exp_temperature 欄位
router.get("/cool_tempcontrol", Ctrl.exp_cool); //取得 exp_tempdat 資料表

/* 以下是 ai_model_controller api */
router.put("/upload_path", Ctrl_ai_model.uploadNNfile); //上傳模型路徑
router.get("/now_module", Ctrl_ai_model.select_now_module); //取得現在使用的模型路徑
router.get("/file_length", Ctrl_ai_model.filelength); //取資寮夾內容長度
router.post("/delete_nn_module", Ctrl_ai_model.delete_module); //刪除資料夾內的模型
router.post(
  "/upload_nn_file",
  multer({ storage: storage }).single("file"),
  function (req, res, next) {
    var file = req.file;
    var fileName = file["originalname"];
    // Ctrl.uploadNNfile(fileName, (json) =>{ //將路徑上傳至資料庫
    //     res.send(json);
    // });
    res.status(200).json({
      file: fileName,
      message: "file upload success",
      // file_list: module_file_list(),
    });
    // res.statusCode = 200;
    // res.end();
  }
); //將路徑上傳至資料庫

/* 以下是 machine_info api */
router.get("/insert_machine_info", Ctrl_machine_info.insert_machine_info_POST); //寫入機台資訊
router.get("/get_machine_info", Ctrl_machine_info.get_machine_info); //取得機台最新資訊
router.get("/historical_machine_info", Ctrl_machine_info.get_machine_info_list); //取得機台歷史資訊
router.get("/expl_xyz", Ctrl_machine_info.get_expl_tempdat_xyz); //取的線性 X,Y,Z數值

/* 以下是 polynomial＿temp api */
router.get("/Expected_Temp", Ctrl_polynomial_temp.exp_temperaturetGet); //取得 exp_tempdat 資料表 exp_temperature 欄位
router.get("/temp", Ctrl_polynomial_temp.exp_temperaturetGet); //取得 exp_tempdat 資料表 exp_temperature 欄位

router.get("/displacement", Ctrl_polynomial_temp.expl_temperatureGet); //取線性溫控點
router.get("/lineartempctrl", Ctrl_polynomial_temp.expl_tempdatGet); //取得 expl_tempdat 資料表
router.get("/tempcontrol", Ctrl_polynomial_temp.exp_tempdatGet); //取得 exp_tempdat 資料表
router.put("/update_3", Ctrl_polynomial_temp.expl_tempdatPut); //更新 expl_tempdat 資料表 更改線性C值
router.put("/update_1", Ctrl_polynomial_temp.exp_tempdatPut); //更新 exp_tempdat 資料表 更改非線性C值

/* 以下是 rec_tempdat api */
router.get("/get_recdata", Ctrl_rec_tempdat.rec_dataGettt); //取得資料紀錄txt檔案
router.post("/delete_recdata", Ctrl_rec_tempdat.delete_dataPost); //刪除資料紀錄檔案
router.get("/rec_data", Ctrl_rec_tempdat.rec_tempdatGettt); //取得  rec_tempdat 資料表 範圍內溫度紀錄
router.get("/download_recdata", Ctrl_rec_tempdat.download_dataPost); //取得  rec_tempdat 資料表 範圍內溫度紀錄

/* 以下是 setting api */
router.get("/Temperature_Sensor", Ctrl_setting.temp_selectGet); //取得 temp_select 資料表
router.put("/Non_linear_Temp_Control_status", Ctrl_setting.exppbPut); //更新 pbdat 資料表 exppb 欄位
router.put("/Linear_Temp_Control_status", Ctrl_setting.protocal_enablePut); //更新 pbdat 資料表 protocal_enable 欄位
router.put("/Record_Switch_status", Ctrl_setting.recpb_datetimePut); //更新 pbdat 資料表 recpb,rec_start_datetime 欄位
router.get("/All_Switch_states", Ctrl_setting.pbdatGet); //取得 pbdat 資料表
router.get("/pidtempcontrol", Ctrl_setting.temp_piddatGet); //取得 temp_piddat 資料表
router.put("/update_2", Ctrl_setting.temp_piddatPut); //更新 temp_piddat 資料表 更改非線性PID值
router.get("/Rec_Time", Ctrl_setting.pbdatGet); //取得 tempdat 資料表 與temperaturemonitor.html /All_Switch_states 功能相同
router.put("/change", Ctrl_setting.temp_select_Put); //更改 temp_select 資料表 溫度感測開關狀態
router.post("/delete_allrecdata", Ctrl_setting.delete_alldataPost); //清空所有紀錄檔案
router.put("/Temp_sec", Ctrl_setting.pbdat_rec_time_Put); //更改  pbdat 資料表 更改幾秒記錄一次溫度的秒數
router.post("/shutdown", Ctrl_setting.shutdownPost); //樹梅派關機
router.post("/restart", Ctrl_setting.restartPost); //樹梅派重啟
router.post("/set_date_time", Ctrl_setting.setdatePost); //設定樹梅派時間

/* 以下是 mopso_ai api */
router.get("/get_mopso_info", Ctrl_mospso_ai.get_mopso_info);
router.put("/put_mopso_check_state", Ctrl_mospso_ai.put_mopso_check_state);
router.put("/put_mopso_size", Ctrl_mospso_ai.put_mopso_size);
router.put("/put_mopso_iterate", Ctrl_mospso_ai.put_mopso_iterate);
router.put(
  "/put_mopso_repository_size",
  Ctrl_mospso_ai.put_mopso_repository_size
);
router.put("/update_choose_model", Ctrl_mospso_ai.update_choose_model);
router.get("/get_choose_model", Ctrl_mospso_ai.get_choose_model);
router.get("/get_mopso_check_state", Ctrl_mospso_ai.get_mopso_check_state);

module.exports = router;
