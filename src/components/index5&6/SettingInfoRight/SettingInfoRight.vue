<template>
  <!-- 右半部 table+chart -->
  <!-- 細分左半部 -->
  <div
    class="col-lg-auto rounded mx-2 border p-2"
    style="width: 380px; height: 600px"
  >
    <!-- 理想 mm ℃ -->
    <div class="row">
      <!-- c表格 & nn上傳模型 -->
      <nn_network v-if="index56Mode === 1" />
      <LinearTempCtrl v-if="index56Mode === 0" />
    </div>
  </div>

  <!-- 細分右半部 -->
  <div class="col-lg rounded border p-3">
    <!-- 類神經預測 -->
    <div class="row" v-if="index56Mode === 1">
      <!-- title -->
      <h3 class="text-center mb-3">多目標粒子群最佳化演算法</h3>

      <!-- 左半部 溫控點 -->
      <div class="col-lg">
        <h6>關鍵溫控點-期望溫度</h6>
        <div
          class="shadow-sm border border-1 border-dark rounded fs-5 text-start p-1 my-2"
          v-for="(i, index) in expData"
          :key="i"
        >
          <label style="width: 130px"
            ><i class="bi bi-thermometer-half"></i>溫控點
            {{ index + 1 }}：</label
          ><span id="c1" class="fw-normal fw-bolder">{{ i }}℃</span>
        </div>
      </div>
      <!-- 右半部 -->
      <div class="col-lg">
        <h6>多目標粒子群最佳化演算法參數</h6>

        <div class="form-floating row fs-5 p-1">
          <input
            type="number"
            class="form-control"
            id="pso_size"
            placeholder="0"
          />
          <label for="pso_size">粒子數量：</label>
        </div>
        <div class="form-floating row fs-5 p-1">
          <input
            type="number"
            class="form-control"
            id="run_times"
            placeholder="0"
          />
          <label for="run_times">迭代次數：</label>
        </div>
        <div class="form-floating row fs-5 p-1">
          <input
            type="number"
            class="form-control"
            id="pso_storage_size"
            placeholder="0"
          />
          <label for="pso_storage_size">儲存庫大小：</label>
        </div>

        <div class="row justify-content-end p-1">
          <button
            type="button"
            class="btn btn-primary btn-sm w-25"
            @click="put_pso1(), put_pso2(), put_pso3()"
          >
            確定
          </button>
        </div>
        <div class="row my-1 text-decoration-underline">
          <h6>演算法執行時間：{{ AlgRunTime }}秒</h6>
        </div>
      </div>
    </div>

    <!-- 多項式預測 -->
    <div class="row py-2" v-if="index56Mode === 0">
      <h5 class="m-0">溫度感知即時狀態</h5>
      <TempBarChart
        v-bind:parentTempData="tempMeasure"
        v-bind:parentTempOption="tempOption1"
        style="height: 258px"
        class="mb-1"
      />
      <h5 class="m-0">溫度控制即時狀態</h5>
      <TempBarChart
        v-bind:parentTempData="tempControl"
        v-bind:parentTempOption="tempOption2"
        style="height: 258px"
        class="m-0"
      />
    </div>
  </div>
</template>

<script>
import nn_network from "@/components/index5&6/SettingInfoRight/Section_Pagination/nn_network.vue";
import LinearTempCtrl from "@/components/index5&6/SettingInfoRight/Section_Pagination/LinearTempCtrl.vue";
import TempBarChart from "@/components/TempComponents/TempBarChart/TempBarChart.vue";
import { getTempHandle } from "@/composition-api/getTempHandle";
import { onMounted, onUnmounted, ref, reactive } from "vue";
import { getIndex56PageHandle } from "@/composition-api/getIndex56PageHandle.js";

import $ from "jquery";

export default {
  components: { nn_network, LinearTempCtrl, TempBarChart },

  setup() {
    //頁面顯示狀態
    const { index56Mode } = getIndex56PageHandle();

    // 溫度資料Module
    const { tempMeasure, tempControl, renewTempData } = getTempHandle();

    const tempOption1 = reactive({
      type: "Tt",
      color1: "#FBAB7E",
      color2: "#FBAB7E",
      color3: "#F7CE68",
      color4: "#FBAB7E",
      color5: "#FF9A8B",
      color6: "#FF6666",
    });
    const tempOption2 = reactive({
      type: "Tc",
      color1: "#81D4FA",
      color2: "#29B6F6",
      color3: "#2AF598",
      color4: "#81D4FA",
      color5: "#BA68C8",
      color6: "#CC33FF",
    });

    const ip = "http://127.0.0.1:3000";

    function put_pso1() {
      let size = document.getElementById("pso_size");
      // console.log(size.value)
      let alldata = {
        mopso_size: size.value,
      };
      $.ajax({
        type: "put",
        data: alldata,
        url: "" + ip + "/api/put_mopso_size",
        complete: function () {
          alert("粒子數量上傳成功");
        },
      });
    }

    function put_pso2() {
      let number = document.getElementById("run_times");
      // console.log(number.value)
      let alldata = {
        mopso_iterate: number.value,
      };
      $.ajax({
        type: "put",
        data: alldata,
        url: "" + ip + "/api/put_mopso_iterate",
        complete: function () {
          alert("迭帶次數上傳成功");
        },
      });
    }

    function put_pso3() {
      let large = document.getElementById("pso_storage_size");
      // console.log(number.value)
      let alldata = {
        mopso_repository_size: large.value,
      };
      $.ajax({
        type: "put",
        data: alldata,
        url: "" + ip + "/api/put_mopso_repository_size",
        complete: function () {
          alert("儲存庫大小上傳成功");
        },
      });
    }

    function get_mopsoData() {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "" + ip + "/api/get_mopso_info",
        success: function (data) {
          let now_data = data[0];
          // console.log(index56Mode.value);
          if (index56Mode.value === 1) {
            let size = document.getElementById("pso_size");
            let number = document.getElementById("run_times");
            let storage_size = document.getElementById("pso_storage_size");
            size.value = now_data.mopso_size;
            number.value = now_data.mopso_iterate;
            storage_size.value = now_data.mopso_repository_size;
          }
        },
      });
    }

    let expData = ref();
    let AlgRunTime = ref();
    function get_ExpData() {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "" + ip + "/api/get_mopso_info",
        success: function (data) {
          expData.value = [
            data[0].mopso_temp1.toFixed(1),
            data[0].mopso_temp2.toFixed(1),
            data[0].mopso_temp3.toFixed(1),
            data[0].mopso_temp4.toFixed(1),
            data[0].mopso_temp5.toFixed(1),
            data[0].mopso_temp6.toFixed(1),
            data[0].mopso_temp7.toFixed(1),
            data[0].mopso_temp8.toFixed(1),
            data[0].mopso_temp9.toFixed(1),
            data[0].mopso_temp10.toFixed(1),
          ];

          AlgRunTime.value = data[0].mopso_time;
        },
      });
    }

    let timer;
    onMounted(() => {
      get_ExpData();
      renewTempData();
      console.log("asd");
      get_mopsoData();
      timer = setInterval(() => {
        get_ExpData();
        renewTempData();
      }, 1000);
    });

    onUnmounted(() => {
      clearInterval(timer);
    });
    return {
      put_pso1,
      put_pso2,
      put_pso3,
      expData,
      AlgRunTime,
      tempOption1,
      tempOption2,
      tempMeasure,
      tempControl,
      index56Mode,
    };
  },
};
</script>

<style scoped></style>
