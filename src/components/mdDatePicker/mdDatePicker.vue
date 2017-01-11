<template>
  <div class="md-date-picker" :class="[themeClass, classes]">
    <slot></slot>
  </div>
</template>

<style lang="scss" src="./mdDatePicker.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';

  export default {
    props: {

    },
    mixins: [theme],
    data: () => ({

    }),
    computed: {
      classes() {
        return {

        };
      }
    },
    methods: {

    },
    mounted() {
      this.$nextTick(() => {

      });
    },
    beforeDestroy() {

    }
  };
</script>
