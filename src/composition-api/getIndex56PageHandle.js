import { computed } from "vue";
import { useStore } from "vuex";

export function getIndex56PageHandle() {
  const store = useStore();

  const index56Mode = computed(() => store.getters.index56Mode);
  const index56Select = computed(() => store.getters.index56Select);

  const changeIndex56Mode = (index56Mode) => {
    store.dispatch("changeIndex56Mode", index56Mode);
  };
  const changeIndex56Select = (index56Select) => {
    store.dispatch("changeIndex56Select", index56Select);
  };

  return {
    index56Mode,
    changeIndex56Mode,
    index56Select,
    changeIndex56Select,
  };
}
