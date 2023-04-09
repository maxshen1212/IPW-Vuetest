<template>
  <HeadComponent />
  <h1>index7</h1>
  <div class="container-fluid">
    <!-- 功能列 -->
    <div class="row p-2 m-2">
      <!-- 傳送模式選擇 -->
      <div class="col-4">
        <select
          class="form-select text-center fw-bold border border-2 border-dark rounded shadow bg-white"
          id="selectone"
          onchange=""
        >
          <option value="1">廣播模式</option>
          <option value="2">定址模式</option>
        </select>
      </div>
      <!-- 感知點選擇 -->
      <div class="col-4">
        <select
          class="form-select text-center fw-bold border border-2 border-dark rounded shadow"
          id="selecttwo"
          onchange="selectOne()"
        >
          <option value="1">全部</option>
          <option value="2">溫度感知點1～10</option>
          <option value="3">溫度控制點1～10</option>
        </select>
      </div>
      <!-- 功能模式選擇 -->
      <div class="col-4">
        <select
          class="form-select text-center fw-bold border border-2 border-dark rounded shadow"
          id="selecthree"
          onchange=""
        >
          <option value="1">一般模式</option>
          <option value="2">睡眠模式</option>
        </select>
      </div>
    </div>

    <!-- AT指令輸入 -->
    <div class="row p-2 m-2 mt-3 justify-content-center">
      <!-- 左半部 -->
      <div class="col-2">
        <select
          id="multiselect"
          multiple
          name="native-select"
          placeholder="請選擇"
          data-search="true"
          data-silent-initial-value-set="true"
        >
          <option value="1" id="temp1">溫感點 1</option>
          <option value="2" id="temp2">溫感點 2</option>
          <option value="3" id="temp3">溫感點 3</option>
          <option value="4" id="temp4">溫感點 4</option>
          <option value="5" id="temp5">溫感點 5</option>
          <option value="6" id="temp6">溫感點 6</option>
          <option value="7" id="temp7">溫感點 7</option>
          <option value="8" id="temp8">溫感點 8</option>
          <option value="9" id="temp9">溫感點 9</option>
          <option value="10" id="ctemp10">溫感點 10</option>
          <option value="11" id="ctemp1">溫控點 1</option>
          <option value="12" id="ctemp2">溫控點 2</option>
          <option value="13" id="ctemp3">溫控點 3</option>
          <option value="14" id="ctemp4">溫控點 4</option>
          <option value="15" id="ctemp5">溫控點 5</option>
          <option value="16" id="ctemp6">溫控點 6</option>
          <option value="17" id="ctemp7">溫控點 7</option>
          <option value="18" id="ctemp8">溫控點 8</option>
          <option value="19" id="ctemp9">溫控點 9</option>
          <option value="20" id="ctemp10">溫控點 10</option>
        </select>
      </div>

      <!-- 右半部 -->
      <div class="col-6">
        <div class="input-group shadow">
          <input
            type="text"
            class="form-control"
            placeholder="Mesh-AT指令輸入"
            aria-label="AT指令輸入"
          />
          <button class="btn btn-primary" type="button" id="commandbtn">
            送出
          </button>
        </div>
      </div>
    </div>

    <!-- 藍牙模組列 -->
    <div class="row">
      <div
        class="col rounded m-2"
        style="height: 420px; overflow-y: scroll; display: block"
      >
        <!-- 藍芽模組列-tt -->
        <div class="row p-1 m-2" id="mesh_1">
          <div class="col-12">
            <!-- 藍芽列-1 -->
            <div class="row">
              <!-- 藍芽Mesh-1 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 1
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat1">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk1">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-2 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 2
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat2">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk2">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-3 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 3
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat3">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk3">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-4 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 4
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat4">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk4">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-5 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 5
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat5">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk5">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 藍芽模組列-ct -->
        <div class="row p-1 m-2" id="mesh_2">
          <div class="col-12">
            <!-- 藍芽列-1 -->
            <div class="row">
              <!-- 藍芽Mesh-1 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 4
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat2">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk1">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-1 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 4
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat2">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk1">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-1 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 4
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat2">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk1">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-1 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 4
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat2">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk1">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
              <!-- 藍芽Mesh-1 -->
              <div
                class="col border border-2 border-dark rounded shadow bg-white m-2"
                onclick="select(event)"
              >
                <!-- 標題 -->
                <div class="row">
                  <div class="col-6">
                    <h6 class="m-2 text-center">
                      <i class="bi bi-bluetooth"></i>藍芽<br />Mesh模組 4
                    </h6>
                  </div>
                  <div class="col-2 text-start">
                    <p class="my-1">connected</p>
                  </div>
                  <div class="col text-end pt-1">
                    <div
                      class="spinner-grow spinner-grow-sm text-primary"
                      role="status"
                    >
                      <span class="visually-hidden">Connecting...</span>
                    </div>
                  </div>
                </div>
                <!-- 內容 -->
                <div class="row">
                  <div class="col-5">
                    <img
                      src=""
                      alt="blt-mesh"
                      style="width: 120px; margin: 0; padding: 0"
                    />
                  </div>
                  <div class="col-7">
                    <h5 class="my-2">
                      <i class="bi bi-battery-full"></i>
                      電量：<span id="ttbat2">0</span>%
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-thermometer-half"></i>
                      溫度：<span id="tk1">0</span>℃
                    </h5>
                    <h5 class="my-2">
                      <i class="bi bi-link"></i>
                      <span class="me-2"> 連接</span>
                      <input
                        id="tt1"
                        type="checkbox"
                        checked
                        data-toggle="toggle"
                        data-onstyle="primary"
                        data-size="small"
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComponent from "@/components/header/HeadComponent.vue";

export default {
  name: "Index7View",
  components: {
    HeadComponent,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
