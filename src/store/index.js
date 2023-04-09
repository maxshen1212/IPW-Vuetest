import { createStore } from "vuex";
import {
  apiTempAll,
  apiTempHistory,
  apimMachineAll,
  apiMachineHistory,
} from "../api-Index";

export default createStore({
  state: {
    // 全部溫度值
    tempAll: [],
    // 溫度記錄歷史資料 **length:300**
    tempHistory: [],
    // 溫控點期望溫度
    tempPredict: [],
    // 溫度通道狀態
    // tempState: [],
    // 類神經預測狀態
    // mopsoState: true,
    // 按鈕選擇狀態(抓取溫度歷史資料index)
    buttonState: 1,
    // 全部機台資訊值
    machineAll: [],
    // 機台資訊記錄歷史資料 **length:300**
    machineHistory: [],
    // 機台按鈕的資訊欄位
    machineInfo: [{}],
    index56Mode: 1,
    index56Select: 1,
  },
  getters: {
    tempAll: (state) => state.tempAll,
    tempMeasure: (state) => {
      let temp = [];
      for (let i = 0; i < 10; i++) {
        temp[i] = state.tempAll[i];
      }
      // console.log(temp)
      return temp;
    },
    tempControl: (state) => {
      let temp = [];
      for (let i = 0; i < 10; i++) {
        temp[i] = state.tempAll[i + 10];
      }
      // console.log(temp)
      return temp;
    },
    tempPredict: (state) => state.tempPredict,
    tempHistory: (state) => state.tempHistory,
    // tempState: (state) => state.tempState,
    // mopsoState: (state) => state.mopsoState,
    buttonState: (state) => state.buttonState,
    machineAll: (state) => state.machineAll,
    machineHistory: (state) => state.machineHistory,
    // 機台按鈕的資訊欄位
    machineInfo: (state) => state.machineInfo,
    index56Mode: (state) => state.index56Mode,
    index56Select: (state) => state.index56Select,
  },
  mutations: {
    // 更新溫度資料
    SET_TEMP_ALL_VALUE(state, tempAll) {
      state.tempAll = tempAll;
    },
    SET_TEMP_HISTORY_VALUE(state, tempHistory) {
      state.tempHistory = tempHistory;
    },
    SET_BUTTON_STATE(state, buttonId) {
      state.buttonState = buttonId;
    },
    // 機台全部資料
    SET_MACHINE_ALL_VALUE(state, machineAll) {
      state.machineAll = machineAll;
    },
    // 機台歷史資料
    SET_MACHINE_HISTORY_VALUE(state, machineHistory) {
      state.machineHistory = machineHistory;
    },
    // 當前機台按鈕獲得資訊欄位
    SET_MACHINE_INFO_VALUE(state, machineInfo) {
      state.machineInfo = machineInfo;
    },
    SET_INDEX56_VALUE(state, index56Mode) {
      state.index56Mode = index56Mode;
    },
    SET_INDEX56_SELECT(state, index56Select) {
      state.index56Select = index56Select;
    },
  },
  actions: {
    // GET DB溫度資料
    async renewTempValue({ commit }) {
      // console.log(apiTempAll())
      await apiTempAll()
        .then((response) => {
          // console.log(response);
          commit("SET_TEMP_ALL_VALUE", response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // GET 溫控||溫感 記錄溫度
    async renewTempHistory({ commit }, buttonId) {
      let sqlIndex = "error";
      if (buttonId <= 10) {
        sqlIndex = "tt" + buttonId;
      } else {
        sqlIndex = "tc" + (buttonId - 10);
      }
      await apiTempHistory(sqlIndex)
        .then((response) => {
          // console.log(response);
          commit("SET_TEMP_HISTORY_VALUE", response);
        })
        .catch((error) => {
          console.log("renewHistoryData() error!" + error);
        });
    },
    // UPDATE 溫度按鈕狀態
    handleButtonState({ commit }, buttonId) {
      commit("SET_BUTTON_STATE", buttonId);
    },
    async renewMachineValue({ commit }) {
      // console.log(apiTempAll())
      await apimMachineAll()
        .then((response) => {
          // console.log(response);
          commit("SET_MACHINE_ALL_VALUE", response);
        })
        .catch((error) => {
          console.error("renewMachineValue() error!" + error);
        });
    },
    async renewMachineHistory({ commit }, dataType) {
      await apiMachineHistory(dataType)
        .then((response) => {
          // console.log(response);
          commit("SET_MACHINE_HISTORY_VALUE", response);
        })
        .catch((error) => {
          console.error("renewHistoryData() error!" + error);
        });
    },
    renewMachineInfoValue({ commit }, machineInfo) {
      commit("SET_MACHINE_INFO_VALUE", machineInfo);
    },
    //index56更改
    changeIndex56Mode({ commit }, index56Mode) {
      commit("SET_INDEX56_VALUE", index56Mode);
    },
    changeIndex56Select({ commit }, index56Select) {
      commit("SET_INDEX56_SELECT", index56Select);
    },
  },
  modules: {},
});
