<script setup lang="ts">

</script>

<template>
  <div class="info">
    <div class="info-title">
      <div>欢迎来到Game&Love</div>
    </div>
    <div class="info-content">
      Ciallo～(∠・ω< )⌒☆ 这里是湖北交通大学的Galgame同好会 </div>
    </div>
</template>

<style scoped>
.info {
  width: 100%;
  height: 100%;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

div {
  color: #d00a66;
}

.info-title {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

.info-content {
  padding: 0 0.5rem;
  font-size: 1.2rem;
  text-align: center;
}

@media (max-width: 1200px) {
  .info {
    padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  }
}

@media (max-width: 900px) {
  .info {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  }

  .info-title {
    font-size: 1.4rem;
  }

  .info-content {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .info {
    padding: 0.6rem 0.6rem 0.6rem 0.6rem;
  }
}

@media (max-width: 600px) {
  .info {
    padding: 0.6rem 0.4rem 0.6rem 0.4rem;
  }
}
</style>
