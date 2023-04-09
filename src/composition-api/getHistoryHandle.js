import { computed } from "vue";
import { useStore } from "vuex";

export function getHistoryHandle() {
  const store = useStore();

  const tempAll = computed(() => store.getters.tempAll);
  const buttonState = computed(() => store.getters.buttonState);
  const tempHistory = computed(() => store.getters.tempHistory);

  const handleButtonState = (buttonId) => {
    store.dispatch("handleButtonState", buttonId);
  };
  const renewTempHistory = async (buttonId) => {
    await store.dispatch("renewTempHistory", buttonId);
    
  };
  const renewTempData = async () => {
    await store.dispatch("renewTempValue");
  };

  return {
    tempAll,
    buttonState,
    tempHistory,
    handleButtonState,
    renewTempHistory,
    renewTempData,
  };
}
