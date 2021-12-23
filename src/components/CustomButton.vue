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
  color: $color-font;
  border-radius: $border-radius;
  user-select: none;
  transition: background-color $transition-duration ease;

  &:hover {
    background-color: $color-transparent-active;
  }

  &-primary {
    color: $color-font-invert;
    background-color: $color-primary;

    &:hover {
      background-color: $color-primary-active;
    }
  }

  &-success {
    color: $color-font-invert;
    background-color: $color-success;

    &:hover {
      background-color: $color-success-active;
    }
  }

  &-danger {
    color: $color-font-invert;
    background-color: $color-danger;

    &:hover {
      background-color: $color-danger-active;
    }
  }
}
</style>
