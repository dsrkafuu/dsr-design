<template>
  <div
    class="color-grid"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :style="{
      color: font || 'var(--color-font)',
      backdropFilter: mica ? 'saturate(200%) blur(24px)' : 'none',
    }"
  >
    <div class="color-grid-display" :style="displayStyle"></div>
    <div class="color-grid-wrapper">
      <div class="color-grid-text">{{ text }}</div>
      <div class="color-grid-code">{{ code }}</div>
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
  },
  code: {
    type: String,
    required: true,
  },
  mica: {
    type: Boolean,
    default: false,
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
  width: 100%;
  height: 50px;
  border-radius: $corner-radius-lg;
  overflow: hidden;
  z-index: 10;
  margin-bottom: 5px;
  box-shadow: var(--box-shadow);

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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-text {
    user-select: none;
    font-size: $font-lg;
    width: 200px;
  }

  &-code {
    font-family: $font-family-mono;
    width: 300px;
  }
}
</style>
