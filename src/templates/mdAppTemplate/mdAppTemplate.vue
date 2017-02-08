<template>
  <div class="md-app-template" :class="classes" @scroll="onAppScroll">
    <md-whiteframe md-tag="md-toolbar" :md-elevation="appliedElevation" slot="md-app-toolbar" ref="toolbar">
      <slot name="md-app-toolbar" v-if="$slots['md-app-toolbar']"></slot>
    </md-whiteframe>

    <md-sidenav class="md-left" v-if="$slots['md-app-sidenav']">
      <slot name="md-app-sidenav"></slot>
    </md-sidenav>

    <div class="md-content" @scroll="onContentScroll">
      <slot name="md-app-content"></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./mdAppTemplate.scss"></style>

<script>
  export default {
    props: {
      mdElevation: {
        type: Number,
        default: 2
      },
      mdFixed: {
        type: Boolean,
        default: true
      },
      mdWaterfall: Boolean,
      mdScrollReveal: Boolean
    },
    data() {
      return {
        calculatedElevation: 0,
        scrollFactor: 16
      };
    },
    computed: {
      appliedElevation() {
        return this.mdWaterfall ? this.calculatedElevation : this.mdElevation;
      },
      isFixed() {
        return !this.mdScrollReveal && this.mdFixed;
      },
      classes() {
        return {
          'md-fixed': this.isFixed,
          'md-scroll-reveal': this.mdScrollReveal
        };
      }
    },
    watch: {

    },
    methods: {
      calculateWaterfall($event) {
        const elevation = Math.ceil($event.target.scrollTop * this.mdElevation / this.scrollFactor);

        if (elevation <= this.mdElevation) {
          this.calculatedElevation = elevation;
        }
      },
      calculateScrollReveal($event) {
        console.log($event.target.scrollTop, this.$refs.toolbar.$el.offsetHeight);
      },
      onContentScroll($event) {
        if (this.mdWaterfall) {
          window.requestAnimationFrame(() => {
            this.calculateWaterfall($event);
          });
        }
      },
      onAppScroll($event) {
        if (this.mdScrollReveal) {
          window.requestAnimationFrame(() => {
            this.calculateScrollReveal($event);
          });
        }
      }
    },
    mounted() {

    },
    beforeDestroy() {

    }
  };
</script>
