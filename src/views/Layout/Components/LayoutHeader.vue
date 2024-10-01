<script setup lang="ts">

</script>

<template>
  <div class="box">
    <div class="title-box">
      <div class="title">
        Game&Love
      </div>
    </div>
    <div class="info-box">
      <div class="info">登录</div>
    </div>

  </div>
</template>

<style scoped>
div {
  color: #000000CC;
}

.box {
  padding: 10px 40px 10px 40px;
  height: 40px;
  display: flex;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.title-box {
  display: flex;
  align-items: center;
}

.title {
  font-size: 21px;
  font-weight: 800;
}

.info-box {
  margin-left: auto;
  background-color: #D9D9D9;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.info {
  padding: 5px 18px 5px 18px;

  font-size: large;
  font-weight: 800;
}
</style>
