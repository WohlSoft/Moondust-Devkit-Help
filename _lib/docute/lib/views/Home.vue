<template>  
  <div class="Page">
    <SiteHeader />
    <div
      class="Wrap"
      :class="{
        'is-center': $store.getters.centerContent
      }">
      <Sidebar />
      <SidebarMask />
      <div
        class="Main"
        v-if="$store.state.fetchingFile">
        <content-loader
          :height="160"
          :width="400"
          :speed="2"
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <rect x="0" y="5" rx="4" ry="4" width="117" height="6.4" />
          <rect x="0" y="25" rx="3" ry="3" width="85" height="6.4" />
          <rect x="0" y="60" rx="3" ry="3" width="350" height="6.4" />
          <rect x="0" y="80" rx="3" ry="3" width="380" height="6.4" />
          <rect x="0" y="100" rx="3" ry="3" width="201" height="6.4" />
        </content-loader>
      </div>
      <div
        class="Main"
        v-else>
        <InjectedComponents position="main:start" />
        <component :is="MarkdownTitle" class="page-title" />
        <component :is="MarkdownBody" />
        <EditLink />
        <PrevNextLinks />
        <InjectedComponents position="main:end" />
      </div>
    </div>
  </div>
</template>

<script>
import jump from 'jump.js';
import { ContentLoader } from 'vue-content-loader';
import Sidebar from '../components/Sidebar.vue';
import SidebarMask from '../components/SidebarMask.vue';
import SiteHeader from '../components/Header.vue';
import PrevNextLinks from '../components/PrevNextLinks.vue';
import EditLink from '../components/EditLink.vue';
import hooks from '../hooks';
export default {
  name: 'PageHome',
  components: {
    ContentLoader: ContentLoader,
    Sidebar: Sidebar,
    SidebarMask: SidebarMask,
    SiteHeader: SiteHeader,
    PrevNextLinks: PrevNextLinks,
    EditLink: EditLink
  },
  mounted: function mounted() {
    this.fetchFile(this.$route.path);
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    next();

    if (to.path !== from.path) {
      this.fetchFile(to.path);
    }
  },
  watch: {
    '$route.hash': function $routeHash() {
      this.jumpToHash();
    },
    '$store.state.page.title': function $storeStatePageTitle(title) {
      var path = this.$route.path;
      var _this$$store$getters = this.$store.getters,
          config = _this$$store$getters.config,
          homePaths = _this$$store$getters.homePaths;

      if (homePaths.indexOf(path) > -1) {
        document.title = config.title;
      } else {
        document.title = title + " - " + config.title;
      }
    }
  },
  computed: {
    MarkdownTitle: function MarkdownTitle() {
      return {
        name: 'MarkdownTitle',
        template: "<h1>" + this.$store.state.page.title + "</h1>"
      };
    },
    MarkdownBody: function MarkdownBody() {
      var componentMixins = this.$store.getters.config.componentMixins;
      var component = {
        mixins: componentMixins || [],
        name: 'MarkdownBody',
        template: "<div class=\"markdown-body\">" + this.$store.state.page.content + "</div>"
      };
      hooks.process('extendMarkdownComponent', component);
      return component;
    }
  },
  methods: {
    fetchFile: function fetchFile(path) {
      return new Promise(function ($return, $error) {
        return Promise.resolve(this.$store.dispatch('fetchFile', path)).then(function ($await_1) {
          try {
            hooks.invoke('onContentWillUpdate', this);
            return Promise.resolve(this.$nextTick()).then(function ($await_2) {
              try {
                hooks.invoke('onContentUpdated', this);
                this.jumpToHash();
                return $return();
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }.bind(this), $error);
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }.bind(this), $error);
      }.bind(this));
    },
    jumpToHash: function jumpToHash() {
      var hash = this.$route.hash;

      if (hash) {
        var el = document.querySelector(hash);

        if (el) {
          var header = document.querySelector('.Header');
          jump(el, {
            duration: 0,
            offset: -(header.clientHeight + 30)
          });
        }
      }
    }
  }
};
</script>

<style src="../css/prism.css"></style>

<style src="../css/markdown.css"></style>

<style scoped>
:root {
  --accent-color: rgb(6, 125, 247);
  --sidebar-bg: white;
  --sidebar-section-title-color: rgb(136, 136, 136);
  --border-color: #eaeaea;
  --header-height: 60px;
  --code-font: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
}

.Docute {
  display: flex;
}

.Main {
  margin-left: 250px;
  padding: 30px 20px 80px 80px;
  margin-top: 60px;
  margin-top: var(--header-height)
}

@media (max-width: 768px) {

.Main {
    padding: 40px 20px;
    margin-left: 0;
    max-width: 100%
}
  }

.page-title {
  font-size: 3rem;
  margin: 0;
  margin-bottom: 1.4rem;
  font-weight: 300;
  line-height: 1.1;
}
</style>