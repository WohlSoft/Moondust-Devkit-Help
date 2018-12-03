<template>  
  <div class="mobile-header-nav">
    <div class="header-nav-item" v-for="(item, index) in nav" :key="index">
      <a v-if="isExternalLink(item.link)" :href="item.link" target="_blank">
        {{ item.title }}
        <external-link-icon />
      </a>
      <router-link v-else :to="item.link" :class="{active: $route.path === item.link}">
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { isExternalLink } from '../utils';
export default {
  props: {
    nav: {
      type: Array,
      requried: true
    }
  },
  methods: {
    isExternalLink: isExternalLink
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

.mobile-header-nav {
  padding: 0 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  border-bottom: 1px solid #eaeaea;
  border-bottom: 1px solid var(--border-color)
}

.mobile-header-nav a {
    color: #000;
    text-decoration: none
  }

.mobile-header-nav a.active {
      color: rgb(6, 125, 247);
      color: var(--accent-color);
    }

@media (min-width: 768px) {

.mobile-header-nav {
    display: none
}
  }
</style>