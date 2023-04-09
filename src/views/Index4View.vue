<template>
  <div>
    <HeadComponent />
  </div>
  <div class="container-lg">
    <div class="row g-2">
      <!-- 左半部 -->
      <div class="col-lg p-3">
        <!-- 溫度履歷與匯出資訊 -->
        <div class="row gx-2">
          <h3>溫度履歷與匯出資訊</h3>
          <!-- 時間 -->
          <div class="col-lg-12 border border-2 border-dark rounded p-3">
            <h5><i class="bi bi-clipboard2-data"></i> 本次紀錄資料範圍</h5>
            <hr />
            <div class="row justify-content-center text-center m-1">
              <div class="col-lg-5">
                <h5 id="rec_start_time" class="fw-light"></h5>
              </div>
              <div class="col-lg-1">
                <h5>></h5>
              </div>
              <div class="col-lg-5">
                <h5 id="rec_stop_time" class="fw-light"></h5>
              </div>
            </div>
          </div>
        </div>
        <br />
        <!-- 匯出資料範圍選擇 -->
        <div class="row gx-2">
          <h3>匯出資料範圍選擇</h3>
          <!-- 時間選擇 -->
          <div class="col-lg-12 border border-2 border-dark rounded p-3">
            <h5 class="ms-1 mb-3">
              <i class="bi bi-calendar2-check"></i> 選擇開始與結束時間
            </h5>
            <div class="row m-1 justify-content-center">
              <input
                type="text"
                class="form-control text-center fs-5"
                name="datetimes"
                id="demo"
                autocomplete="off"
              />
            </div>
            <div class="row m-1 justify-content-end mt-2">
              <button
                type="button"
                class="btn btn-outline-primary w-25"
                id="demo2"
                @click="exportfile"
              >
                匯出資料
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 右半部 -->
      <div class="col-lg p-3">
        <div class="row gx-2">
          <!-- title 溫度履歷與匯出資訊 -->
          <div class="col-lg-12">
            <h3>溫度履歷資訊</h3>
          </div>

          <div class="col-lg-12 border border-2 border-dark rounded p-3">
            <!-- 名稱 -->

            <h5 class="mb-3">
              <i class="bi bi-file-earmark-medical"></i> 檔案名稱
            </h5>
            <hr />
            <div
              class="col-lg-12"
              style="height: 272px; overflow-y: scroll; display: block"
            >
              <table class="table table-striped table-hover">
                <thead>
                  <tr class="table-dark">
                    <th scope="col-lg">#</th>
                    <th scope="col-lg">檔案目錄</th>
                    <th scope="col-lg">下載</th>
                    <th scope="col-lg">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(i, index) in fileData" v-bind:key="i">
                    <th scope="row" class="align-bottom">
                      <h5>{{ index + 1 }}.</h5>
                    </th>
                    <td class="align-middle p-0">
                      {{ i }}
                    </td>
                    <!-- 下載 -->
                    <td>
                      <a @click="downloadFile(i)">
                        <button type="button" class="btn btn-primary btn-sm">
                          <h6 class="m-0">下載</h6>
                        </button>
                      </a>
                    </td>
                    <!-- 刪除 -->
                    <td>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        @click="deletefile(i)"
                      >
                        <h6 class="m-0">刪除</h6>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/header/HeadComponent.vue";
import $ from "jquery";
import moment from "moment";
import "daterangepicker";
import "daterangepicker/daterangepicker.css";
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  name: "Index4View",
  components: {
    HeadComponent,
  },
  setup() {
    // 下载TXT文件 ***重要***
    function downloadFile(fileName) {
      const url = "http://127.0.0.1:3000/api/download_recdata";
      axios
        .get(url, { params: { x: fileName } })
        .then((response) => {
          console.log(response.data);
          const blob = new Blob([response.data]);
          const link = document.createElement("a");
          // 将链接地址字符内容转变成blob地址
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);

      // axios
      //   .get(url, { responseType: "blob" })
      //   .then((response) => {
      //     const blob = new Blob([response.data], { type: "application/txt" });
      //     const link = document.createElement("a");
      //     link.href = URL.createObjectURL(blob);
      //     link.download = label;
      //     link.click();
      //     URL.revokeObjectURL(link.href);
      //   })
      //   .catch(console.error);
    }
    // 時間選擇器
    function timeSelect() {
      $("#demo").daterangepicker({
        timePicker: true,
        startDate: moment().startOf("hour"),
        endDate: moment().startOf("hour"),
        drops: "down",
        timePicker24Hour: true,
        timePickerSeconds: true,
        locale: { format: "YYYY/MM/DD HH:mm:ss" },
      }),
        $("#demo").on("change.datepicker", function (ev) {
          var picker = $(ev.target).data("daterangepicker");
          // console.log(picker.startDate);
          // console.log(picker.endDate);
          return picker;
        });
    }

    // 取得紀錄時間與狀態
    function getRecordTime() {
      $.ajax({
        url: "http://127.0.0.1:3000/api/Rec_Time", //存取Json的網址
        type: "GET",
        dataType: "json",
        //contentType: "application/json",
        success: function (data) {
          var start_time = new Date(data[0].rec_start_datetime);
          var stop_time = new Date(data[0].rec_stop_datetime);
          console.log(stop_time);
          $("#rec_start_time").text(start_time.toLocaleString());
          if (data[0].recpb == 1) {
            $("#rec_stop_time").text("紀錄中");
          } else {
            $("#rec_stop_time").text(stop_time.toLocaleString());
          }
        },
      });
    }

    // 匯出資料庫
    function exportfile() {
      const time = $("#demo").val();
      const sptime = time.split("-");
      const startdatetime = sptime[0];
      const enddatetime = sptime[1];
      //console.log(startdatetime);
      //console.log(enddatetime);
      alert("請等待檔案匯出完成，完成後會跳出視窗提醒");
      $.ajax({
        type: "GET",
        data: { x: startdatetime, y: enddatetime },
        url: "http://127.0.0.1:3000/api/rec_data",
        complete: function () {
          // $.unblockUI;
          alert("記錄檔產生完成");
          getRecordFile();
        },
      });
    }

    // 刪除記錄檔
    function deletefile(filename) {
      $.ajax({
        type: "POST",
        data: { x: filename },
        url: "http://127.0.0.1:3000/api/delete_recdata",
        complete: function () {
          alert("刪除完成");
          getRecordFile();
        },
      });
    }

    const fileData = ref();
    // 顯示記錄檔案(新的在前)
    function getRecordFile() {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://127.0.0.1:3000/api/get_recdata",
        success: function (data) {
          fileData.value = data.reverse();
        },
      });
    }

    // 匯出資料時鎖定頁面功能
    // function jqueryBlockUI() {
    //   $.blockUI({
    //     css: {
    //       border: "none",
    //       padding: "15px",
    //       backgroundColor: "#000",
    //       "-webkit-border-radius": "10px",
    //       "-moz-border-radius": "10px",
    //       opacity: 0.5,
    //       color: "#fff",
    //     },
    //   });
    // }

    onMounted(() => {
      getRecordFile();
      timeSelect();
      getRecordTime();
    });

    return {
      downloadFile,
      exportfile,
      deletefile,
      fileData,
    };
  },
};
</script>

<style scoped></style>
