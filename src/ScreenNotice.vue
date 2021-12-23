<template>
  <div class="screen-notice">
    <span class="notice">推荐使用宽度大于 1080 像素的屏幕访问</span>
    <CustomButtonVue @click="handleIgnoreClick" type="primary">
      忽略
    </CustomButtonVue>
  </div>
</template>

<script>
import CustomButtonVue from './components/CustomButton.vue';

export default {
  emits: ['ignore'],
  components: {
    CustomButtonVue,
  },
  methods: {
    handleIgnoreClick() {
      window._IGNORE_NOTICE && window._IGNORE_NOTICE();
    },
  },
};
</script>

<style scoped lang="scss">
.screen-notice {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.notice {
  font-size: 18px;
  margin-bottom: 24px;
}
</style>
