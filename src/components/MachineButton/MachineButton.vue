<template src="./template.html"></template>

<script>
import { getHistoryHandle } from "@/composition-api/getMachineHistoryHandle";

export default {
  name: "MachineButton",
  props: {
    infoTitle: {
      type: String,
      require: true,
    },
    buttonId: {
      type: Number,
      require: true,
    },
    dataType: {
      type: String,
      require: true,
    },
    unitType: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const { renewMachineInfoValue, machineAll } = getHistoryHandle();
    const disableHandler = (id) => {
      if (id == 10) {
        return true;
      }
    };
    const test = () => {
      // console.log(props.unitType);
      let machineInfo = {
        infoTitle: props.infoTitle,
        buttonId: props.buttonId,
        dataType: props.dataType,
        unitType: props.unitType,
      };
      renewMachineInfoValue(machineInfo);
    };
    return { disableHandler, test, machineAll };
  },
};
</script>

<style scoped>
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
</style>
