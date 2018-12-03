<template>  
  <div class="prev-next-links" v-if="prevLinkItem || nextLinkItem">
    <div class="prev-link" v-if="prevLinkItem">
      ← <router-link
          :to="prevLinkItem.link">
        {{ prevLinkItem.title }}
      </router-link>
    </div>
  
    <div class="next-link" v-if="nextLinkItem">
      <router-link
        :to="nextLinkItem.link">
        {{ nextLinkItem.title }}
      </router-link> →
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: Object.assign({}, mapGetters(['sidebarLinks']), {
    currentLink: function currentLink() {
      return this.$route.path;
    },
    currentLinkIndex: function currentLinkIndex() {
      // Related:
      // - https://github.com/vuejs/vue/issues/8728
      // - https://github.com/leptosia/docute/pull/171
      var sidebarLinks = this.sidebarLinks;

      for (var i = 0; i < sidebarLinks.length; i++) {
        var item = sidebarLinks[i];

        if (item.link === this.currentLink) {
          return i;
        }
      }

      return false;
    },
    prevLinkItem: function prevLinkItem() {
      return this.currentLinkIndex && this.sidebarLinks[this.currentLinkIndex - 1];
    },
    nextLinkItem: function nextLinkItem() {
      return this.currentLinkIndex && this.sidebarLinks[this.currentLinkIndex + 1];
    }
  })
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

.prev-next-links {
  overflow: auto;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #eaeaea;
  border-top: 1px solid var(--border-color)
}

.prev-next-links a {
    text-decoration: none
  }

.prev-next-links a:hover {
      text-decoration: underline;
    }

.prev-link {
  float: left;
}

.next-link {
  float: right;
}
</style>