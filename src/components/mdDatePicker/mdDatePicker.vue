<template>
  <div class="md-datepicker">
    <md-icon @click.native="openPicker">event</md-icon>

    <md-input
      type="date"
      v-model="modelDate"
      :id="id"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus.native="openOnFocus"
      ref="pickerInput" />

    <div class="md-datepicker-popup" :class="[themeClass, classes]" :style="styles" ref="pickerElement">
      <div class="md-datepicker-header">
        <span class="md-datepicker-year-select" @click="showYearPicker">{{ selectedDate.getFullYear() }}</span>
        <div class="md-datepicker-date-select" @click="showDatePicker">
          <strong class="md-datepicker-dayname">{{ locale.shortDays[selectedDate.getDay()] }},</strong>
          <strong class="md-datepicker-monthname">{{ locale.shortMonths[selectedDate.getMonth()] }}</strong>
          <strong class="md-datepicker-day">{{ selectedDate.getDate() }}</strong>
        </div>
      </div>

      <div class="md-datepicker-body">
        <div class="md-datepicker-calendar" v-show="currentView === 'date'">
          <div class="md-datepicker-controls">
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
          </div>

          <div class="md-calendar-container">
            <div class="md-datepicker-month" v-for="month in createdMonths">
              <span class="md-current-date">{{ locale.months[month.getMonth()] }} {{ month.getFullYear() }}</span>

              <div class="md-datepicker-week-days">
                <span v-for="day in locale.shorterDays">{{ day }}</span>
              </div>

              <div class="md-datepicker-days">
                <span class="md-empty" v-for="day in startOfMonth(month).getDay()"></span>

                <md-button
                  class="md-icon-button"
                  v-for="day in getDaysInMonth(month)"
                  :key="day"
                  :class="{
                    'md-today': isToday(day),
                    'md-selected': isSelectedDay(day)
                  }"
                  @click.native="selectDate(day)">
                  {{ day }}
                </md-button>
              </div>
            </div>
          </div>
        </div>

        <div class="md-datepicker-years" v-show="currentView === 'year'">
          <md-button
            class="md-dense md-datepicker-year"
            v-for="year in visibleYears()"
            :key="year"
            :class="[
              {
                'md-primary': isThisYear(year),
                'md-primary md-raised': isSelectedYear(year),
              },
              'data-' + year
            ]"
            @click.native="setYear(year)">
            {{ year }}
          </md-button>
        </div>

        <div class="md-datepicker-actions md-dialog-actions">
          <md-button @click.native="closePicker">Cancel</md-button>
          <md-button class="md-primary" @click.native="closePicker">Ok</md-button>
        </div>
      </div>
    </div>

    <md-backdrop class="md-datepicker-backdrop" :class="classes" @close="closePicker" ref="pickerBackdrop" />
  </div>
</template>

<style lang="scss" src="./mdDatePicker.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';
  import getInViewPosition from '../../core/utils/getInViewPosition';
  import transitionEndEventName from '../../core/utils/transitionEndEventName';
  import formatDate from 'date-fns/format';
  import startOfMonth from 'date-fns/start_of_month';
  import addMonths from 'date-fns/add_months';
  import getDaysInMonth from 'date-fns/get_days_in_month';
  import setDate from 'date-fns/set_date';
  import setYear from 'date-fns/set_year';
  import isToday from 'date-fns/is_today';
  import isSameDay from 'date-fns/is_same_day';
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
        currentDate: new Date(this.value),
        selectedDate: new Date(this.value),
        createdMonths: [
          addMonths(this.value, -1),
          this.value,
          addMonths(this.value, 1)
        ],
        currentView: 'date'
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
      modelDate() {
        return formatDate(this.selectedDate, this.locale.dateFormat);
      },
      locale() {
        return this.$material.locale;
      }
    },
    methods: {
      startOfMonth(month) {
        return startOfMonth(month);
      },
      getDaysInMonth(month) {
        return getDaysInMonth(month);
      },
      isToday(day) {
        return isToday(setDate(new Date(), day));
      },
      isThisYear(year) {
        return isThisYear(setYear(new Date(), year));
      },
      isSelectedDay(day) {
        return isSameDay(this.selectedDate, setDate(this.selectedDate, day));
      },
      isSelectedYear(year) {
        return isSameDay(this.selectedDate, setYear(this.selectedDate, year));
      },
      setYear(year) {
        this.setModelValue(setYear(this.selectedDate, year));
      },
      setModelValue(date) {
        this.selectedDate = date;
        this.$emit('input', this.modelDate);
      },
      openOnFocus() {
        if (this.mdOpenOnFocus) {
          this.openPicker();
        }
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
        this.showDatePicker();
        this.active = false;
      },
      showDatePicker() {
        this.currentView = 'date';
      },
      showYearPicker() {
        this.currentView = 'year';

        this.$nextTick(() => {
          this.pickerElement.querySelector(`.data-${this.selectedDate.getFullYear()}`).scrollIntoViewIfNeeded(true);
        });
      },
      selectDate(day) {
        this.selectedDate = setDate(this.selectedDate, day);
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
