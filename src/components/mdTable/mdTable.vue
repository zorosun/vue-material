<!--<template>
  <div class="md-table" :class="[themeClass]">
    <table>
      <slot></slot>
    </table>
  </div>
</template>-->
<template>
  <div class="md-table" :class="[themeClass]">
    <div v-if="mdFixedHeader">
      <table class="md-table-fixed-header" style="box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.08);">
        <slot name="header"></slot>
      </table>
    </div>
    <div :style="bodyStyle" class="md-table" :class="[themeClass]">
      <table>
        <slot v-if="!mdFixedHeader" name="header"></slot>
        <slot></slot>
        <slot v-if="!mdFixedFooter" name="footer"></slot>
      </table>
    </div>
    <div v-if="mdFixedFooter">
      <table>
        <slot name="footer"></slot>
      </table>
    </div>
  </div>
</template>


<style lang="scss" src="./mdTable.scss"></style>

<script>
  import theme from '../../core/components/mdTheme/mixin';
  import getClosestVueParent from '../../core/utils/getClosestVueParent';

  export default {
    name: 'md-table',
    props: {
      mdFixedHeader: Boolean,
      mdFixedFooter: Boolean,
      mdSortType: String,
      mdSort: String
    },
    mixins: [theme],
    data() {
      return {
        sortType: this.mdSortType,
        sortBy: this.mdSort,
        hasRowSelection: false,
        data: [],
        numberOfRows: 0,
        numberOfSelected: 0,
        selectedRows: {}
      };
    },
    computed: {
      bodyStyle() {
        return {
          overflow: 'auto',
          height: this.height
        };
      }
    },
    methods: {
      emitSort(name) {
        this.sortBy = name;
        this.$emit('sort', {
          name,
          type: this.sortType
        });
      },
      emitSelection() {
        this.$emit('select', this.selectedRows);
      }
    },
    watch: {
      data() {
        this.numberOfRows = this.data.length;
      },
      selectedRows() {
        this.numberOfSelected = Object.keys(this.selectedRows).length;
      },
      mdSort() {
        this.sortBy = this.mdSort;
        this.$emit('sortInput');
      },
      mdSortType() {
        this.sortType = this.mdSortType;
        this.$emit('sortInput');
      }
    },
    mounted() {
      this.parentCard = getClosestVueParent(this.$parent, 'md-table-card');

      if (this.parentCard) {
        this.parentCard.tableInstance = this;
      }
    }
  };
</script>
