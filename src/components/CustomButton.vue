<template>
  <button :class="className" @click.prevent="handleClick">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['click', 'delete']);

const props = defineProps({
  type: {
    type: String,
    default: '',
    validator: (val) => {
      return ['primary', 'success', 'danger', ''].indexOf(val) !== -1;
    },
  },
});

const className = computed(() => {
  return {
    'custom-button': true,
    [`custom-button-${props.type}`]: !!props.type,
  };
});

function handleClick() {
  emit('click');
}
</script>

<style lang="scss">
.custom-button {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 12px;
  color: var(--color-font);
  border-radius: $corner-radius-lg;
  user-select: none;
  transition: background-color $transition-fast ease;

  &:hover {
    background-color: var(--color-transparent-active);
  }

  &-primary {
    color: var(--color-font-invert);
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-active);
    }
  }

  &-success {
    color: var(--color-font-invert);
    background-color: var(--color-success);

    &:hover {
      background-color: var(--color-success-active);
    }
  }

  &-danger {
    color: var(--color-font-invert);
    background-color: var(--color-danger);

    &:hover {
      background-color: var(--color-danger-active);
    }
  }
}
</style>
