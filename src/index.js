import VueGoodTable2Draggable from './components/Table.vue';

const VueGoodTableDraggablePlugin = {
  install(Vue, options) {
    Vue.component(VueGoodTable2Draggable.name, VueGoodTable2Draggable);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueGoodTableDraggablePlugin);
}

export default VueGoodTableDraggablePlugin;
export { VueGoodTable2Draggable };
