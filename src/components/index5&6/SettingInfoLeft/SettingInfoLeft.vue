<template>
  <!-- 左半部 -->
  <div class="col-sm-auto" style="width: 360px">
    <div class="row justify-content-center">
      <!-- 功能選單 -->
      <div class="col-sm-12 pb-1 mx-2 text-center">
        <h3 class="fw-normal">{{ title }}-數據欄</h3>
        <div class="row justify-content-center">
          <!-- 類神經或是多項式計算 -->
          <!-- <div class="col-sm-11 mt-2">
            <select
              class="form-select text-center fw-bold border border-1 border-dark rounded"
              id="selectnew"
              @change="choseone()"
            >
              <option value="1">類神經預測</option>
              <option value="2">多項式計算</option>
            </select>
          </div> -->

          <!-- 非線性類神經 溫控點選單 || 線性熱伸長 溫控點選單 -->
          <div class="col-sm-11 mt-2" v-show="index56Mode === 0">
            <select
              class="form-select text-center fw-bold border border-1 border-dark rounded"
              id="selecttwo"
              @change="choseone()"
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
        </div>
      </div>

      <!-- 資訊欄內容 -->
      <div class="col-sm-12 m-1 justify-content-center">
        <div class="row my-3 shadow-sm bg-white rounded p-2 border border-1">
          <h5>
            <i class="bi bi-clipboard-data"></i>
            主軸X方向平移量：
            <span class="fs-3 fw-light">{{ xtemp }}</span>
          </h5>
        </div>
        <div class="row my-3 shadow-sm bg-white rounded p-2 border border-1">
          <h5>
            <i class="bi bi-clipboard-data"></i>
            主軸Y方向平移量：
            <span class="fs-3 fw-light"> {{ ytemp }}</span>
          </h5>
        </div>
        <div class="row my-3 shadow-sm bg-white rounded p-2 border border-1">
          <h5>
            <i class="bi bi-clipboard-data"></i>
            主軸Z方向伸長量：
            <span class="fs-3 fw-light"> {{ ztemp }} </span>
          </h5>
        </div>
        <div class="row my-3 shadow-sm bg-white rounded p-2 border border-1">
          <h5>
            <i class="bi bi-clipboard-data"></i>
            主軸X方向傾斜量：
            <span class="fs-3 fw-light"> {{ main_xtemp }} </span>
          </h5>
        </div>
        <div class="row my-3 shadow-sm bg-white rounded p-2 border border-1">
          <h5>
            <i class="bi bi-clipboard-data"></i>
            主軸Y方向傾斜量：
            <span class="fs-3 fw-light"> {{ main_ytemp }} </span>
          </h5>
        </div>
      </div>

      <!-- 按鈕欄 -->
      <div class="col-sm-11 mx-2 text-center">
        <button
          id="table_button"
          type="button"
          class="btn btn-primary"
          style="height: 45px; width: 100%"
        >
          顯示/隱藏多項式表格
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted, onUnmounted, ref } from "vue";
import { getIndex56PageHandle } from "@/composition-api/getIndex56PageHandle.js";

export default {
  setup() {
    const { index56Mode, changeIndex56Select } = getIndex56PageHandle();
    const ip = "http://127.0.0.1:3000";

    let xtemp = ref(0);
    let ytemp = ref(0);
    let ztemp = ref(0);
    let main_ytemp = ref(0);
    let main_xtemp = ref(0);
    let title = ref("熱平衡");

    // 選擇列宣告
    // let selectOne;
    let selectTwo;
    // let selectOneVal;
    let selectTwoVal;

    //判斷選擇線性或非線性
    function choseone() {

      //判斷 線性補償熱平衡補償/類神經熱平衡控制 以HTML的select.value判斷
      // selectOne: 線性補償1 || 類神經預測2
      // selectTwo: 熱平衡溫控點1~10 || 熱伸長xyz軸向
      // console.log(
      //   "選擇資訊" + " selectTwo:" + selectTwoVal
      // );
        selectTwo = document.getElementById("selecttwo"); // 取得 溫控點1～10 元素
        selectTwoVal = selectTwo.options[selectTwo.selectedIndex].value; // 溫控點1～10
        changeIndex56Select(selectTwoVal);
    }

    // 抓取熱伸長的平移量、伸長量 & 熱平衡的偏移量
    function get_x() {
      $.ajax({
        url: "" + ip + "/api/bending", //存取Json的網址
        type: "GET",
        dataType: "json",
        success: function (data) {
          xtemp.value = data[0].x_bending.toFixed(3) + "µm";
          ytemp.value = data[0].y_bending.toFixed(3) + "µm";
          ztemp.value = data[0].z_bending.toFixed(3) + "µm";
          main_xtemp.value = "0.000µm";
          main_ytemp.value = data[0].main_y.toFixed(3) + "µm";
          // console.log(data)
        },
      });
    }

    onMounted(() => {
      choseone();
      get_x();
    });

    let timer = setInterval(() => {
      get_x();
    }, 2000);

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      get_x,
      choseone,
      xtemp,
      ytemp,
      ztemp,
      main_xtemp,
      main_ytemp,
      index56Mode,
      title,
    };
  },
};
</script>

<style scoped></style>
