<template>
  <div class="md-datepicker">
    <md-icon @click.native="openPicker">event</md-icon>

    <div class="md-datepicker-popup" :class="[themeClass, classes]" :style="styles" ref="pickerElement">
      <div class="md-datepicker-header">
        <span class="md-datepicker-year-select" @click="currentView = 'year'">{{ currentDate.getFullYear() }}</span>
        <div class="md-datepicker-date-select" @click="currentView = 'date'">
          <strong class="md-datepicker-dayname">{{ locale.shortDays[currentDate.getDay()] }},</strong>
          <strong class="md-datepicker-monthname">{{ locale.shortMonths[currentDate.getMonth()] }}</strong>
          <strong class="md-datepicker-day">{{ currentDate.getDate() }}</strong>
        </div>
      </div>

      <div class="md-datepicker-body">
        <div class="md-datepicker-calendar" v-show="currentView === 'date'">
          <div class="md-datepicker-controls">
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>

            <span class="md-current-date">{{ locale.months[currentDate.getMonth()] }} {{ currentDate.getFullYear() }}</span>

            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
          </div>

          <div class="md-datepicker-week-days">
            <span v-for="day in locale.shorterDays">{{ day }}</span>
          </div>

          <div class="md-datepicker-days">
            <md-button class="md-icon-button md-empty" v-for="day in startOfMonth(currentDate).getDay()" disabled></md-button>
            <md-button class="md-icon-button" :class="{ 'md-today': isToday(day, currentDate) }" v-for="day in getDaysInMonth(currentDate)">{{ day }}</md-button>
          </div>
        </div>

        <div class="md-datepicker-years" v-show="currentView === 'year'">
          <md-button class="md-dense md-datepicker-year" :class="{ 'md-primary': isThisYear(year, currentDate) }" v-for="year in visibleYears()" @click="setYear(year)">{{ year }}</md-button>
        </div>

        <div class="md-datepicker-actions md-dialog-actions">
          <md-button @click.native="closePicker">Cancel</md-button>
          <md-button class="md-primary" @click.native="closePicker">Ok</md-button>
        </div>
      </div>
    </div>

    <md-backdrop class="md-datepicker-backdrop" :class="classes" @close="closePicker" ref="pickerBackdrop" />

    <md-input
      type="date"
      v-model="value"
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
  import startOfMonth from 'date-fns/start_of_month';
  import formatDate from 'date-fns/format';
  import getDaysInMonth from 'date-fns/get_days_in_month';
  import setDate from 'date-fns/set_date';
  import setYear from 'date-fns/set_year';
  import isToday from 'date-fns/is_today';
  import isThisYear from 'date-fns/is_this_year';

  export default {
    props: {
      value: [String, Date],
      id: String,
      name: String,
      disabled: Boolean,
      required: Boolean,
      placeholder: String,
      mdOpenOnFocus: Boolean
    },
    mixins: [theme],
    data() {
      return {
        rootElement: null,
        pickerElement: null,
        backdropElement: null,
        pickerPosition: {
          top: '0px',
          left: '0px'
        },
        active: false,
        visibleYears() {
          let years = [];
          let startYear = this.locale.startYear;

          while (startYear <= this.locale.endYear) {
            years.push(startYear++);
          }

          return years;
        },
        currentView: 'date',
        currentDate: new Date(this.value)
      };
    },
    computed: {
      classes() {
        return {
          'md-active': this.active,
          'md-select-date': this.currentView === 'date',
          'md-select-year': this.currentView === 'year'
        };
      },
      styles() {
        return {
          top: this.pickerPosition.top,
          left: this.pickerPosition.left
        };
      },
      locale() {
        return this.$material.locale;
      }
    },
    methods: {
      startOfMonth,
      getDaysInMonth,
      isToday(day, fullDate) {
        return isToday(setDate(fullDate, day));
      },
      isThisYear(year, fullDate) {
        return isThisYear(setYear(fullDate, year));
      },
      setYear(year) {
        this.setModelValue(setYear(this.currentDate, year));
      },
      setModelValue(date) {
        this.currentDate = date;
        this.$emit('input', formatDate(date, this.locale.dateFormat));
      },
      calculatePopupPosition() {
        window.requestAnimationFrame(() => {
          const inputContainerRect = this.parentContainer.$el.getBoundingClientRect();
          let position = {};

          position.top = inputContainerRect.top + this.parentContainer.$el.offsetHeight;
          position.left = inputContainerRect.left;

          position = getInViewPosition(this.pickerElement, position);

          this.pickerPosition.top = position.top + window.pageYOffset + 'px';
          this.pickerPosition.left = position.left + window.pageXOffset + 'px';
        });
      },
      openPicker() {
        window.addEventListener('resize', this.calculatePopupPosition);
        this.calculatePopupPosition();
        this.rootElement.appendChild(this.pickerElement);
        this.rootElement.appendChild(this.backdropElement);
        getComputedStyle(this.pickerElement).top;
        getComputedStyle(this.backdropElement).top;
        this.active = true;
      },
      closePicker() {
        const cleanUp = () => {
          this.pickerElement.removeEventListener(transitionEndEventName, cleanUp);
          this.rootElement.removeChild(this.pickerElement);
          this.rootElement.removeChild(this.backdropElement);
        };

        window.removeEventListener('resize', this.calculatePopupPosition);
        this.pickerElement.removeEventListener(transitionEndEventName, cleanUp);
        this.pickerElement.addEventListener(transitionEndEventName, cleanUp);
        this.active = false;
        this.currentView = 'date';
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.rootElement = this.$root.$el;
        this.parentContainer = getClosestVueParent(this.$parent, 'md-input-container');
        this.pickerElement = this.$refs.pickerElement;
        this.backdropElement = this.$refs.pickerBackdrop.$el;
        this.pickerElement.parentNode.removeChild(this.pickerElement);
        this.backdropElement.parentNode.removeChild(this.backdropElement);
        this.setModelValue(this.currentDate);
      });
    },
    beforeDestroy() {

    }
  };
</script>
