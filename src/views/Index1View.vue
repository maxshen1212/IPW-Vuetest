<template>
  <ModalComponent />
  <!-- 內容 -->
  <div class="container-lg">
    <HeadComponent />
    <div class="row row-cols-lg-2">
      <!-- 左半部 -->
      <div class="col-12 col-lg">
        <!-- 溫感 chart -->
        <h1 class="text-center fs-4">溫度感知點 即時溫度</h1>
        <TempBarChart
          v-bind:parentTempData="tempMeasure"
          v-bind:parentTempOption="tempOption1"
          style="width: 100%; height: 270px"
          class="shadow rounded bg-white p-0"
        />
        <br>
        <!-- 溫控 chart -->
        <h1 class="text-center fs-4">溫度控制點 即時溫度</h1>
        <TempBarChart
          v-bind:parentTempData="tempControl"
          v-bind:parentTempOption="tempOption2"
          style="width: 100%; height: 270px;"
          class="shadow rounded bg-white p-0"
        />
      </div>
      <!-- 右半部 -->
      <div class="col-12 col-lg mt-lg-0 mt-4">
        <!-- 溫度總覽 -->
        <div class="row text-center">
          <h1 class="fs-4">溫度總覽</h1>
        </div>
        <!-- 第一排 -->
        <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-3">
          <TempButton :buttonId="1" />
          <TempButton :buttonId="2" />
          <TempButton :buttonId="3" />
          <TempButton :buttonId="4" />
          <TempButton :buttonId="5" />
        </div>
        <!-- 第二排 -->
        <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-3">
          <TempButton :buttonId="6" />
          <TempButton :buttonId="7" />
          <TempButton :buttonId="8" />
          <TempButton :buttonId="9" />
          <TempButton :buttonId="10" />
        </div>
        <!-- 第三排 -->
        <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-3">
          <TempButton :buttonId="11" />
          <TempButton :buttonId="12" />
          <TempButton :buttonId="13" />
          <TempButton :buttonId="14" />
          <TempButton :buttonId="15" />
        </div>
        <!-- 第四排 -->
        <div class="row row-cols-5 row-cols-lg-5 g-2 g-lg-3">
          <TempButton :buttonId="16" />
          <TempButton :buttonId="17" />
          <TempButton :buttonId="18" />
          <TempButton :buttonId="19" />
          <TempButton :buttonId="20" />
        </div>
        <!-- 溫度線圖 -->
        <div class="row">
          <TempLineChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/header/HeadComponent.vue";
import TempBarChart from "@/components/TempComponents/TempBarChart/TempBarChart.vue";
import TempLineChart from "@/components/TempComponents/TempLineChart/TempLineChart.vue";
import TempButton from "@/components/TempComponents/TempButton/TempButton.vue";
import ModalComponent from "@/components/Modal/modalComponent.vue";

// import TestComponent from "@/components/testCoponent.vue";

import { getTempHandle } from "@/composition-api/getTempHandle";
import { onBeforeUnmount, onMounted, reactive } from "vue";
export default {
  name: "Index1View",
  components: {
    HeadComponent,
    TempBarChart,
    TempLineChart,
    TempButton,
    ModalComponent
    // TestComponent,
  },
  setup() {
    // 溫度資料Module
    const { tempMeasure, tempControl, renewTempData } = getTempHandle();
    renewTempData();
    // 圖表外觀設定
    const tempOption1 = reactive({
      type: "溫感",
      color1: "#FBAB7E",
      color2: "#FBAB7E",
      color3: "#F7CE68",
      color4: "#FBAB7E",
      color5: "#FF9A8B",
      color6: "#F85199",
    });
    const tempOption2 = reactive({
      type: "溫控",
      color1: "#81D4FA",
      color2: "#29B6F6",
      color3: "#2AF598",
      color4: "#81D4FA",
      color5: "#BA68C8",
      color6: "#CC33FF",
    });

    // 定時器變數
    let timer;
    // 元件載入完畢
    onMounted(async () => {
      await renewTempData();
      // console.log(tempMeasure.value);
      // console.log(tempControl.value);

      console.log("Start renew temp data!");
      timer = setInterval(() => {
        renewTempData();
      }, 500);
    });
    // 元件卸載完畢
    onBeforeUnmount(() => {
      clearInterval(timer);
      console.log("Stop renew temp data!");
    });

    return {
      tempMeasure,
      tempControl,
      tempOption1,
      tempOption2,
    };
  },
};
</script>

<style scoped></style>
