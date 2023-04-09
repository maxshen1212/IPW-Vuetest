import { computed } from "vue";
import { useStore } from "vuex";

export function getHistoryHandle() {
  const store = useStore();

  const machineAll = computed(() => store.getters.machineAll);
  const machineHistory = computed(() => store.getters.machineHistory);
  const machineInfo = computed(() => store.getters.machineInfo);



  const renewMachineValue = async () => {
    await store.dispatch("renewMachineValue");
  };
  const renewMachineHistory = async (dataType) => {
    await store.dispatch("renewMachineHistory", dataType);
  };
  const renewMachineInfoValue =  (machineInfo) => {
     store.dispatch("renewMachineInfoValue", machineInfo);
  };

  return {
    machineAll,
    machineHistory,
    machineInfo,
    renewMachineValue,
    renewMachineHistory,
    renewMachineInfoValue
  };
}
