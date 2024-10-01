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
  padding: 0.625rem 2.5rem 0.625rem 2.5rem;
  height: 2.5rem;
  display: flex;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.title-box {
  display: flex;
  align-items: center;
}

.title {
  font-size: 1.3125rem;
  font-weight: 800;
}

.info-box {
  margin-left: auto;
  background-color: #D9D9D9;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
}

.info {
  padding: 0.3125rem 1.125rem 0.3125rem;

  font-size: large;
  font-weight: 800;
}
</style>
