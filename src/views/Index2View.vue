<template>
  <HeadComponent />
  <h1>測試頁面</h1>
  <h2>ref 獲取對象</h2>
  <input type="text" ref="inputRef" />
  <h2>Promise 抽獎</h2>
  <button class="btn btn-primary" @click="random">抽獎</button>
  <h1>{{ a }}</h1>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="請輸入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input
      type="text"
      placeholder="請輸入名字"
      v-model="user.lastName"
    /><br />
  </fieldset>
  <fieldset>
    <legend>姓名操作</legend>
    姓名：<input type="text" placeholder="顯示姓名" v-model="fullName1" /><br />
    姓名：<input type="text" placeholder="顯示姓名" v-model="fullName2" /><br />
    姓名：<input type="text" placeholder="顯示姓名" v-model="fullName3" /><br />
  </fieldset>

  <h1>toRef的使用</h1>
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
</template>

<script>
import HeadComponent from "@/components/header/HeadComponent.vue";
//基於promise操作 封裝ajax的套件
import axios from "axios";
import $ from "jquery";
import { computed } from "@vue/reactivity";
import { onMounted, ref, reactive, watchEffect, toRefs } from "vue";
export default {
  name: "Index2View",
  components: {
    HeadComponent,
  },
  setup() {
    const inputRef = ref();
    onMounted(() => {
      inputRef.value && inputRef.value.focus();
    });
    //promise練習
    function rand(m, n) {
      return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
    }
    async function random() {
      //   let n = rand(1, 100);
      //   if (n <= 30) {
      //     alert("恭喜中獎");
      //   } else {
      //     alert("再接再Z");
      //   }
      // console.log("start");
      //Promise練習
      const random = new Promise((resolve, reject) => {
        setTimeout(() => {
          let n = rand(1, 100);
          if (n >= 30) {
            resolve(n);
          } else {
            reject(n);
          }
        }, 500);
      });
      // console.log("mid");
      // random.then(
      //   (value) => {
      //     // console.log("b");
      //     alert("恭喜中獎WWWWWOOOOOOOWWWWWWWW" + value);
      //   },
      //   (reason) => {
      //     // console.log("b");
      //     alert("再接再Z" + reason);
      //   }
      // );
      let awaitTest = await random
      console.log(awaitTest)
      // console.log("end");
    }

    // function testPromise() {
    //   const p = new Promise((resolve) => {
    //     setTimeout(() => {
    //       console.log("1");
    //       resolve("ok");
    //     }, 2000);
    //   });

    //   p.then((value) => {
    //     console.log("2");
    //     console.log(value);
    //   }).then(() => {
    //     console.log("3");
    //   });
    // }
    // testPromise();

    let a = ref();
    //用async await方便獲取數據，不用回調函數
    const b = async () => {
      let asd = await axios
        .get("http://127.0.0.1:3000/api/Temp_Perception")
        // .then((response) => {
        //   a.value = response.data;
        //   console.log(a.value);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
        let dsa = await $.ajax("http://127.0.0.1:3000/api/Temp_Perception")
      console.log(asd);
      console.log(dsa);

    };
    b();

    //vue練習
    const user = reactive({
      // 姓氏
      firstName: "沈",
      // 名字
      lastName: "治翰",
    });

    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });

    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val) {
        // console.log("set data!", val);
        const name = val.split("_");
        user.firstName = name[0];
        user.lastName = name[1];
      },
    });

    const fullName3 = ref("");
    watchEffect(() => {
      fullName3.value = user.firstName + "_" + user.lastName;
    });

    watchEffect(() => {
      const name = fullName3.value.split("_");
      user.firstName = name[0];
      user.lastName = name[1];
    });

    const state = reactive({
      name: "自來也",
      age: 47,
    });
    const state2 = toRefs(state);

    setInterval(() => {
      state2.name.value += ".";
    }, 5000);

    return {
      inputRef,
      random,
      a,
      user,
      fullName1,
      fullName2,
      fullName3,
      ...state2,
    };
  },
};
</script>

<style scoped></style>
