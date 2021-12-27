<template>
  <button :class="className" @click.prevent="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    type: {
      type: String,
      default: '',
      validator: (val) => {
        return ['primary', 'success', 'danger', ''].indexOf(val) !== -1;
      },
    },
  },
  computed: {
    className() {
      return {
        'custom-button': true,
        [`custom-button-${this.type}`]: !!this.type,
      };
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss">
.custom-button {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 12px;
  color: var(--color-font);
  border-radius: $corner-radius;
  user-select: none;
  transition: background-color $transition-duration ease;

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
