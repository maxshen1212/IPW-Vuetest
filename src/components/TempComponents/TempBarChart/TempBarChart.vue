<template src="./template.html"></template>
<script>
import * as echarts from "echarts";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "TempbarChar",
  props: {
    parentTempData: {
      type: Array,
      require: true,
    },
    parentTempOption: {
      type: Object,
      require: true,
    },
  },
  setup(props) {
    const myRef = ref(); // 獲取dom，並實例化
    let barChart; //宣告圖表 全域變數
    let barOption; //宣告圖表設定 全域變數

    // 圖表渲染方法
    const renderChart = () => {
      // echarts初始化
      barChart = echarts.init(myRef.value);

      // 圖表設定
      barOption = ref({
        tooltip: {
          valueFormatter: (value) => value + "℃",
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top:"15%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              props.parentTempOption.type + "1",
              props.parentTempOption.type + "2",
              props.parentTempOption.type + "3",
              props.parentTempOption.type + "4",
              props.parentTempOption.type + "5",
              props.parentTempOption.type + "6",
              props.parentTempOption.type + "7",
              props.parentTempOption.type + "8",
              props.parentTempOption.type + "9",
              props.parentTempOption.type + "10",
            ],
            axisTick: {
              show: false,
              alignWithLabel: true,
            },
            axisLabel: {
              fontSize: 14,
            },
            axisLine: {
              lineStyle: {
                color: "#000000",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "℃",
            nameTextStyle: {
              fontSize: 18,
            },
            axisLabel: {
              fontSize: 16,
              fontFamily: "Consolas",
            },
          },
        ],
        series: [
          {
            name: "溫度",
            type: "bar",
            barWidth: "60%",
            showBackground: true,
            label: {
              show: true,
              position: "insideTop",
              fontSize: 12,
              color: "#555",
              fontWeight: "bold",
              formatter: "{c} ℃",
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: props.parentTempOption.color1 },
                { offset: 0.7, color: props.parentTempOption.color2 },
                { offset: 1, color: props.parentTempOption.color3 },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: props.parentTempOption.color4 },
                  { offset: 0.7, color: props.parentTempOption.color5 },
                  { offset: 1, color: props.parentTempOption.color6 },
                ]),
              },
            },
            data: [],
          },
        ],
      });

      // 溫度數據設定
      for (var i = 0; i < 10; i++) {
        const sqldata = props.parentTempData;
        barOption.value.series[0].data[i] = sqldata[i];
      }
      // 執行設定
      barChart.setOption(barOption.value);

      // 多個圖表 執行自適應大小
      window.addEventListener("resize", () => {
        barChart.resize(); // 自适应大小
      });

      // 單個圖表 執行自適應大小
      // window.onresize = function () {
      //   barChart.resize(); // 自适应大小
      // };
    };

    let timer;
    // 生命周期挂载函数
    onMounted(() => {
      renderChart();
      timer = setInterval(() => {
        for (var i = 0; i < 10; i++) {
          let sqldata = props.parentTempData;
          barOption.value.series[0].data[i] = sqldata[i];
        }
        barChart.setOption(barOption.value);
      }, 1000);
    });

    // 卸载页面销毁
    onBeforeUnmount(() => {
      // 單個圖表自適應大小關閉
      // window.onresize = null;
      removeEventListener("resize", () => {
        barChart.resize(); // 自适应大小
      });
      clearInterval(timer);
    });

    // 添加監視器更新圖表(要加'()=>')
    // watch(
    //   () => props.parentTempData,
    //   () => {
    //     for (var i = 0; i < 10; i++) {
    //       let sqldata = props.parentTempData;
    //       barOption.value.series[0].data[i] = sqldata[i];
    //     }
    //     barChart.setOption(barOption.value);
    //   }
    // );

    return {
      myRef,
    };
  },
};
</script>
<style scoped></style>
