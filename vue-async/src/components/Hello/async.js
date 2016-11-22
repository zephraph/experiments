import Vue from 'vue';

Vue.component(
  'Hello',
  () => System.import('./Hello.vue')
);
