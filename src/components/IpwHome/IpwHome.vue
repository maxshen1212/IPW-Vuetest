<template src="./template.html"></template>

<script>
export default {
  name: "IpwHome",
};
</script>

<style scoped>
.text-uppercase {
  background: linear-gradient(to left, #d15ef7 60%, #7c14c0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#title > div > h1 {
  text-transform: uppercase;
  background: linear-gradient(to left, #30d088 0%, rgb(118, 7, 192) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 180px;
  opacity: 0;
}

#title > div > p {
  text-transform: uppercase;
  background: linear-gradient(to left, #30d088 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
}

.IPW > .col > h1 {
  background: linear-gradient(to left, #68fcb9 40%, #055f83 100%);
  /* background: linear-gradient(135deg, #e0a5fd 10%, #9c06e1 100%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
}

#title {
  height: 850px;
}

.container-sm {
  color: white;
}

.IPW {
  height: 600px;
}

.info {
  height: 600px;
}

.ipwimg {
  height: 400px;
  width: 600px;
}

.gradient-border {
  --borderWidth: 5px;
  background: #1d1f20;
  position: relative;
  border-radius: var(--borderWidth);
}

.gradient-border:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(2 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 2s ease alternate infinite;
  background-size: 300% 300%;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
