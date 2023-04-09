<template src="./template.html"></template>

<script>
import * as echarts from "echarts";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { getHistoryHandle } from "@/composition-api/getMachineHistoryHandle";

export default {
  name: "MachineLineChar",
  props: {
    parentInfo: {
      require: true,
    },
  },
  setup(props) {
    // setInterval(()=>{console.log(props.parentInfo)},1000)
    // console.log(props.parentInfo.buttonId);
    const myRef = ref();
    let lineChart;
    let lineOption;
    const {
      machineAll,
      machineHistory,
      // machineInfo,
      renewMachineValue,
      renewMachineHistory,
    } = getHistoryHandle();

    let tempTitle = ref(props.parentInfo.infoTitle);
    
    let timer;
    // 圖表渲染方法
    const renderChart = async () => {
      console.log("linechart render!");
      await renewMachineHistory(props.parentInfo.dataType);

      if (lineChart != null && lineChart != "" && lineChart != undefined) {
        lineChart.dispose();
        clearInterval(timer);
      }

      // echarts初始化
      lineChart = echarts.init(myRef.value);

      let data = [];
      // -150000是因為我們一開始先推出150個數字0，要把時間弄回來。
      let now = new Date() - 150000;
      // 1秒鐘
      let oneDay = 1000;

      // 可以算剛開始 推出歷史資料
      function initialData(i) {
        now = new Date(+now + oneDay);

        let startvalue = machineHistory.value[i][props.parentInfo.dataType];
        return {
          name: now.toString(),
          value: [now.getTime(), Math.round(startvalue)],
        };
      }

      // 溫度方程式
      function Data() {
        now = new Date(+now + oneDay);
        value = machineAll.value[props.parentInfo.buttonId - 1];
        // console.log(value);
        return {
          name: now.toString(),
          value: [now.getTime(), Math.round(value)],
        };
      }

      // 我們需要即時呈現溫度
      let value;
      // 規0階段 推出150個0
      for (let i = 0; i < 150; i++) {
        data.push(initialData(i));
      }

      lineOption = ref({
        // animationDuration: 3000,
        tooltip: {
          trigger: "axis",
          valueFormatter: (value) => value + "℃",
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
          name: "Time",
          splitNumber: 6,
          // 最大30秒最小10秒
          minInterval: 10 * 1000,
          maxInterval: 60 * 1000,
          nameTextStyle: {
            fontSize: 16,
            color: "#000000",
            fontWeight: "bolder",
          },
          axisLabel: {
            fontSize: 14,
            color: "#000000",
            fontFamily: "Consolas",
          },
          axisLine: {
            lineStyle: {
              color: "#1a5660",
              width: "3",
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: true,
          },
          splitNumber: 5,
          min: function (value) {
            return value.min;
          },
          max: function (value) {
            let maxValue = Math.round(value.max / 10) * 10;
            return maxValue;
          },
          name: "℃",
          nameTextStyle: {
            fontSize: 18,
            color: "#000000",
          },
          axisLabel: {
            fontSize: 16,
            color: "#000000",
            fontFamily: "Consolas",
          },
          axisLine: {
            lineStyle: {
              color: "#1a5660",
              width: "3",
            },
          },
        },
        grid: {
          left: 50,
          right: 70,
          top: 50,
          bottom: 40,
        },
        series: [
          {
            name: "機台資訊",
            type: "line",
            // showSymbol: false,
            // emphasis: false,
            data: data,
            lineStyle: { color: "#5321b7", width: 2.5 },
            areaStyle: { color: "#9688e8" },
          },
        ],
      });

      // 每秒更新資料和推掉更早的資料
      timer = setInterval(function () {
        data.shift();
        data.push(Data());
        lineChart.setOption({
          series: [
            {
              data: data,
            },
          ],
        });
      }, 1000);

      // 多個圖表 執行自適應大小
      window.addEventListener("resize", () => {
        lineChart.resize(); // 自适应大小
      });

      // 單個圖表 執行自適應大小
      // window.onresize = function () {
      //   barChart.resize(); // 自适应大小
      // };

      lineChart.setOption(lineOption.value);
    };

    onMounted(async () => {
      await renewMachineValue();
      await renewMachineHistory(props.parentInfo.dataType);
      renderChart();
    });

    onBeforeUnmount(() => {
      // 單個圖表自適應大小關閉
      // window.onresize = null;
      removeEventListener("resize", () => {
        lineChart.resize(); // 自适应大小
      });
    });

    watch(
      () => props.parentInfo.buttonId,
      () => {
        renderChart();
        tempTitle.value = props.parentInfo.infoTitle;
      }
    );

    return {
      myRef,
      tempTitle,
    };
  },
};
</script>

<style scoped>
#chartTitle {
  color: #2b1345;
  text-shadow: 5px 5px 2px #bba5f1;
}
</style>
