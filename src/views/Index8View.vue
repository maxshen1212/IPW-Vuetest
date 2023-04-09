<template>
  <HeadComponent />
  <ModalComponent />
  <div class="container-lg">
    <!-- 補償狀態+紀錄欄位+時間 （功能開關）-->
    <div class="row justify-content-center mb-3">
      <!-- 熱平衡狀態 -->
      <div class="col-lg-4 text-center">
        <span class="fs-5 align-middle px-1">熱平衡補償狀態</span>
        <!-- 按鈕 -->
        <input
          id="row1"
          type="checkbox"
          data-toggle="toggle"
          data-size="small"
        />
      </div>

      <!-- 熱伸長狀態 -->
      <div class="col-lg-4 text-center">
        <span class="fs-5 align-middle px-1">熱伸長補償狀態</span>
        <!-- 按鈕 -->
        <input
          id="row2"
          type="checkbox"
          data-toggle="toggle"
          data-size="small"
        />
      </div>

      <!-- 記錄狀態 -->
      <div class="col-lg-3 text-center">
        <span class="fs-5 align-middle px-1">記錄資料狀態</span>
        <!-- 按鈕 -->
        <input
          id="row3"
          type="checkbox"
          data-toggle="toggle"
          data-size="small"
        />
      </div>
    </div>

    <div class="row justify-content-center">
      <!-- Switch -->
      <div class="col-lg-5 mx-3">
        <div class="row justify-content-center">
          <div class="col-lg-12 border border-2 border-dark rounded shadow">
            <!-- title -->
            <h5 class="mt-2"><i class="bi bi-info-circle"></i> 溫度通道設定</h5>
            <hr />
            <!-- 感測器開關表格 -->
            <table class="table text-center">
              <thead>
                <tr>
                  <th class="col-lg-1">#</th>
                  <th class="col-lg-2">溫度感知點</th>
                  <th class="col-lg-2">溫度控制點</th>
                  <th class="col-lg-2">PT100</th>
                </tr>
              </thead>
              <tbody>
                <!-- 溫感點1 -->
                <tr>
                  <th>1</th>
                  <td>
                    <input
                      id="tt1"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc1"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="pt1"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="secondary"
                      data-size="small"
                    />
                  </td>
                </tr>
                <!-- 溫感點2 -->
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <input
                      id="tt2"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc2"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="pt2"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="secondary"
                      data-size="small"
                    />
                  </td>
                </tr>
                <!-- 溫感點3 -->
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <input
                      id="tt3"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc3"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="pt3"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="secondary"
                      data-size="small"
                    />
                  </td>
                </tr>
                <!-- 溫感點4 -->
                <tr>
                  <th scope="row">4</th>
                  <td>
                    <input
                      id="tt4"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc4"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="pt4"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="secondary"
                      data-size="small"
                    />
                  </td>
                </tr>
                <!-- 溫感點5 -->
                <tr>
                  <th scope="row">5</th>
                  <td>
                    <input
                      id="tt5"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc5"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td></td>
                </tr>
                <!-- 溫感點6 -->
                <tr>
                  <th scope="row">6</th>
                  <td>
                    <input
                      id="tt6"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc6"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td></td>
                </tr>
                <!-- 溫感點7 -->
                <tr>
                  <th scope="row">7</th>
                  <td>
                    <input
                      id="tt7"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc7"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td></td>
                </tr>
                <!-- 溫感點8 -->
                <tr>
                  <th scope="row">8</th>
                  <td>
                    <input
                      id="tt8"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc8"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td></td>
                </tr>
                <!-- 溫感點9 -->
                <tr>
                  <th scope="row">9</th>
                  <td>
                    <input
                      id="tt9"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc9"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td></td>
                </tr>
                <!-- 溫感點10 -->
                <tr>
                  <th scope="row">10</th>
                  <td>
                    <input
                      id="tt10"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="danger"
                      data-size="small"
                    />
                  </td>
                  <td>
                    <input
                      id="tc10"
                      type="checkbox"
                      data-toggle="toggle"
                      data-onstyle="warning"
                      data-size="small"
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Setting -->
      <div class="col-lg mx-3">
        <div class="row">
          <!-- 第一區塊 設定紀錄頻率秒數 -->
          <div class="col-lg-12 border border-2 border-dark rounded shadow p-2">
            <div class="row">
              <div class="col-lg-12">
                <h5><i class="bi bi-info-circle"></i> 溫度紀錄頻率時間</h5>
              </div>
              <br />
            </div>
            <div class="row justify-content-center mb-2 px-3">
              <div class="col-lg-8">
                <div class="row">
                  <div class="col-lg-10">
                    <input
                      type="number"
                      id="text3"
                      class="form-control text-center text-dark"
                      size="3"
                      min="5"
                      max="30"
                    />
                  </div>
                  <div class="col-lg-2 align-self-center">
                    <h5>秒</h5>
                  </div>
                </div>
              </div>
              <div class="col-lg">
                <button type="button" class="btn btn-outline-dark" id="button3">
                  <h6 class="m-0">設定記錄時間</h6>
                </button>
              </div>
            </div>
          </div>

          <!-- 第二區塊 設定時間-->
          <div
            class="col-lg-12 border border-2 border-dark rounded shadow my-2 p-2"
          >
            <div class="row">
              <h5>
                <i class="bi bi-info-circle"></i>
                <span>系統時間資訊 </span>
                <span id="showboxnow"></span>
              </h5>
            </div>

            <div class="row justify-content-center mb-2 px-3">
              <div class="col-lg-8">
                <Datepicker
                  locale="tw"
                  v-model="date"
                  :format="format"
                  enable-seconds
                />
              </div>

              <div class="col-lg">
                <button
                  type="button"
                  class="btn btn-outline-dark"
                  id="button2"
                  style="width: 125px"
                >
                  <h6 class="m-0">設定時間</h6>
                </button>
              </div>
            </div>
          </div>

          <!-- 第三區塊 系統功能 -->
          <div class="col-lg-12 border border-2 border-dark rounded shadow p-2">
            <div class="row">
              <h5><i class="bi bi-info-circle"></i> 系統功能</h5>
            </div>

            <div class="row mb-2 px-4">
              <!-- 選擇預測模式 -->
              <div class="col-lg text-center m-0 p-1">
                <select
                  class="form-select fw-bold border border-1 border-info rounded"
                  id="selectone"
                >
                  <option value="1">類神經預測模式</option>
                  <option value="2">多項式預測模式</option>
                </select>
              </div>

              <!-- 遠端遙控重啟按鈕 -->
              <div class="col-lg-auto text-center m-0 p-1">
                <button
                  type="button"
                  class="btn btn-lg btn-outline-primary"
                  id="button5"
                >
                  <h6 class="m-0">遠端遙控重啟</h6>
                </button>
              </div>

              <!-- 刪除溫度紀錄 -->
              <div class="col-lg-auto text-center m-0 p-1">
                <button
                  type="button"
                  class="btn btn-lg btn-outline-danger"
                  id="button1"
                >
                  <h6 class="m-0">刪除溫度紀錄資料</h6>
                </button>
              </div>

              <!-- 關機 -->
              <div class="col-lg-auto text-center m-0 p-1">
                <button
                  type="button"
                  class="btn btn-lg btn-outline-danger"
                  id="button4"
                >
                  <h6 class="m-0">關機</h6>
                </button>
              </div>

              <!-- 重置 -->
              <div class="col-lg-auto text-center m-0 p-1">
                <button
                  type="button"
                  class="btn btn-lg btn-outline-danger"
                  id="button6"
                >
                  <h6 class="m-0">重置</h6>
                </button>
              </div>
            </div>
          </div>

          <!-- 第四區塊 PID -->
          <div
            class="col-lg-12 border border-2 border-dark rounded shadow my-2 p-2"
          >
            <!-- title -->
            <div class="row">
              <h5><i class="bi bi-info-circle"></i> PID控制器 參數設定</h5>
            </div>

            <!-- content -->
            <div class="row text-end m-1 mb-3">
              <!-- 左半部 -->
              <div class="col-lg my-1">
                <!-- 選單 -->
                <div>
                  <select
                    class="form-select text-center fw-bold border border-2 border-dark rounded"
                    id="selecttwo"
                    @change="choseone"
                  >
                    <option value="1">溫控點 1</option>
                    <option value="2">溫控點 2</option>
                    <option value="3">溫控點 3</option>
                    <option value="4">溫控點 4</option>
                    <option value="5">溫控點 5</option>
                    <option value="6">溫控點 6</option>
                    <option value="7">溫控點 7</option>
                    <option value="8">溫控點 8</option>
                    <option value="9">溫控點 9</option>
                    <option value="10">溫控點 10</option>
                    <option value="11" disabled>冷卻溫控點</option>
                  </select>
                </div>
                <!-- title -->
                <div
                  id="pid_id"
                  class="text-start fs-6 fw-bold mt-3 ms-2"
                ></div>

                <!-- 溫度資訊 -->
                <div
                  class="text-start fs-5 mb-2 py-2 border border-2 border-secondary rounded bg-white shadow-sm"
                >
                  <i class="bi bi-thermometer-half"></i>期望溫度：<span
                    id="exptemp"
                  ></span
                  ><br />
                  <i class="bi bi-thermometer-half"></i>實際溫度：<span
                    id="ctemp"
                  ></span>
                </div>
              </div>
              <!-- 右半部 -->
              <div class="col-lg-6">
                <!-- p -->
                <div class="input-group my-1 shadow-lg">
                  <span
                    class="input-group-text fw-bold"
                    id="basic-addon1"
                    style="width: 45px"
                    >P：</span
                  >
                  <input
                    type="number"
                    id="p"
                    class="form-control text-center text-dark"
                    size="3"
                    min="5"
                    max="30"
                  />
                </div>

                <!-- i -->
                <div class="input-group my-1 shadow-sm">
                  <span
                    class="input-group-text fw-bold"
                    id="basic-addon1"
                    style="width: 45px"
                    >I ：</span
                  >
                  <input
                    type="number"
                    id="i"
                    class="form-control text-center text-dark"
                    size="3"
                    min="5"
                    max="30"
                  />
                </div>

                <!-- d -->
                <div class="input-group my-1 shadow-sm">
                  <span
                    class="input-group-text fw-bold"
                    id="basic-addon1"
                    style="width: 45px"
                    >D：</span
                  >
                  <input
                    type="number"
                    id="d"
                    class="form-control text-center text-dark"
                    size="3"
                    min="5"
                    max="30"
                  />
                </div>

                <!-- PWM% -->
                <div class="input-group my-1 shadow-sm">
                  <span
                    class="input-group-text fw-bold"
                    id="basic-addon1"
                    style="width: 85px"
                    >PWM%：</span
                  >
                  <input
                    type="number"
                    id="limit"
                    class="form-control text-center text-dark"
                    size="3"
                    min="5"
                    max="30"
                  />
                </div>

                <!-- check btn -->
                <button class="btn btn-outline-primary w-100" @click="btnpid()">
                  <h6 class="m-0">更新 PID 參數</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalComponent from "@/components/Modal/modalComponent.vue";
