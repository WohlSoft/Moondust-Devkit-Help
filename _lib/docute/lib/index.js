function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import PluginAPI from './PluginAPI';
import Root from './components/Root.vue';
import store from './store';
import createRouter from './router';
import { inBrowser } from './utils';
import alternativeComponents from './utils/alternativeComponents';
import ImageZoom from './components/ImageZoom.vue';
import Badge from './components/Badge.vue';
import DocuteSelect from './components/DocuteSelect.vue';
import Note from './components/Note.vue';
import Gist from './components/Gist.vue';
import Loading from './components/Loading.vue';
import ExternalLinkIcon from './components/icons/ExternalLinkIcon.vue';
import { INITIAL_STATE_NAME } from './utils/constants'; // Built-in plugins

import i18nPlugin from './plugins/i18n';
import evaluateContentPlugin from './plugins/evaluateContent';
import versionsPlugin from './plugins/versions';
import bannerFooter from './plugins/banner-footer';
import darkThemeToggler from './plugins/dark-theme-toggler';
import searchPlugin from './plugins/search';
Vue.component(ImageZoom.name, ImageZoom);
Vue.component(Badge.name, Badge);
Vue.component(DocuteSelect.name, DocuteSelect);
Vue.component(Note.name, Note);
Vue.component(ExternalLinkIcon.name, ExternalLinkIcon);
Vue.component(Gist.name, Gist);
Vue.component(Loading.name, Loading);
Vue.use(alternativeComponents);
Vue.mixin({
  created: function created() {
    var pluginApi = this.$options.pluginApi || this.$root.$pluginApi;

    if (pluginApi) {
      this.$pluginApi = pluginApi;
    }
  }
});

var Docute = /*#__PURE__*/function () {
  function Docute(config) {
    if (config === void 0) {
      config = {};
    }

    var router = createRouter(config.router);
    sync(store, router);
    this.router = router;
    this.store = store;
    store.commit('SET_CONFIG', Object.assign({
      title: inBrowser && document.title
    }, config));
    var plugins = [i18nPlugin, evaluateContentPlugin, versionsPlugin, bannerFooter, darkThemeToggler, searchPlugin].concat(store.state.originalConfig.plugins || []);
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
    var target = store.getters.target; // Force hydration when there's initial state

    if (window[INITIAL_STATE_NAME]) {
      this.app.$mount("#" + target, true);
    } else {
      this.app.$mount("#" + target);
    }

    return this;
  }
  /**
   * @private
   */
  ;

  _proto.applyPlugins = function applyPlugins() {
    for (var _iterator = _createForOfIteratorHelperLoose(this.pluginApi.plugins), _step; !(_step = _iterator()).done;) {
      var plugin = _step.value;
      plugin.extend(this.pluginApi);
    }
  };

  return Docute;
}();

Docute.version = "4.11.0";
export default Docute;

if (typeof window !== 'undefined') {
  window.Vue = Vue; // eslint-disable-next-line

  window['"4.11.0"'] = "4.11.0";
}