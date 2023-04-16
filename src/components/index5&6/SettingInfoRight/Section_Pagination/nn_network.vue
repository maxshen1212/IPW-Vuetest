<template>
  <h3 class="text-center mb-3">類神經模型選擇器</h3>
  <!-- 上傳模型 -->
  <div class="container-lg">
    <div class="row mb-1">
      <h6>上傳模型</h6>
    </div>
    <div class="row">
      <div class="col-9">
        <input
          type="file"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          class="form-control shadow-sm"
          aria-label="Upload"
          accept=".h5"
        />
      </div>
      <div class="col-3">
        <button
          class="btn btn-secondary shadow-sm"
          type="button"
          id="inputGroupFileAddon04"
          @click="uploadMode()"
        >
          上傳
        </button>
      </div>
    </div>
  </div>
  <!-- 模型選擇 -->
  <div class="container-lg mt-3" id="container2">
    <!-- title -->
    <div class="row">
      <h6>模型名稱</h6>
    </div>
    <div class="row" id="showdata">
      <!-- 模型名稱 -->
      <div class="col-12 pb-1 ms-3">
        <div class="row fs-5 lead" id="use_module_name">目前使用模型：</div>
      </div>
      <!-- 模型選擇 -->
      <div class="col-12" style="height: 330px">
        <table
          class="table table-hover scrollbar border border-1 border-dark rounded shadow"
          id="network_father"
          style="overflow-y: scroll; display: block; height: 100%"
        >
          <tbody id="network_name" v-for="(i, index) in aiModle" :key="i">
            <tr>
              <!-- 點擊 -->
              <td class="align-middle col-11" @click="choose(i, index)">
                {{ i }}
              </td>
              <!-- 刪除 -->
              <td class="col-1 pe-3">
                <a
                  type="button"
                  class="btn btn-outline-danger"
                  @click="choose_delete(i, index)"
                >
                  <i class="bi bi-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let aiModle = ref();
    const ip = "http://127.0.0.1:3000";

    function choose_delete(modleName, index) {
      let file_name = modleName;
      $.ajax({
        type: "POST",
        data: { x: file_name },
        url: "" + ip + "/api/delete_nn_module",
        complete: function () {
          aiModle.value.splice(index, 1);
          console.log(aiModle.value);
          alert("刪除完成");
        },
      });
    }

    function Append_module(file_name) {
      aiModle.value.push(file_name);
      made_table();
    }

    function made_table() {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "" + ip + "/api/file_length",
        success: function (data) {
          aiModle.value = data;
        },
      });
    }

    function choose(modleName) {
      let use_name = "目前使用模型：" + modleName;
      let change_name = document.getElementById("use_module_name");
      alert("已選擇" + modleName + "模型");
      change_name.innerHTML = use_name;
      let alldata = {
        file_name: modleName,
      };
      // console.log(use)
      $.ajax({
        type: "put",
        data: alldata,
        url: "" + ip + "/api/upload_path",
        complete: function () {
          console.log("上傳成功");
          $("#check_model").prop("disabled", false);
        },
      });
    }

    function get_now_AiModle() {
      let now_module_name = document.getElementById("use_module_name");
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "" + ip + "/api/now_module",
        success: function (data) {
          let now_path = data[0].module_name;
          const [check] = now_path.split("/").reverse();
          now_module_name.innerText = "目前使用模型：" + check;
          if (check === "") {
            $("#check_model").prop("disabled", true);
          } else {
            $("#check_model").prop("disabled", false);
          }
        },
      });
    }

    function uploadMode() {
      var file_data = $("#inputGroupFile04").prop("files")[0]; //取得上傳檔案屬性
      var form_data = new FormData(); //建構new FormData()
      form_data.append("file", file_data); //把物件加到file後面
      let check_file_name = file_data.name;
      const [check] = check_file_name.split(".").reverse();
      // check_repeat()
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "" + ip + "/api/file_length",
        success: function (data) {
          //檢查檔案 若沒問題則上傳檔案
          let boolean = false;
          // console.log(data, "ads");
          // console.log(Object.values(data)[0], "asdsa");
          for (let i = 0; i < data.length; i++) {
            if (check_file_name === Object.values(data)[i]) {
              boolean = true;
              break;
            } else {
              boolean = false;
              continue;
            }
          }
          console.log("檔名是否重複：" + boolean);
          if (check === "h5" && boolean === false) {
            $.ajax({
              url: "" + ip + "/api/upload_nn_file",
              cache: false,
              contentType: false,
              processData: false,
              data: form_data, //data只能指定單一物件
              type: "post",
              success: function (data) {
                Append_module(data.file);
                alert("file upload sucess");
              },
            });
          } else {
            alert("副檔名錯誤或是檔案重複");
          }
        },
      });
    }

    onMounted(() => {
      made_table();
      get_now_AiModle();
    });

    return {
      choose_delete,
      choose,
      uploadMode,
      aiModle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
