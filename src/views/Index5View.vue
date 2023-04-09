<template>
  <HeadComponent />
  <div class="container-lg">
    <div class="row">
      <!-- 左半部 -->
      <SettingInfoLeft />
      <!-- 右半部 table+chart -->
      <SettingInfoRight />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import HeadComponent from "@/components/header/HeadComponent.vue";
import SettingInfoLeft from "@/components/index5&6/SettingInfoLeft/SettingInfoLeft.vue";
import SettingInfoRight from "@/components/index5&6/SettingInfoRight/SettingInfoRight.vue";
import { getIndex56PageHandle } from "@/composition-api/getIndex56PageHandle.js";

export default {
  name: "Index5View",
  components: {
    HeadComponent,
    SettingInfoLeft,
    SettingInfoRight,
  },
  setup() {
    const { index56Mode, changeIndex56Mode } = getIndex56PageHandle();

    //取得現在預測模式
    function getMopsoState() {
      $.ajax({
        url: "http://127.0.0.1:3000/api/get_mopso_check_state",
        type: "GET",
        dataType: "json",
        async: true,
        success: function (mopsoData) {
          var nowMode = mopsoData[0].polynomial_or_bpnn_model;
          if (nowMode === 1) {
            // 類神經
            changeIndex56Mode(1);
            console.log("類神經模式 熱平衡頁面");
          } else if (nowMode === 0) {
            // 多項式
            changeIndex56Mode(0);
            console.log("多項式模式 熱伸長頁面");
          }
          console.log("DB數值為:" + nowMode);
          console.log("Store數值為:" + index56Mode.value);
        },
      });
    }

    getMopsoState();

    return { index56Mode };
  },
};
</script>

<style lang="scss" scoped></style>
