<template>
  <HeadComponent />
  <div class="container-sm">
    <div class="row">
      <!-- 左半部 -->
      <SettingInfoLeft />
      <!-- 右半部 table+chart -->
      <SettingInfoRight />
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/header/HeadComponent.vue";
import SettingInfoLeft from "@/components/index5&6/SettingInfoLeft/SettingInfoLeft.vue";
import SettingInfoRight from "@/components/index5&6/SettingInfoRight/SettingInfoRight.vue";
import { getIndex56PageHandle } from "@/composition-api/getIndex56PageHandle.js";

export default {
  name: "Index6View",
  components: {
    HeadComponent,
    SettingInfoLeft,
    SettingInfoRight,
  },
  setup() {
    const { index56Page, changeIndex56Page } = getIndex56PageHandle();
    changeIndex56Page(6);
    return { index56Page };
  },
};
</script>

<style lang="scss" scoped></style>
