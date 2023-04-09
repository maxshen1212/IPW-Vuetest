<template>
  <h3 class="text-center mb-3" id="temptext"></h3>
  <!-- C table -->
  <div class="container-sm">
    <div class="row pb-2">
      <div class="col-sm text-center fs-5 fw-bold">多項式</div>
      <div class="col-sm text-center fs-5 fw-bold">係數值C</div>
      <div class="col-sm text-center fs-5 fw-bold">指數N</div>
    </div>
    <!-- 多項式-10 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T10^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa10"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq10"
        />
      </div>
    </div>
    <!-- 多項式-9 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T9^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa9"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq9"
        />
      </div>
    </div>
    <!-- 多項式-8 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T8^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa8"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq8"
        />
      </div>
    </div>
    <!-- 多項式-7 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T7^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa7"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq7"
        />
      </div>
    </div>
    <!-- 多項式-6 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T6^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa6"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq6"
        />
      </div>
    </div>
    <!-- 多項式-5 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T5^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa5"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq5"
        />
      </div>
    </div>
    <!-- 多項式-4 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T4^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa4"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq4"
        />
      </div>
    </div>
    <!-- 多項式-3 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T3^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa3"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq3"
        />
      </div>
    </div>
    <!-- 多項式-2 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T2^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa2"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq2"
        />
      </div>
    </div>
    <!-- 多項式-1 -->
    <div class="row">
      <div class="col-sm fs-6 ms-3">
        <p>c*T1^N</p>
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa1"
        />
      </div>

      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq1"
        />
      </div>
    </div>
    <!-- 多項式-常數 -->
    <div class="row">
      <div class="col-sm-4 text-center fs-5">
        <p>c</p>
      </div>
      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          type="text"
          aria-label=".form-control-sm example"
          id="exp_pa0"
        />
      </div>
      <div class="col-sm-4">
        <input
          class="form-control form-control-sm"
          disabled
          type="text"
          aria-label=".form-control-sm example"
          id="exp_sq0"
        />
      </div>
    </div>
    <!-- 修正 -->
    <div class="row px-2">
      <button type="button" @click="btnpa()" class="btn btn-secondary">
        修正
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted, watch } from "vue";
import { getIndex56PageHandle } from "@/composition-api/getIndex56PageHandle.js";

