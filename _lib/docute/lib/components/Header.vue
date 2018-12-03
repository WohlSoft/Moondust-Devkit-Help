<template>  
  <header class="Header">
    <div class="Wrap" :class="{'is-center': $store.getters.centerContent}">
      <div class="header-inner">
        <div class="header-left">
          <h1 class="site-title">
            <SidebarToggle />
            <router-link to="/">{{ $store.getters.config.title }}</router-link>
          </h1>
          <HeaderNav v-if="leftNav" :nav="leftNav" />
        </div>
        <div class="header-right">
          <HeaderNav v-if="rightNav" :nav="rightNav" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNav from './HeaderNav.vue';
import SidebarToggle from './SidebarToggle.vue';
export default {
  components: {
    HeaderNav: HeaderNav,
    SidebarToggle: SidebarToggle
  },
  computed: {
    leftNav: function leftNav() {
      var nav = this.$store.getters.config.nav;
      return nav && nav.filter(function (item) {
        return item.position === 'left';
      });
    },
    rightNav: function rightNav() {
      var nav = this.$store.getters.config.nav;
      return nav && nav.filter(function (item) {
        return item.position === 'right' || !item.position;
      });
    }
  }
};
</script>

<style scoped>
:root {
  --accent-color: rgb(6, 125, 247);
  --sidebar-bg: white;
  --sidebar-section-title-color: rgb(136, 136, 136);
  --border-color: #eaeaea;
  --header-height: 60px;
  --code-font: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
}

.Header {
  height: 60px;
  height: var(--header-height);
  line-height: 60px;
  line-height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 33;
  border-bottom: 1px solid #eaeaea;
  border-bottom: 1px solid var(--border-color);
  background: white;
  background: var(--sidebar-bg);
}

.site-title {
  font-weight: normal;
  margin: 0 25px 0 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center
}

.site-title a {
    color: #000;
    text-decoration: none;
  }

.header-inner {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
}
</style>