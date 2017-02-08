<template>
  <page-content page-title="Templates - App">
    <docs-component>
      <div slot="description">
        <p>The following classes can be applied to change the color palette:</p>
        <ul class="md-body-2">
          <li><code>md-accent</code></li>
          <li><code>md-warn</code></li>
          <li><code>md-transparent</code></li>
        </ul>
      </div>

      <div slot="api">
        <api-table name="md-app-template">
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
          <div slot="demo">
            <md-app-template :md-elevation="3" md-waterfall style="height: 300px">
              <div slot="md-app-toolbar">
                <span class="md-title">Page Title</span>
              </div>

              <div slot="md-app-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
              </div>
            </md-app-template>

            <md-app-template md-scroll-reveal style="height: 300px">
              <div slot="md-app-toolbar">
                <span class="md-title">Page Title</span>
              </div>

              <div slot="md-app-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, pariatur.</p>
                <p>Voluptatibus blanditiis accusamus, officiis ipsum. Placeat consequuntur sit et perspiciatis iste, architecto sint autem eius officia est!</p>
              </div>
            </md-app-template>
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
