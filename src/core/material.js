import Vue from 'vue';

export default new Vue({
  data: () => ({
    styles: [],
    currentTheme: null,
    prefix: 'md-theme-',
    styles: [],
    themes: {
      default: DEFAULT_THEME_COLORS
    },
    inkRipple: true,
    locale: {
      startYear: 1900,
      endYear: 2099,
      dateFormat: 'YYYY-MM-DD',
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      shorterDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Ju', 'Ju', 'A', 'Se', 'O', 'N', 'D']
    }
  }),
  watch: {
    styles() {
      this.refreshInjectedStyles();
    }
  }
});
