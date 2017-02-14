export default {
  props: {
    value: [String, Number, Date],
    disabled: Boolean,
    required: Boolean,
    maxlength: [Number, String],
    placeholder: String
  },
  watch: {
    value() {
      this.updateValues();
    },
    disabled() {
      this.setParentDisabled();
    },
    required() {
      this.setParentRequired();
    },
    placeholder() {
      this.setParentPlaceholder();
    },
    maxlength() {
      this.handleMaxLength();
    }
  },
  methods: {
    handleMaxLength() {
      this.parentContainer.enableCounter = this.maxlength > 0;
      this.parentContainer.counterLength = this.maxlength;
    },
    setParentValue(value) {
      this.parentContainer.setValue(value || this.$el.value);
    },
    setParentDisabled() {
      this.parentContainer.isDisabled = this.disabled;
    },
    setParentRequired() {
      this.parentContainer.isRequired = this.required;
    },
    setParentPlaceholder() {
      this.parentContainer.hasPlaceholder = !!this.placeholder;
    },
    updateValues() {
      this.$nextTick(() => {
        const newValue = this.$el.value || this.value;

        this.setParentValue(newValue);
        this.parentContainer.inputLength = newValue ? newValue.length : 0;
      });
    },
    onFocus($event) {
      if (this.parentContainer) {
        this.parentContainer.isFocused = true;
      }

      this.$emit('focus', $event);
    },
    onBlur($event) {
      this.parentContainer.isFocused = false;
      this.setParentValue();
      this.$emit('blur', $event);
    },
    onInput($event) {
      this.updateValues();
      this.$emit('change', this.$el.value, $event);
      this.$emit($event.type, this.$el.value, $event);
    }
  }
};
