/* globals "1.15.0" */
import Vue from 'vue';
import Vuex from 'vuex';
import fetch from 'isomorphic-unfetch';
import marked from './utils/marked';
import highlight from './utils/highlight';
import { getFilenameByPath, isExternalLink } from './utils';
import markedRenderer from './utils/markedRenderer';
import hooks from './hooks';
import load from './utils/load';
import prismLanguages from './utils/prismLanguages';
Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    originalConfig: {},
    page: {
      title: null,
      headings: null,
      html: ''
    },
    env: {},
    showSidebar: false,
    fetchingFile: true
  },
  mutations: {
    SET_ORIGINAL_CONFIG: function SET_ORIGINAL_CONFIG(state, config) {
      state.originalConfig = config;
    },
    SET_PAGE: function SET_PAGE(state, page) {
      state.page = page;
    },
    TOGGLE_SIDEBAR: function TOGGLE_SIDEBAR(state, show) {
      state.showSidebar = typeof show === 'boolean' ? show : !state.showSidebar;
    },
    SET_FETCHING: function SET_FETCHING(state, fetching) {
      state.fetchingFile = fetching;
    },
    SET_ENV: function SET_ENV(state, env) {
      state.env = env;
    }
  },
  actions: {
    fetchFile: function fetchFile(_ref, path) {
      return new Promise(function ($return, $error) {
        var commit, getters, dispatch, pageData, page, env;
        commit = _ref.commit, getters = _ref.getters, dispatch = _ref.dispatch;
        commit('TOGGLE_SIDEBAR', false);
        commit('SET_FETCHING', true);
        return Promise.resolve(getters.pageData).then(function ($await_2) {
          try {
            pageData = $await_2;

            if (typeof pageData === 'function') {
              return Promise.resolve(pageData(store)).then(function ($await_3) {
                try {
                  pageData = $await_3;
                  return $If_1.call(this);
                } catch ($boundEx) {
                  return $error($boundEx);
                }
              }.bind(this), $error);
            }

            function $If_1() {
              page = Object.assign({
                markdown: true
              }, pageData);

              if (!page.content && !page.file) {
                page.file = getFilenameByPath(getters.config.sourcePath, path);
              }

              return Promise.resolve(Promise.all([!page.content && fetch(page.file).then(function (res) {
                return res.text();
              }).then(function (res) {
                page.content = res;
              }), dispatch('fetchPrismLanguages')])).then(function ($await_4) {
                try {
                  // TODO: remove processMarkdown hook
                  page.content = hooks.process('processMarkdown', page.content);
                  page = hooks.process('processPage', page);
                  env = {
                    headings: []
                  };

                  if (page.markdown) {
                    page.content = marked(page.content, {
                      renderer: markedRenderer(hooks),
                      highlight: highlight,
                      env: env
                    });
                  }

                  page.content = hooks.process('processHTML', page.content);
                  page.headings = env.headings;

                  if (!page.title) {
                    page.title = env.title;
                  }

                  commit('SET_PAGE', page);
                  commit('SET_ENV', env);
                  commit('SET_FETCHING', false);
                  return $return();
                } catch ($boundEx) {
                  return $error($boundEx);
                }
              }, $error);
            }

            return $If_1.call(this);
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }.bind(this), $error);
      });
    },
    fetchPrismLanguages: function fetchPrismLanguages(_ref2) {
      var getters = _ref2.getters;
      var langs = getters.config.highlight;

      if (!langs || langs.length === 0) {
        return Promise.resolve();
      }

      return load(langs.reduce(function (res, lang) {
        if (prismLanguages[lang]) {
          res = res.concat(prismLanguages[lang]);
        }

        res.push(lang);
        return res;
      }, []).filter(function (lang, i, arr) {
        // Dedupe
        return arr.indexOf(lang) === i && prismLanguages.builtin.indexOf(lang) === -1;
      }).map(function (lang) {
        return "https://unpkg.com/prismjs@" + "1.15.0" + "/components/prism-" + lang + ".js";
      }), 'prism-languages');
    }
  },
  getters: {
    target: function target(_ref3) {
      var _target = _ref3.originalConfig.target;
      if (!_target) return 'docute';
      if (_target[0] === '#') return _target.slice(1);
      return _target;
    },
    languageOverrides: function languageOverrides(_ref4) {
      var originalConfig = _ref4.originalConfig;
      // `locales` is for legacy support
      var overrides = originalConfig.overrides || originalConfig.locales;
      return overrides && Object.keys(overrides).reduce(function (res, path) {
        if (overrides[path].language) {
          res[path] = overrides[path];
        }

        return res;
      }, {});
    },
    currentLocalePath: function currentLocalePath(_ref5, _ref6) {
      var route = _ref5.route;
      var languageOverrides = _ref6.languageOverrides;

      if (languageOverrides) {
        // Is it a locale?
        var _arr = Object.keys(languageOverrides);

        for (var _i = 0; _i < _arr.length; _i++) {
          var localePath = _arr[_i];

          if (localePath !== '/') {
            var RE = new RegExp("^" + localePath);

            if (RE.test(route.path)) {
              return localePath;
            }
          }
        }
      }

      return '/';
    },
    config: function config(_ref7, _ref8) {
      var originalConfig = _ref7.originalConfig;
      var currentLocalePath = _ref8.currentLocalePath,
          languageOverrides = _ref8.languageOverrides;
      return languageOverrides ? Object.assign({}, originalConfig, languageOverrides[currentLocalePath]) : originalConfig;
    },
    homePaths: function homePaths(_, _ref9) {
      var languageOverrides = _ref9.languageOverrides;
      var localePaths = languageOverrides ? Object.keys(languageOverrides) : [];
      return localePaths.concat(['/']);
    },
    sidebarLinks: function sidebarLinks(_, _ref10) {
      var sidebar = _ref10.sidebar;
      return sidebar ? sidebar.reduce(function (res, next) {
        return res.concat(next.links);
      }, []).filter(function (item) {
        return !isExternalLink(item.link);
      }) : [];
    },
    sidebar: function sidebar(_, _ref11) {
      var config = _ref11.config;
      var sidebar = config.sidebar || [];
      return typeof sidebar === 'function' ? sidebar(store) : sidebar;
    },
    centerContent: function centerContent(_, _ref12) {
      var config = _ref12.config;
      return config.centerContent !== false;
    },
    pageData: function pageData(_ref13, _ref14) {
      var path = _ref13.route.path;
      var config = _ref14.config;
      return Promise.resolve(typeof config.pageData === 'function' ? config.pageData(store) : config.pageData).then(function (pageData) {
        return pageData && pageData[path];
      }).catch(console.error);
    }
  }
});

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;