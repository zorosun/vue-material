<template>
  <div class="md-app-template" :class="classes" @scroll="onAppScroll">
    <md-whiteframe
      md-tag="md-toolbar"
      :md-elevation="appliedElevation"
      :style="toolbarStyles"
      slot="md-app-toolbar"
      ref="toolbar">
      <slot name="md-app-toolbar" v-if="$slots['md-app-toolbar']"></slot>
    </md-whiteframe>

    <md-sidenav class="md-left" v-if="$slots['md-app-sidenav']">
      <slot name="md-app-sidenav"></slot>
    </md-sidenav>

    <div class="md-content" :style="contentStyle" @scroll="onContentScroll">
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
        revealToolbarTimeout: null,
        toolbarStyles: {},
        lastScrolled: 0,
        holdScroll: false,
        toolbarHeight: 0,
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
      contentStyle() {
        if (this.mdScrollReveal) {
          return {
            'margin-top': this.toolbarHeight + 'px'
          };
        }

        return false;
      },
      classes() {
        return {
          'md-fixed': this.isFixed,
          'md-scroll-reveal': this.mdScrollReveal
        };
      }
    },
    methods: {
      calculateWaterfall($event) {
        const elevation = Math.ceil($event.target.scrollTop * this.mdElevation / this.scrollFactor);

        if (elevation <= this.mdElevation) {
          this.calculatedElevation = elevation;
        }
      },
      calculateScrollReveal($event) {
        window.clearTimeout(this.revealToolbarTimeout);
        this.holdScroll = true;
        this.toolbarHeight = this.$refs.toolbar.$el.offsetHeight;

        this.revealToolbarTimeout = window.setInterval(() => {
          this.holdScroll = false;
          this.lastScrolled = $event.target.scrollTop;
        }, 100);

        let toolbarStyles = {
          top: $event.target.scrollTop + 'px'
        };

        if ($event.target.scrollTop === 0) {
          toolbarStyles['transition'] = 'none';
        } else if (this.holdScroll) {
          if ($event.target.scrollTop < this.lastScrolled) {
            toolbarStyles['transform'] = 'translate3D(0, 0, 0)';
          } else if ($event.target.scrollTop > this.toolbarHeight) {
            toolbarStyles['transform'] = 'translate3D(0, -100%, 0)';
            toolbarStyles['box-shadow'] = 'none';
          } else {
            toolbarStyles['transition'] = 'none';
            toolbarStyles['transform'] = `translate3D(0, -${$event.target.scrollTop}px, 0)`;
          }
        }

        this.toolbarStyles = toolbarStyles;
      },
      onContentScroll($event) {
        window.requestAnimationFrame(() => {
          if (this.mdWaterfall) {
            this.calculateWaterfall($event);
          }
        });
      },
      onAppScroll($event) {
        window.requestAnimationFrame(() => {
          if (this.mdScrollReveal) {
            this.calculateScrollReveal($event);
          }
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.toolbarHeight = this.$refs.toolbar.$el.offsetHeight;
      });
    },
    beforeDestroy() {

    }
  };
</script>
