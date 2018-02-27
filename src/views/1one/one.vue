<template>
  <div class="one-container">
      <div class="color-picker">
        <colorPicker v-model="colorObj.color" @change="handleChangeColor"></colorPicker>
      </div>
      <div class="android-container">
        <j-android :color-value="colorObj" ></j-android>
      </div>
  </div>
</template>

<script src="./one.js"></script>
<style lang="scss">
@import './one.scss';
</style>
