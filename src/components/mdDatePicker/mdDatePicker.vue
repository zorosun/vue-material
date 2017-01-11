<template>
  <div class="md-date-picker">
    <md-icon @click.native="openPicker">event</md-icon>

    <div class="md-date-picker-popup" :class="[themeClass, classes]" :style="styles" ref="pickerElement">
      <md-button @click.native="closePicker">Cancel</md-button>
      <md-button class="md-primary" @click.native="closePicker">Ok</md-button>
    </div>

    <md-backdrop class="md-date-picker-backdrop" :class="classes" @close="closePicker" ref="pickerBackdrop"></md-backdrop>

    <md-input
      type="date"
      v-model="selectedDate"
      :id="id"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus.native="mdOpenOnFocus || openPicker"
      ref="pickerInput" />
  </div>
</template>

<style lang="scss" src="./mdDatePicker.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import getInViewPosition from '../../core/utils/getInViewPosition';
  import transitionEndEventName from '../../core/utils/transitionEndEventName';

  export default {
    props: {
      value: String,
      id: String,
      name: String,
      disabled: Boolean,
      required: Boolean,
      placeholder: String,
      mdOpenOnFocus: Boolean
    },
    mixins: [theme],
    data: () => ({
      rootElement: null,
      pickerElement: null,
      backdropElement: null,
      pickerPosition: {
        top: '0px',
        left: '0px'
      },
      selectedDate: Date.now(),
      active: false
    }),
    computed: {
      classes() {
        return {
          'md-active': this.active
        };
      },
      styles() {
        return {
          top: this.pickerPosition.top,
          left: this.pickerPosition.left
        };
      }
    },
    methods: {
      calculatePopupPosition() {
        const inputContainerRect = this.parentContainer.$el.getBoundingClientRect();
        let position = {};

        position.top = inputContainerRect.top + this.parentContainer.$el.offsetHeight;
        position.left = inputContainerRect.left;

        position = getInViewPosition(this.pickerElement, position);

        this.pickerPosition.top = position.top + window.pageYOffset + 'px';
        this.pickerPosition.left = position.left + window.pageXOffset + 'px';
      },
      openPicker() {
        this.calculatePopupPosition();
        this.rootElement.appendChild(this.pickerElement);
        this.rootElement.appendChild(this.backdropElement);
        this.active = true;
      },
      closePicker() {
        this.active = false;
        this.rootElement.removeChild(this.pickerElement);
        this.rootElement.removeChild(this.backdropElement);
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');
        this.pickerElement = this.$refs.pickerElement;
        this.pickerElement.parentNode.removeChild(this.pickerElement);
        this.backdropElement = this.$refs.pickerBackdrop.$el;
        this.backdropElement.parentNode.removeChild(this.backdropElement);
      });
    },
    beforeDestroy() {

    }
  };
</script>
