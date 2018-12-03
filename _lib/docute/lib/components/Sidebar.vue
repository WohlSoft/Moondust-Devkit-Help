<template>  
  <div class="Sidebar" :class="{isShown: $store.state.showSidebar}">
        <InjectedComponents position="sidebar:start" />
  
        <MobileHeaderNav v-if="$store.getters.config.nav" :nav="$store.getters.config.nav" />
  
        <div class="SidebarItems">
          <div
            v-for="(item, index) in $store.getters.sidebar"
            :class="['SidebarItem', item.title && 'hasTitle']"
            :key="index">
            <div class="ItemTitle" v-if="item.title">
              {{ item.title }}
            </div>
            <template v-for="(link, index) of item.links">
              <a
                v-if="isExternalLink(link.link)"
                :key="index"
                :href="link.link"
                class="ItemLink"
                target="_blank">
                {{ link.title }}
                <external-link-icon />
              </a>
              <router-link
                v-else
                :key="index"
                :to="link.link"
                class="ItemLink"
                :class="{active: $route.path === link.link}">
                {{ link.title }}
              </router-link>
              <div
                class="LinkToc"
                v-if="!$store.state.fetchingFile &&
                link.toc !== false &&
                link.link === $route.path &&
                $store.state.page.headings &&
                $store.state.page.headings.length > 0"
                :key="`toc-${index}`">
                <router-link
                  class="TocHeading"
                  :to="{hash: heading.slug}"
                  :data-level="heading.level"
                  v-for="heading in $store.state.page.headings"
                  :key="heading.slug"
                  v-html="heading.text">
                </router-link>
              </div>
            </template>
          </div>
        </div>
  
        <InjectedComponents position="sidebar:end" />
  
      </div>
</template>

<script>
import { isExternalLink } from '../utils';
import MobileHeaderNav from './MobileHeaderNav.vue';
export default {
  components: {
    MobileHeaderNav: MobileHeaderNav
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

.Sidebar {
  width: 250px;
  background: white;
  background: var(--sidebar-bg);
  position: fixed;
  top: 60px;
  top: var(--header-height);
  bottom: 0;
  z-index: 9;
  overflow-y: auto;
  padding: 30px 0;
  word-break: break-word;
  border-right: 1px solid #eaeaea;
  border-right: 1px solid var(--border-color)
}

.Sidebar a {
    text-decoration: none;
    color: #000;
  }

@media (max-width: 768px) {

.Sidebar {
    left: 0;
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
    width: 80%;
    transition: -webkit-transform 0.5s cubic-bezier(0.5, 0.32, 0.01, 1);
    transition: transform 0.5s cubic-bezier(0.5, 0.32, 0.01, 1);
    transition: transform 0.5s cubic-bezier(0.5, 0.32, 0.01, 1), -webkit-transform 0.5s cubic-bezier(0.5, 0.32, 0.01, 1)
}

    .Sidebar.isShown {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
  }

.SidebarItem:not(:last-child) {
    padding-bottom: 1.2rem;
    margin-bottom: 1.2rem;
  }

.SidebarItem.hasTitle .ItemLink {
      font-size: 0.9rem;
    }

.SidebarItem.hasTitle >>> .TocHeading {
    font-size: 0.9rem;
  }

.ItemTitle {
  font-size: 1rem;
  padding: 0 20px;
  margin-bottom: 10px;
  position: relative;
  color: rgb(136, 136, 136);
  color: var(--sidebar-section-title-color);
  text-transform: uppercase;
}

.ItemLink {
  padding: 2px 20px;
  display: flex;
  font-size: 1.1rem;
  position: relative
}

.ItemLink.active,
  .ItemLink:hover {
    font-weight: bold;
  }

.TocHeading {
  display: flex;
  line-height: 1.4;
  margin-bottom: 3px;
  position: relative
}

.TocHeading:first-child {
    margin-top: 5px;
  }

.TocHeading:last-child {
    margin-bottom: 5px;
  }

.TocHeading[data-level='2'] {
    margin-left: 35px;
  }

.TocHeading[data-level='3'] {
    margin-left: 50px;
  }

.TocHeading.router-link-exact-active {
    font-weight: bold
  }

.TocHeading.router-link-exact-active:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      right: 0;
      background: #333;
    }
</style>