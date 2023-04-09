<template>
  <div class="container">
    <div role="navigation">
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          <a id="index" href="" class="nav-link fs-5" style="color: white"
            ><i class="bi bi-pc-display"></i> <span>IPW</span>
          </a>
          <!-- RWD按紐 -->
          <button
            class="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navDropdown"
            style="vertical-align: inherit"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- 導覽列上超連結 links on nav -->
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navDropdown"
          >
            <ul class="navbar-nav" id="navbar">
              <li class="nav-item">
                <router-link to="/index1" class="nav-link fs-5"
                  >溫度總覽</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link to="/index2" class="nav-link fs-5"
                  >溫度控制</router-link
                >
              </li> -->
              <li class="nav-item">
                <router-link to="/index3" class="nav-link fs-5"
                  >機台資訊</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/index4" class="nav-link fs-5"
                  >溫度履歷</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/index5" class="nav-link fs-5"
                  >熱平衡系統設定</router-link
                >
              </li>
              <!-- <li class="nav-item">
                <router-link to="/index6" class="nav-link fs-5"
                  >熱伸長系統設定</router-link
                >
              </li> -->
              <!-- <li class="nav-item">
                <router-link to="/index7" class="nav-link fs-5"
                  >Mesh總覽</router-link
                >
              </li> -->
              <li class="nav-item">
                <router-link to="/index8" class="nav-link fs-5"
                  >系統設定</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
