import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import PluginAPI from './PluginAPI';
import Root from './components/Root.vue';
import store from './store';
import createRouter from './router';
import alternativeComponents from './utils/alternativeComponents';
import ImageZoom from './components/ImageZoom.vue';
import Badge from './components/Badge.vue';
import DocuteSelect from './components/DocuteSelect.vue';
import ExternalLinkIcon from './components/icons/ExternalLinkIcon.vue'; // Built-in plugins

import i18nPlugin from './plugins/i18n';
import evaluateContentPlugin from './plugins/evaluateContent';
import versionsPlugin from './plugins/versions';
Vue.component(ImageZoom.name, ImageZoom);
Vue.component(Badge.name, Badge);
Vue.component(DocuteSelect.name, DocuteSelect);
Vue.component(ExternalLinkIcon.name, ExternalLinkIcon);
Vue.use(alternativeComponents);
Vue.mixin({
  created: function created() {
    var pluginApi = this.$options.pluginApi || this.$root.$pluginApi;

    if (pluginApi) {
      this.$pluginApi = pluginApi;
    }
  }
});

var Docute =
/*#__PURE__*/
function () {
  function Docute(config) {
    if (config === void 0) {
      config = {};
    }

    var router = createRouter(config.router);
    sync(store, router);
    store.commit('SET_ORIGINAL_CONFIG', Object.assign({
      title: document.title
    }, config));
    var plugins = [i18nPlugin, evaluateContentPlugin, versionsPlugin].concat(store.state.originalConfig.plugins || []);
    this.pluginApi = new PluginAPI({
      plugins: plugins,
      store: store,
      router: router
    });
    this.applyPlugins();
    this.app = new Vue({
      router: router,
      store: store,
      pluginApi: this.pluginApi,
      render: function render(h) {
        return h(Root);
      }
    });

    if (config.mount !== false) {
      this.mount();
    }
  }

  var _proto = Docute.prototype;

  _proto.mount = function mount() {
    var target = store.getters.target;
    this.app.$mount("#" + target);
    this.collectInstance();
    return this;
  };
  /**
   * @private
   */


  _proto.applyPlugins = function applyPlugins() {
    for (var _iterator = this.pluginApi.plugins, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var plugin = _ref;
      plugin.extend(this.pluginApi);
    }
  };
  /**
   * Used in pre-render
   * @private
   */


  _proto.collectInstance = function collectInstance() {
    if (typeof window !== 'undefined' && window.__DOCUTE_INSTANCE__) {
      window.__DOCUTE_INSTANCE__ = this;
    }
  };

  return Docute;
}();

Docute.version = "0.0.0-managed-by-semantic-release";
export default Docute;

if (typeof window !== 'undefined') {
  window.Vue = Vue;
}