<template>
  <HeadComponent />
  <div class="container-lg">
    <div class="row justify-content-center">
      <!-- 機台資訊按鈕 -->
      <div class="col-12 col-lg-10 mt-2">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <MachineButton v-for="i in machineMenu" :key="i.buttonId" :="i" />
        </div>
      </div>
      <!-- chart -->
      <div class="col-12 col-lg-10 mt-4">
        <MachineLineChart :parentInfo="machineInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/header/HeadComponent.vue";
import MachineButton from "@/components/MachineButton/MachineButton.vue";
import MachineLineChart from "@/components/MachineLineChart/MachineLineChart.vue";
import { getHistoryHandle } from "@/composition-api/getMachineHistoryHandle";

export default {
  name: "Index3View",
  components: {
    HeadComponent,
    MachineButton,
    MachineLineChart,
  },
  setup() {
    const machineMenu = [
      {
        buttonId: 1,
        infoTitle: "主軸轉速",

        dataType: "spindle_speed",
        unitType: "rpm",
      },
      {
        buttonId: 2,
        infoTitle: "電流值",

        dataType: "current",
        unitType: "%",
      },
      {
        buttonId: 3,
        infoTitle: "電壓值",

        dataType: "voltage",
        unitType: "V",
      },
      {
        buttonId: 4,
        infoTitle: "馬達溫度",

        dataType: "power",
        unitType: "℃",
      },
      {
        buttonId: 5,
        infoTitle: "速度增益",
        dataType: "speed_loop_feedback",
        unitType: "value",
      },

      {
        buttonId: 6,
        infoTitle: "位置增益",
        dataType: "position_loop_feedback",
        unitType: "rad/s",
      },

      {
        buttonId: 7,
        infoTitle: "彈簧常數",
        dataType: "spring_constant",
        unitType: "0.01%/um",
      },

      {
        buttonId: 8,
        infoTitle: "黏性係數",
        dataType: "viscosity_coefficient",
        unitType: "0.01%‧s/mm",
      },

      {
        buttonId: 9,
        infoTitle: "象限補正",
        dataType: "quadrant_protrusion_correction",
        unitType: "%",
      },

      {
        buttonId: 10,
        infoTitle: "加工時間",
        dataType: "machine_processing_time",
        unitType: "hh:mm:ss",
      },
    ];
    const { machineInfo, renewMachineInfoValue } = getHistoryHandle();
    let init = {
      buttonId: 1,
      infoTitle: "主軸轉速",
      dataType: "spindle_speed",
      unitType: "rpm",
    };
    renewMachineInfoValue(init);
    // console.log(machineInfo.value);
    return {
      machineMenu,
      machineInfo,
    };
  },
};
</script>

<style scoped>
button {
  width: 180px;
  height: 100px;
}
.btn-lg {
  color: black;
  border: 2px solid #bba5f1;
  background: white;
}

.btn-lg:hover {
  background-image: linear-gradient(
    to right,
    #9262c9 0%,
    #bcaaeb 51%,
    #8175ea 99%
  );
  background-position: right center; /* change the direction of the change here */
  transition: 0.6s;
  background-size: 200% auto;
  color: rgb(84, 82, 82) !important;
}

h2 {
  text-transform: uppercase;
  background: linear-gradient(to bottom, #8d8b8b 0%, #1f1f20 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

body {
  background: whitesmoke;
}
</style>
