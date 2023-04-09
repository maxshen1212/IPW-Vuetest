<template>
  <!-- 選擇模型Modal -->
  <div
    class="modal fade"
    ref="choose_model"
    id="choose_model"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            請先選擇類神經模型
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <nn_network />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-lg btn-outline-primary"
            data-bs-dismiss="modal"
            id="check_model"
          >
            完成
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 選擇預測模式 Modal -->
  <div
    class="modal fade"
    ref="choose_mode"
    id="choose_mode"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel_2"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel_2">
            請先選擇預測模式
          </h5>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <!-- 選擇預測模式 -->
              <div class="col-12">
                <div class="row">
                  <!-- 選擇預測模式 -->
                  <div class="col-sm text-center m-0 p-1">
                    <select
                      class="form-select fw-bold border border-1 border-info rounded"
                      id="select_mode"
                    >
                      <option value="1">類神經預測模式</option>
                      <option value="2">多項式預測模式</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-lg btn-outline-primary"
            data-bs-dismiss="modal"
            id="check_model_1"
          >
            完成
          </button>
          <button
            type="button"
            class="btn btn-lg btn-outline-primary"
            data-bs-target="#choose_model"
            data-bs-toggle="modal"
            id="check_model_2"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 選擇有線or無線量測 Modal -->
  <div
    class="modal fade"
    ref="choose_sensor"
    id="choose_sensor"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel_3"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel_3">
            請先選擇溫度感測模式
          </h5>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <!-- 選擇溫度感測模式 -->
              <div class="col-12">
                <div class="row">
                  <!-- 選擇溫度感測模式 -->
                  <div class="col-sm text-center m-0 p-1">
                    <select
                      class="form-select fw-bold border border-1 border-info rounded"
                      id="select_sensor"
                    >
                      <option value="1">使用實體溫度線</option>
                      <option value="2">使用無線mesh裝置</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-lg btn-outline-primary"
            data-bs-target="#choose_mode"
            data-bs-toggle="modal"
            id="check_model_3"
          >
            下一步
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nn_network from "@/components/index5&6/SettingInfoRight/Section_Pagination/nn_network.vue";

import $ from "jquery";
import { onMounted, ref } from "vue";
import { Modal } from "bootstrap/dist/js/bootstrap.js";

const ip = "http://127.0.0.1:3000";

export default {
  components: { nn_network },

  setup() {
    const choose_model = ref(null);
    let myModal_1;

    const choose_mode = ref(null);
    let myModal_2;

    const choose_sensor = ref(null);
    let myModal_3;

    onMounted(() => {
      myModal_1 = new Modal(choose_model.value, {
        keyboard: false,
      });
      myModal_2 = new Modal(choose_mode.value, {
        keyboard: false,
      });
      myModal_3 = new Modal(choose_sensor.value, {
        keyboard: false,
      });

      $.ajax({
        type: "GET",
        dataType: "json",
        url: ip + "/api/get_choose_model",
        success: function (data) {
          if (data[0].choose_model_check == 1) {
            console.log("已選擇模型");
          } else {
            console.log("尚未選擇模型");
            myModal_3.show();

            let select_mode = document.getElementById("select_mode");
            let select_mode_val = select_mode.value;
            if (select_mode_val == 1) {
              // 類神經
              $("#check_model_1").hide(); //完成
              $("#check_model_2").show(); //下一步
            } else {
              // 多項式
              $("#check_model_1").show(); //完成
              $("#check_model_2").hide(); //下一步
            }
          }
        },
      });

      //監聽改變預測模式
      $("#select_mode").on("change", function () {
        let select_mode = document.getElementById("select_mode");
        let select_mode_val = select_mode.value;
        console.log(select_mode_val);
        if (select_mode_val == 1) {
          // 類神經
          $("#check_model_1").hide(); //完成
          $("#check_model_2").show(); //下一步
        } else {
          // 多項式
          $("#check_model_1").show(); //完成
          $("#check_model_2").hide(); //下一步
        }
      });

      // 下一步
      $("#check_model_3").on("click", function () {
        let select_sensor = document.getElementById("select_sensor");
        let select_sensor_val = select_sensor.value;
        if (select_sensor_val == 1) {
          select_sensor_val = 0;
          console.log("有線");
        } else {
          select_sensor_val = 1;
          console.log("無線");
        }
        // api要再加
        $.ajax({
          type: "PUT",
          data: { state: select_sensor_val },
          url: "" + ip + "/api/put_wire_or_wireless",
          success: function () {
            console.log(select_sensor_val);
            console.log("選擇感測方式成功");
          },
        });
      });

      // 完成
      $("#check_model_1").on("click", function () {
        var stateData = { state: 0 };
        $.ajax({
          type: "put",
          data: stateData,
          url: "" + ip + "/api/put_mopso_check_state",
          success: function () {
            console.log("預測模式更改成功");
            location.reload();
          },
        });

        let chose = 1;
        $.ajax({
          type: "PUT",
          data: { q: chose },
          url: "" + ip + "/api/update_choose_model",
          success: function () {
            location.reload();
          },
        });
      });

      // 下一步
      $("#check_model_2").on("click", function () {
        var stateData = { state: 1 };
        $.ajax({
          type: "put",
          data: stateData,
          url: "" + ip + "/api/put_mopso_check_state",
          success: function () {
            console.log("預測模式更改成功");
          },
        });
      });

      // 確認已選擇模型
      $("#check_model").on("click", function () {
        let chose = 1;
        $.ajax({
          type: "PUT",
          data: { q: chose },
          url: "" + ip + "/api/update_choose_model",
          success: function () {
            location.reload();
          },
        });
      });
    });

    return { choose_model, choose_mode, choose_sensor, myModal_1, myModal_2 };
  },
};
</script>

<style scoped></style>
