<template>
  <div class="layout">
    <header class="layout-header">
      <div class="layout-header-container">w-ui</div>
    </header>
    <article class="layout-body">
      <aside class="layout-tab">
        <ul class="layout-tab-list">
          <li
          v-for="tab in tabList"
          :key="tab.name"
          @click="$router.push(tab.path)">{{tab.routeName}}</li>
        </ul>
      </aside>
      <section>
        <router-view></router-view>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
@Component
export default class Layout extends Vue {
  tabList: Array<RouteConfig> = []

  $router: any

  created() {
    this.tabList = this.$router.options.routes;
  }
}
</script>
