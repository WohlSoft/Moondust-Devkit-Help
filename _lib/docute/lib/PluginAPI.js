import Vue from 'vue';
import InjectedComponents from './components/InjectedComponents';
import hooks from './hooks';

var PluginAPI =
/*#__PURE__*/
function () {
  function PluginAPI(_ref) {
    var plugins = _ref.plugins,
        store = _ref.store,
        router = _ref.router;
    this.plugins = plugins;
    this.store = store;
    this.router = router;
    this.components = {};
    this.hooks = hooks;
    Vue.component(InjectedComponents.name, InjectedComponents);
  }

  var _proto = PluginAPI.prototype;

  _proto.hasPlugin = function hasPlugin(name) {
    return this.plugins.filter(function (plugin) {
      return plugin.name === name;
    }).length > 0;
  };

  _proto.registerComponent = function registerComponent(position, component) {
    this.components[position] = this.components[position] || [];
    this.components[position].push(component);
    return this;
  };

  _proto.getComponents = function getComponents(position) {
    return this.components[position] || [];
  };

  _proto.processMarkdown = function processMarkdown(fn) {
    this.hooks.add('processMarkdown', fn);
    return this;
  };

  _proto.processHTML = function processHTML(fn) {
    this.hooks.add('processHTML', fn);
    return this;
  };

  _proto.extendMarkedRenderer = function extendMarkedRenderer(fn) {
    this.hooks.add('extendMarkedRenderer', fn);
    return this;
  };

  _proto.onContentUpdated = function onContentUpdated(fn) {
    this.hooks.add('onContentUpdated', fn);
    return this;
  };

  _proto.extendMarkdownComponent = function extendMarkdownComponent(fn) {
    this.hooks.add('extendMarkdownComponent', fn);
    return this;
  };

  return PluginAPI;
}();

export { PluginAPI as default };