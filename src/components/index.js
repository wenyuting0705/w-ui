import Vue from 'vue';
import Button from '@/components/Button/Button.vue';

const Components = {
  Button,
};

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
