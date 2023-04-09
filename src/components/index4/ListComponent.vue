<template>
  <tr>
    <th scope="row" class="align-bottom"><h5>${i + 1}.</h5></th>
    <td class="align-middle p-0">${data[data.length - i - 1]}</td>
    <!-- 下載 -->
    <td>
      <a href="../rec_data/${data[data.length - i - 1]}" download>
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
        @onclick="deletefile(data[data.length - i - 1])"
      >
        <h6 class="m-0">刪除</h6>
      </button>
    </td>
  </tr>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {

     // 刪除記錄檔
     function deletefile(filename) {
      $.ajax({
        type: "POST",
        data: { x: filename },
        url: "http://127.0.0.1:3000/api/delete_recdata",
        complete: function () {
          alert("刪除完成");
          location.replace(location);
        },
      });
    }

    // 顯示記錄檔案(新的在前)
    function getRecordFile() {
      $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://127.0.0.1:3000/api/get_recdata",
        success: function (data) {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            var contentt = `
          <tr>
              <th scope="row" class="align-bottom"><h5>${i + 1}.</h5></th>
              <td class="align-middle p-0">
              ${data[data.length - i - 1]}
              </td>
              <!-- 下載 -->
              <td>
                  <a href="../rec_data/${data[data.length - i - 1]}" download>
                      <button type='button' class='btn btn-primary btn-sm'>
                          <h6 class='m-0'>下載</h6>
                      </button>
                  </a>
              </td>
              <!-- 刪除 -->
              <td>
                  <button type='button' class='btn btn-primary btn-sm' onclick="deletefile('${
                    data[data.length - i - 1]
                  }')">
                      <h6 class='m-0'>刪除</h6>
                  </button>
              </td>
          </tr>
          `;
            $("#download").append(contentt);
          }
        },
      });
    }
    onMounted(()=>{
      getRecordFile();
    })
    return {
      deletefile
    };
  },
};
</script>

<style lang="scss" scoped></style>
