<template>
  <button :class="className" :disabled="disabled" @click.prevent="handleClick">
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
        return ['primary', 'success', 'warn', 'danger', ''].indexOf(val) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        'custom-button': true,
        [`custom-button-${this.type}`]: !!this.type,
        'custom-button--disabled': this.disabled,
        'custom-button--loading': this.loading,
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
  border-radius: $border-radius;
  user-select: none;

  &:hover {
    background-color: var(--color-bg-active);
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

  &-warn {
    color: var(--color-font-invert);
    background-color: var(--color-warn);

    &:hover {
      background-color: var(--color-warn-active);
    }
  }

  &-danger {
    color: var(--color-font-invert);
    background-color: var(--color-danger);

    &:hover {
      background-color: var(--color-danger-active);
    }
  }

  &--disabled {
    cursor: not-allowed;
  }

  &--loading {
    cursor: default;
  }

  &.custom-button--disabled,
  &.custom-button--loading {
    background-color: var(--color-bg-active);
  }

  &-primary.custom-button--disabled,
  &-primary.custom-button--loading {
    background-color: var(--color-primary-active);
  }

  &-success.custom-button--disabled,
  &-success.custom-button--loading {
    background-color: var(--color-success-active);
  }

  &-warn.custom-button--disabled,
  &-warn.custom-button--loading {
    background-color: var(--color-warn-active);
  }

  &-danger.custom-button--disabled,
  &-danger.custom-button--loading {
    background-color: var(--color-danger-active);
  }
}
</style>
