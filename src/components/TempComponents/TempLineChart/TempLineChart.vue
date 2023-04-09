<template src="./template.html"></template>

<script>
import * as echarts from "echarts";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { getHistoryHandle } from "@/composition-api/getHistoryHandle";

export default {
  name: "TempLineChar",
  setup() {
    const myRef = ref();
    let lineChart;
    let lineOption;
    const {
      tempAll,
      buttonState,
      tempHistory,
      renewTempHistory,
      renewTempData,
    } = getHistoryHandle();

    let tempTitle = ref("溫度感知1 數據曲線");
    const renderTitle = () => {
      if (buttonState.value <= 10) {
        tempTitle.value = "溫度感知" + buttonState.value + " 數據曲線";
      } else {
        tempTitle.value = "溫度控制" + (buttonState.value-10) + " 數據曲線";
      }
    };

    let timer;
    // 圖表渲染方法
    const renderChart = async () => {
      console.log("linechart render!");
      await renewTempHistory(buttonState.value);

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
        let tempText = "";
        if (buttonState.value <= 10) {
          tempText = "tt" + buttonState.value;
        } else {
          tempText = "tc" + (buttonState.value - 10);
        }

        //  暫定初始1,要再改
        let startvalue = tempHistory.value[i][tempText];
        return {
          name: now.toString(),
          value: [now.getTime(), Math.round(startvalue)],
        };
      }

      // 溫度方程式
      function Data() {
        now = new Date(+now + oneDay);
        value = tempAll.value[buttonState.value - 1];
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
            fontSize: 12,
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
            name: "溫度數據",
            type: "line",
            // showSymbol: false,
            // emphasis: false,
            data: data,
            color: "rgb(255, 170, 100)",
            lineStyle: { color: "rgb(255, 170, 100)" },
            areaStyle: { color: "rgb(247, 222, 201)" },
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

      //  變色
      if (buttonState.value > 10) {
        (lineOption.value.series[0].color = "#3a7bd5"),
          (lineOption.value.series[0].lineStyle.color = "#3a7bd5");
        lineOption.value.series[0].areaStyle.color = "#8ca6db";
        lineChart.setOption(lineOption.value);
      }

      lineChart.setOption(lineOption.value);
    };

    onMounted(async () => {
      await renewTempData();
      // console.log(tempAll.value);

      await renewTempHistory(buttonState.value);
      // console.log(tempHistory.value);

      renderChart();
      // console.log("linechart");

      renderTitle();
      //console.log(tempText)

      // setInterval(() => {
      //   console.log(buttonState.value);
      // }, 2000);
    });

    onBeforeUnmount(() => {
      // 單個圖表自適應大小關閉
      // window.onresize = null;
      removeEventListener("resize", () => {
        lineChart.resize(); // 自适应大小
      });
    });

    watch(
      () => buttonState.value,
      () => {
        renderChart();
        renderTitle();
      }
    );

    return {
      myRef,
      tempTitle,
    };
  },
};
</script>

<style scoped></style>
