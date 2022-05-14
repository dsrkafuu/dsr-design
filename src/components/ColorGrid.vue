<template>
  <div
    class="color-grid"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{ color: font }"
  >
    <div class="color-grid-display" :style="displayStyle"></div>
    <div class="color-grid-wrapper">
      <div class="color-grid-text">{{ text }}</div>
      <div class="color-grid-code">{{ code }}</div>
      <div v-if="activeCode" class="color-grid-active-code">
        {{ activeCode }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  font: {
    type: String,
    default: '#24292f',
  },
  code: {
    type: String,
    required: true,
  },
  activeCode: {
    type: String,
    default: '',
  },
});

const hovered = ref(false);

// 鼠标高亮样式
const displayStyle = computed(() => {
  return {
    backgroundColor: hovered.value
      ? props.activeCode || props.code
      : props.code,
  };
});

// 处理鼠标高亮
function handleMouseEnter() {
  hovered.value = true;
}
function handleMouseLeave() {
  hovered.value = false;
}
</script>

<style lang="scss">
.color-grid {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 160px;
  border-radius: $corner-radius;
  overflow: hidden;
  z-index: 10;

  &-display {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: background-color $transition-fast ease;
  }

  &-wrapper {
    z-index: 30;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-wrap: wrap;
    text-align: center;
  }

  &-text {
    user-select: none;
    margin-top: 36px;
    font-size: $font-lg;
  }

  &-code {
    margin-top: 20px;
    font-family: $font-family-mono;
  }

  &-active-code {
    margin-top: 16px;
    font-family: $font-family-mono;
  }
}
</style>
