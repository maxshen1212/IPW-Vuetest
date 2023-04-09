<template src="./template.html"> 

</template>

<script>
import { getHistoryHandle } from "@/composition-api/getHistoryHandle.js";
import { onMounted, ref } from "vue";

export default {
  name: "TempButton",
  props: {
    buttonId: {
      default: 1,
      type: Number,
      require: true,
    },
  },
  setup(props) {
    const { handleButtonState, renewTempData, tempAll } = getHistoryHandle();
    // console.log(props.buttonId);
    let tempType = "";
    let tempText = ref(props.buttonId);
    if (props.buttonId <= 10) {
      tempType = "感知";
    } else {
      tempType = "控制";
      tempText.value = props.buttonId - 10;
    }

    onMounted(async () => {
      await renewTempData();
    });

    return { tempType, handleButtonState, tempAll, tempText };
  },
};
</script>

<style scoped>
.orange:hover,
.orange:focus {
  background-image: linear-gradient(
    102.4deg,
    rgba(253, 189, 85, 0.15) 7.8%,
    rgba(249, 131, 255, 0.15) 100.3%
  );
  color: aqua;
}
.blue:hover,
.blue:focus {
  background-image: linear-gradient(
    109.6deg,
    rgba(61, 245, 167, 0.15) 11.2%,
    rgba(9, 111, 224, 0.15) 91.1%
  );
}
</style>
