import { computed } from "vue";
import { useStore } from "vuex";

export function getTempHandle() {
  const store = useStore();

  const tempMeasure = computed(() => store.getters.tempMeasure);
  const tempControl = computed(() => store.getters.tempControl);

  const renewTempData = () => {
    store.dispatch("renewTempValue");
  };

  return { tempMeasure, tempControl, renewTempData };
}
