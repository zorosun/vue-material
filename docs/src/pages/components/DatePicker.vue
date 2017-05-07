<template>
  <page-content page-title="Components - Date Picker">
    <docs-component>
      <div slot="description">
        <p>A dialog picker is used to select a single date on mobile.</p>
      </div>

      <div slot="api">
        <api-table name="md-date-picker">
          <md-table slot="properties">
            <md-table-header>
              <md-table-row>
                <md-table-head>Name</md-table-head>
                <md-table-head>Type</md-table-head>
                <md-table-head>Description</md-table-head>
              </md-table-row>
            </md-table-header>

            <md-table-body>
              <md-table-row>
                <md-table-cell>empty</md-table-cell>
                <md-table-cell><code>Type</code></md-table-cell>
                <md-table-cell>Description</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </api-table>
      </div>

      <div slot="example">
        <example-box card-title="Default">
          <div class="datepicker-demo" slot="demo">
            <md-input-container>
              <md-datepicker id="picker-1" v-model="date" />
            </md-input-container>

            <md-input-container>
              <label for="picker-2">Open on focus</label>
              <md-datepicker id="picker-2" v-model="date" md-open-on-focus />
            </md-input-container>

            <md-input-container>
              <label for="picker-3">With an label</label>
              <md-datepicker id="picker-3" v-model="date" md-open-on-focus placeholder="This placeholder don't work on Chrome" />
            </md-input-container>

            <md-input-container>
              <label for="picker-4">Required</label>
              <md-datepicker id="picker-4" v-model="date" required />
            </md-input-container>

            <md-input-container>
              <label for="picker-5">Disabled</label>
              <md-datepicker id="picker-5" v-model="date" disabled />
            </md-input-container>
          </div>

          <div slot="code">
            <code-block lang="xml">

            </code-block>
          </div>
        </example-box>
      </div>
    </docs-component>
  </page-content>
</template>

<style lang="sass" scoped>

</style>

<script>
  export default {
    data: () => ({
      date: new Date('2018-05-20')
    })
  };
</script>