import HeadComponent from "@/components/header/HeadComponent.vue";
import $ from "jquery";
import { onMounted, ref, onUnmounted } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
window.jQuery = $;

export default {
  name: "Index8View",
  components: {
    HeadComponent,
    Datepicker,
    ModalComponent,
  },
  setup() {
    require("bootstrap5-toggle");
    require("bootstrap5-toggle/css/bootstrap5-toggle.css");
    const ip = "http://127.0.0.1:3000";
    let a;
    let stara;
    let timer;

    // 計算時間
    const date = ref(new Date());
    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();

      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    };

    // 初始化溫度開關
    function toggle() {
      $(
        "#tt1,#tt2,#tt3,#tt4,#tt2,#tt5,#tt6,#tt7,#tt8,#tt9,#tt10,#tc1,#tc2,#tc3,#tc4,#tc5,#tc6,#tc7,#tc8,#tc9,#tc10,#pt1,#pt2,#pt3,#pt4"
      ).bootstrapToggle();
    }

    // 選擇系統時間
    // function setSystemTime() {
    // $("#datetimepicker1").datetimepicker({
    //   format: "YYYY-MM-DD HH:mm:ss",
    //   useCurrent: true,
    //   date: $("#datetimepicker1").val(),
    //   ignoreReadonly: false, //禁止使用者輸入
    // });
    // }

    // 獲取控制溫度
    function getData(starb) {
      $.ajax({
        url: "" + ip + "/api/Temp_Perception", //存取Json的網址
        type: "GET",
        dataType: "json",
        //contentType: "application/json",
        success: function (data) {
          let sqldata = [
            data[0].tc1,
            data[0].tc2,
            data[0].tc3,
            data[0].tc4,
            data[0].tc5,
            data[0].tc6,
            data[0].tc7,
            data[0].tc8,
            data[0].tc9,
            data[0].tc10,
          ];
          $("#ctemp").text(sqldata[starb - 1] + "℃");
        },
      });
    }

    // 獲取期望溫度
    function getDataexp(starb) {
      $.ajax({
        url: "" + ip + "/api/Expected_Temp", //存取Json的網址
        type: "GET",
        dataType: "json",
        //contentType: "application/json",
        success: function (data) {
          let sqldataexp = [
            data[0].exp_temperature,
            data[1].exp_temperature,
            data[2].exp_temperature,
            data[3].exp_temperature,
            data[4].exp_temperature,
            data[5].exp_temperature,
            data[6].exp_temperature,
            data[7].exp_temperature,
            data[8].exp_temperature,
            data[9].exp_temperature,
          ];
          $("#exptemp").text(sqldataexp[starb - 1] + "℃");
        },
      });
    }

    //取得所有感測器狀態
    function tempStatus() {
      $.ajax({
        url: "" + ip + "/api/Temperature_Sensor", //存取Json的網址
        type: "GET",
        dataType: "json",
        async: true,
        //contentType: "application/json",
        success: function (data3) {
          // 溫度感知點
          let ts1 = data3[0]["tt1"];
          let ts2 = data3[0]["tt2"];
          let ts3 = data3[0]["tt3"];
          let ts4 = data3[0]["tt4"];
          let ts5 = data3[0]["tt5"];
          let ts6 = data3[0]["tt6"];
          let ts7 = data3[0]["tt7"];
          let ts8 = data3[0]["tt8"];
          let ts9 = data3[0]["tt9"];
          let ts10 = data3[0]["tt10"];
          // 溫度控制點
          let ts11 = data3[0]["tc1"];
          let ts12 = data3[0]["tc2"];
          let ts13 = data3[0]["tc3"];
          let ts14 = data3[0]["tc4"];
          let ts15 = data3[0]["tc5"];
          let ts16 = data3[0]["tc6"];
          let ts17 = data3[0]["tc7"];
          let ts18 = data3[0]["tc8"];
          let ts19 = data3[0]["tc9"];
          let ts20 = data3[0]["tc10"];
          // pt100
          let ts21 = data3[0]["pt1"];
          let ts22 = data3[0]["pt2"];
          let ts23 = data3[0]["pt3"];
          let ts24 = data3[0]["pt4"];
          //console.log(data3); //顯示回傳資料

          if (ts1 == 1) {
            $("#tt1").bootstrapToggle("on");
          } else {
            $("#tt1").bootstrapToggle("off");
          }

          if (ts2 == 1) {
            $("#tt2").bootstrapToggle("on");
          } else {
            $("#tt2").bootstrapToggle("off");
          }
          if (ts3 == 1) {
            $("#tt3").bootstrapToggle("on");
          } else {
            $("#tt3").bootstrapToggle("off");
          }
          if (ts4 == 1) {
            $("#tt4").bootstrapToggle("on");
          } else {
            $("#tt4").bootstrapToggle("off");
          }
          if (ts5 == 1) {
            $("#tt5").bootstrapToggle("on");
          } else {
            $("#tt5").bootstrapToggle("off");
          }
          if (ts6 == 1) {
            $("#tt6").bootstrapToggle("on");
          } else {
            $("#tt6").bootstrapToggle("off");
          }
          if (ts7 == 1) {
            $("#tt7").bootstrapToggle("on");
          } else {
            $("#tt7").bootstrapToggle("off");
          }
          if (ts8 == 1) {
            $("#tt8").bootstrapToggle("on");
          } else {
            $("#tt8").bootstrapToggle("off");
          }
          if (ts9 == 1) {
            $("#tt9").bootstrapToggle("on");
          } else {
            $("#tt9").bootstrapToggle("off");
          }
          if (ts10 == 1) {
            $("#tt10").bootstrapToggle("on");
          } else {
            $("#tt10").bootstrapToggle("off");
          }
          if (ts11 == 1) {
            $("#tc1").bootstrapToggle("on");
          } else {
            $("#tc1").bootstrapToggle("off");
          }
          if (ts12 == 1) {
            $("#tc2").bootstrapToggle("on");
          } else {
            $("#tc2").bootstrapToggle("off");
          }
          if (ts13 == 1) {
            $("#tc3").bootstrapToggle("on");
          } else {
            $("#tc3").bootstrapToggle("off");
          }
          if (ts14 == 1) {
            $("#tc4").bootstrapToggle("on");
          } else {
            $("#tc4").bootstrapToggle("off");
          }
          if (ts15 == 1) {
            $("#tc5").bootstrapToggle("on");
          } else {
            $("#tc5").bootstrapToggle("off");
          }
          if (ts16 == 1) {
            $("#tc6").bootstrapToggle("on");
          } else {
            $("#tc6").bootstrapToggle("off");
          }
          if (ts17 == 1) {
            $("#tc7").bootstrapToggle("on");
          } else {
            $("#tc7").bootstrapToggle("off");
          }
          if (ts18 == 1) {
            $("#tc8").bootstrapToggle("on");
          } else {
            $("#tc8").bootstrapToggle("off");
          }
          if (ts19 == 1) {
            $("#tc9").bootstrapToggle("on");
          } else {
            $("#tc9").bootstrapToggle("off");
          }
          if (ts20 == 1) {
            $("#tc10").bootstrapToggle("on");
          } else {
            $("#tc10").bootstrapToggle("off");
          }
          if (ts21 == 1) {
            $("#pt1").bootstrapToggle("on");
          } else {
            $("#pt1").bootstrapToggle("off");
          }
          if (ts22 == 1) {
            $("#pt2").bootstrapToggle("on");
          } else {
            $("#pt2").bootstrapToggle("off");
          }
          if (ts23 == 1) {
            $("#pt3").bootstrapToggle("on");
          } else {
            $("#pt3").bootstrapToggle("off");
          }
          if (ts24 == 1) {
            $("#pt4").bootstrapToggle("on");
          } else {
            $("#pt4").bootstrapToggle("off");
          }
        },
        error: function () {},
      });
    }

    // 按鈕點擊
    function btnChange() {
      $(
        "#tt1,#tt2,#tt3,#tt4,#tt2,#tt5,#tt6,#tt7,#tt8,#tt9,#tt10,#tc1,#tc2,#tc3,#tc4,#tc5,#tc6,#tc7,#tc8,#tc9,#tc10,#pt1,#pt2,#pt3,#pt4"
      ).on("change", function () {
        btn($(this).attr("id"));
      });
    }

    // 通道選擇開關
    function btn(id) {
      let name = "#" + id;
      let rec;
      // 先判斷目前狀態，在改變下個狀態
      if ($(name).prop("checked") == true) {
        rec = 1;
        $.ajax({
          type: "PUT",
          data: { x: rec, y: id },
          url: "" + ip + "/api/change",
          success: function () {},
        });
      } else {
        rec = 0;
        $.ajax({
          type: "PUT",
          data: { x: rec, y: id },
          url: "" + ip + "/api/change",
          success: function () {},
        });
      }
    }

    //引用index5.html 頁面功能 取得幾秒記錄溫度秒數
    function getRecordSecond() {
      $.ajax({
        url: "" + ip + "/api/All_Switch_states", //存取Json的網址
        type: "GET",
        dataType: "json",
        async: true,
        //contentType: "application/json",
        success: function (data) {
          // console.log(data[0].rec_time); //測試顯示資料
          $("#text3").val(data[0].rec_time);
        },
      });
    }

    //取得PID表格內容
    function tempselection(selection) {
      let num = selection;
      let q = selection - 1;
      $("#pid_id").text("PID設定資訊 溫控點" + num);
      // PID table
      $.ajax({
        type: "GET",
        url: "" + ip + "/api/pidtempcontrol",
        success: function (data) {
          let sqldata = [
            data[q].p,
            data[q].i,
            data[q].d,
            data[q].pwm_limit,
            data[q].frequency,
          ];
          $("#p").val(sqldata[0]);
          $("#i").val(sqldata[1]);
          $("#d").val(sqldata[2]);
          $("#limit").val(sqldata[3]);
          $("#frequency").val(sqldata[4]);
          //console.log(sqldata); //觀看回傳值
        },
      });
    }

    // 改變pid值
    function btnpid() {
      // x: pid要改變的值
      let pidvalue;
      // y: 選擇的溫控點
      let select = document.getElementById("selecttwo").value;
      // z: pid要改變的參數
      let pid;
      for (let i = 0; i < 4; i++) {
        if (i == 0) {
          pid = "p";
          pidvalue = document.getElementById("p").value;
        } else if (i == 1) {
          pid = "i";
          pidvalue = document.getElementById("i").value;
        } else if (i == 2) {
          pid = "d";
          pidvalue = document.getElementById("d").value;
        } else if (i == 3) {
          pid = "limit";
          pidvalue = document.getElementById("limit").value;
        }
        $.ajax({
          type: "PUT",
          data: { x: pidvalue, y: select, z: pid },
          url: "" + ip + "/api/update_2",
          success: function () {
            if (i == 3) {
              tempselection(select);
              $("input").attr("value", "");
              console.log("ok");
            }
          },
        });
      }
    }

    //判斷選擇的溫控點
    function choseone() {
      let b = document.getElementById("selecttwo");
      // 溫控點1～10
      let starb = b.options[b.selectedIndex].value;
      // getDatahistory("tc" + starb, parseInt(starb) + 10);
      getDataexp(starb);
      getData(starb);
      tempselection(starb);
    }

    //改變預測模式
    function choseMode(stara) {
      let stateData;

      if (stara == 1) {
        stateData = { state: 1 };
      } else {
        stateData = { state: 0 };
      }

      $.ajax({
        type: "put",
        data: stateData,
        url: "" + ip + "/api/put_mopso_check_state",
        success: function () {
          console.log("預測模式更改成功");
          getMode();
        },
      });
    }

    //取得現在預測模式
    function getMode() {
      $.ajax({
        url: "" + ip + "/api/get_mopso_check_state", //存取Json的網址
        type: "GET",
        dataType: "json",
        //contentType: "application/json",
        success: function (data) {
          let nowMode = data[0].polynomial_or_bpnn_model;
          if (nowMode === 1) {
            $("#selectone").val(1);
          } else {
            $("#selectone").val(2);
          }
          a = document.getElementById("selectone");
          stara = a.value;
          if (stara == 1) {
            console.log("類神經預測");
          } else {
            console.log("多項式預測");
          }
        },
      });
    }

    //上方三個開關偵測
    function rowBtn1() {
      $("#row1").change(function () {
        let r = confirm("功能確認框");
        if (r == true) {
          btn1();
        } else if (r == false) {
          location.reload();
        }
      });
    }
    function rowBtn2() {
      $("#row2").change(function () {
        let r = confirm("功能確認框");
        if (r == true) {
          btn2();
        } else if (r == false) {
          location.reload();
        }
      });
    }
    function rowBtn3() {
      $("#row3").change(function () {
        let r = confirm("功能確認框");
        if (r == true) {
          btn3();
        } else if (r == false) {
          location.reload();
        }
      });
    }

    // 非線性狀態btn
    function btn1() {
      let exp;
      // 先判斷現在狀態，並改變下個狀態
      // 同時關閉時按開啟，兩個會同時開啟
      if (
        $("#row1").prop("checked") == true &&
        $("#row3").prop("checked") == false
      ) {
        exp = 1;
        $("#row3").bootstrapToggle("on", true);
        btn3();
        $.ajax({
          type: "PUT",
          data: { x: exp },
          url: "" + ip + "/api/Non_linear_Temp_Control_status",
        });
        // 記錄狀態已經開啟
      } else {
        // 照正常運作
        if ($("#row1").prop("checked") == true) {
          exp = 1;
        } else {
          exp = 0;
        }
        $.ajax({
          type: "PUT",
          data: { x: exp },
          url: "" + ip + "/api/Non_linear_Temp_Control_status",
        });
      }
    }
    // 線性補償狀態btn
    function btn2() {
      let protocal;
      if ($("#row2").prop("checked") == true) {
        protocal = 1;
      } else {
        protocal = 0;
      }
      $.ajax({
        type: "PUT",
        data: { q: protocal },
        url: "" + ip + "/api/Linear_Temp_Control_status",
      });
    }
    // 記錄狀態btn
    function btn3() {
      let rec;
      // 先判断现在的状态，并改变下一个状态
      if ($("#row3").prop("checked") == true) {
        rec = 1;
        $.ajax({
          type: "PUT",
          data: { q: rec },
          url: "" + ip + "/api/Record_Switch_status",
        });
      } else {
        rec = 0;
        $.ajax({
          type: "PUT",
          data: { q: rec },
          url: "" + ip + "/api/Record_Switch_status",
        });
      }
    }

    // 抓取資料庫開關
    function chech_buttom() {
      $.ajax({
        url: "" + ip + "/api/All_Switch_states", //存取Json的網址
        type: "GET",
        dataType: "json",
        async: false,
        //contentType: "application/json",
        success: function (data2) {
          // 記錄狀態
          let recpb = data2[0]["recpb"];
          // 非線性狀態
          let exppb = data2[0]["exppb"];
          // 線性狀態
          let protocal = data2[0]["protocal_enable"];
          //console.log(data2); //顯示回傳資料
          if (exppb == 1) {
            $("#row1").bootstrapToggle("on");
          } else {
            $("#row1").bootstrapToggle("off");
          }
          if (protocal == 1) {
            $("#row2").bootstrapToggle("on");
          } else {
            $("#row2").bootstrapToggle("off");
          }
          if (recpb == 1) {
            $("#row3").bootstrapToggle("on");
          } else {
            $("#row3").bootstrapToggle("off");
          }
        },
        error: function () {
          console.log("button*3 error"); //顯示錯誤
        },
      });
    }

    onMounted(() => {
      toggle();
      getMode();
      tempStatus();
      getRecordSecond();
      // setSystemTime();
      choseone();
      chech_buttom();
      rowBtn1();
      rowBtn2();
      rowBtn3();
      btnChange();
      document.getElementById("showboxnow").innerHTML =
        new Date().toLocaleString();
      timer = setInterval(function () {
        // systemTime()
        choseone();
        document.getElementById("showboxnow").innerHTML =
          new Date().toLocaleString();
      }, 1 * 1000);

      // 刪除溫度記錄資料
      $("#button1").click(function () {
        if (confirm("要刪除所有記錄？？")) {
          $.ajax({
            type: "POST",
            url: "" + ip + "/api/delete_allrecdata",
            complete: function () {
              alert("刪除完成");
            },
          });
        }
      });

      /// 設定時間btn
      $("#button2").click(function () {
        console.log(format(date.value));
        $.ajax({
          type: "POST",
          data: { q: date.value },
          url: "" + ip + "/api/set_date_time",
        });
      });

      // 設定記錄時間btn
      $("#button3").click(function () {
        let rectime = document.getElementById("text3").value;

        if (rectime >= 5 && rectime <= 30) {
          $.ajax({
            type: "PUT",
            data: { q: rectime },
            url: "" + ip + "/api/Temp_sec",
          });
          document.getElementById("sec").innerHTML =
            "目前記錄時間：" + rectime + "秒";
        } else {
          alert("時間不符合設定");
        }
      });

      // 系統關機btn
      $("#button4").click(function () {
        if (confirm("確定關機？？")) {
          $.ajax({
            type: "POST",
            url: "" + ip + "/api/shutdown",
            success: function (data) {
              alert(data);
            },
          });
        }
      });

      // 遠端遙控重啟btn
      $("#button5").click(function () {
        if (confirm("確定重啟？？")) {
          $.ajax({
            type: "POST",
            url: "" + ip + "/api/restart",
            success: function (data) {
              alert(data);
            },
          });
        }
      });

      // 系統重置btn
      $("#button6").click(function () {
        if (confirm("確定重置？？")) {
          let chose = 0;
          $.ajax({
            type: "PUT",
            data: { q: chose },
            url: "" + ip + "/api/update_choose_model",
            success: function () {
              console.log("update_choose_model ok");
            },
          });

          let alldata = {
            file_name: "",
          };
          $.ajax({
            type: "put",
            data: alldata,
            url: "" + ip + "/api/upload_path",
            complete: function () {
              console.log("上傳成功");
              location.reload();
            },
          });
        }
      });

      //監聽改變預測模式
      $("#selectone").on("change", function () {
        if (!window.confirm("是否要切換預測模式？")) {
          $("#selectone").val(stara);
        } else {
          a = document.getElementById("selectone");
          stara = a.value;
          choseMode(stara);
        }
      });
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      btnpid,
      format,
      choseone,
      date,
    };
  },
};
</script>

<style>
.dp__theme_light {
  --dp-success-color: #75b4d2;
}
</style>
