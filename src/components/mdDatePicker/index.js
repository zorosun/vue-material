import mdDatePicker from './mdDatePicker.vue';
import mdDatePickerTheme from './mdDatePicker.theme';

export default function install(Vue) {
  Vue.component('md-date-picker', Vue.extend(mdDatePicker));

  Vue.material.styles.push(mdDatePickerTheme);
}