export default {
  setup() {
    const { index56Select, index56Mode } = getIndex56PageHandle();

    const ip = "http://127.0.0.1:3000";

    //非線性功能(熱平衡)
    function tempselection(selection) {
      let num = selection;
      let q = selection - 1;
      if (index56Mode.value === 0) {
        // C table
        $.ajax({
          type: "GET",
          url: "" + ip + "/api/tempcontrol",
          success: function (data) {
            let exp_temperature = data[q].exp_temperature;
            let sqldata = [
              data[q].exp_pa1,
              data[q].exp_pa2,
              data[q].exp_pa3,
              data[q].exp_pa4,
              data[q].exp_pa5,
              data[q].exp_pa6,
              data[q].exp_pa7,
              data[q].exp_pa8,
              data[q].exp_pa9,
              data[q].exp_pa10,
              data[q].exp_c,
              data[q].exp_sq1,
              data[q].exp_sq2,
              data[q].exp_sq3,
              data[q].exp_sq4,
              data[q].exp_sq5,
              data[q].exp_sq6,
              data[q].exp_sq7,
              data[q].exp_sq8,
              data[q].exp_sq9,
              data[q].exp_sq10,
            ];
            //係數值C
            $("#exp_pa10").val(sqldata[9]);
            $("#exp_pa9").val(sqldata[8]);
            $("#exp_pa8").val(sqldata[7]);
            $("#exp_pa7").val(sqldata[6]);
            $("#exp_pa6").val(sqldata[5]);
            $("#exp_pa5").val(sqldata[4]);
            $("#exp_pa4").val(sqldata[3]);
            $("#exp_pa3").val(sqldata[2]);
            $("#exp_pa2").val(sqldata[1]);
            $("#exp_pa1").val(sqldata[0]);
            $("#exp_pa0").val(sqldata[10]);

            //指數值N
            $("#exp_sq10").val(sqldata[20]);
            $("#exp_sq9").val(sqldata[19]);
            $("#exp_sq8").val(sqldata[18]);
            $("#exp_sq7").val(sqldata[17]);
            $("#exp_sq6").val(sqldata[16]);
            $("#exp_sq5").val(sqldata[15]);
            $("#exp_sq4").val(sqldata[14]);
            $("#exp_sq3").val(sqldata[13]);
            $("#exp_sq2").val(sqldata[12]);
            $("#exp_sq1").val(sqldata[11]);

            //   console.log(sqldata); //觀看回傳值
            if (num == 11) {
              $("#temptext").text("冷卻補償設定資訊");
            } else {
              $("#temptext").text(
                " 期望溫度 : " + exp_temperature.toFixed(2) + "℃"
              );
            }
          },
        });
      }
      // else{
      //   // C table
      //   $.ajax({
      //     type: "GET",
      //     url: "" + ip + "/api/lineartempctrl",
      //     success: function (data) {
      //       let exp_temperature = data[q].expl_temperature;
      //       let sqldata = [
      //         data[q].expl_pa1,
      //         data[q].expl_pa2,
      //         data[q].expl_pa3,
      //         data[q].expl_pa4,
      //         data[q].expl_pa5,
      //         data[q].expl_pa6,
      //         data[q].expl_pa7,
      //         data[q].expl_pa8,
      //         data[q].expl_pa9,
      //         data[q].expl_pa10,
      //         data[q].expl_c,
      //         data[q].expl_sq1,
      //         data[q].expl_sq2,
      //         data[q].expl_sq3,
      //         data[q].expl_sq4,
      //         data[q].expl_sq5,
      //         data[q].expl_sq6,
      //         data[q].expl_sq7,
      //         data[q].expl_sq8,
      //         data[q].expl_sq9,
      //         data[q].expl_sq10,
      //       ];
      //       //係數值C
      //       $("#exp_pa10").val(sqldata[9]);
      //       $("#exp_pa9").val(sqldata[8]);
      //       $("#exp_pa8").val(sqldata[7]);
      //       $("#exp_pa7").val(sqldata[6]);
      //       $("#exp_pa6").val(sqldata[5]);
      //       $("#exp_pa5").val(sqldata[4]);
      //       $("#exp_pa4").val(sqldata[3]);
      //       $("#exp_pa3").val(sqldata[2]);
      //       $("#exp_pa2").val(sqldata[1]);
      //       $("#exp_pa1").val(sqldata[0]);
      //       $("#exp_pa0").val(sqldata[10]);

      //       //指數值N
      //       $("#exp_sq10").val(sqldata[20]);
      //       $("#exp_sq9").val(sqldata[19]);
      //       $("#exp_sq8").val(sqldata[18]);
      //       $("#exp_sq7").val(sqldata[17]);
      //       $("#exp_sq6").val(sqldata[16]);
      //       $("#exp_sq5").val(sqldata[15]);
      //       $("#exp_sq4").val(sqldata[14]);
      //       $("#exp_sq3").val(sqldata[13]);
      //       $("#exp_sq2").val(sqldata[12]);
      //       $("#exp_sq1").val(sqldata[11]);

      //       //   console.log(sqldata); //觀看回傳值
      //       if (num == 11) {
      //         $("#temptext").text("冷卻補償設定資訊");
      //       } else {
      //         $("#temptext").text(
      //           " 期望溫度 : " + exp_temperature.toFixed(2) + "℃"
      //         );
      //       }
      //     },
      //   });
      // }
    }

    // 改變非線性(熱平衡)C值 paselect是第幾個C
    function btnpa() {
      let apiUrl = "";
      apiUrl = "update_1";
      for (let paselect = 0; paselect <= 10; paselect++) {
        //要改變的值的id
        let id = "exp_pa" + paselect;
        let N = "exp_sq" + paselect;
        //pa要改變的值
        let exp_pa = document.getElementById(id).value;
        let exp_sq = document.getElementById(N).value;
        let select = document.getElementById("selecttwo").value;

        if (paselect === 10) {
          $.ajax({
            type: "PUT",
            data: { n: exp_sq, x: exp_pa, y: select, z: paselect },
            url: "" + ip + "/api/" + apiUrl,
            success: function () {
              alert("修改成功");
              // tempselection(select);
            },
          });
        } else {
          $.ajax({
            type: "PUT",
            data: { n: exp_sq, x: exp_pa, y: select, z: paselect },
            url: "" + ip + "/api/" + apiUrl,
            success: function () {
              console.log("put ok" + paselect);
            },
          });
        }
      }
    }

    watch(
      () => index56Select.value,
      () => {
        console.log("cool")
        tempselection(index56Select.value);
      }
    );

    onMounted(() => {
      tempselection(1);
    });


    return {
      btnpa,
      index56Select,
    };
  },
};
</script>

<style lang="scss" scoped></style>
