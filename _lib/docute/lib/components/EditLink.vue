<template>  
  <div v-if="editLink" class="EditLink">
    <a target="_blank" :href="`${editLink}`">
      <svg class="icon" id="i-compose" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
      </svg> {{ editLinkText }}</a>
  </div>
</template>

<script>
export default {
  computed: {
    editLinkBase: function editLinkBase() {
      return this.$store.getters.config.editLinkBase;
    },
    editLink: function editLink() {
      var _this$$store$state$pa = this.$store.state.page,
          editLink = _this$$store$state$pa.editLink,
          file = _this$$store$state$pa.file;

      if (editLink) {
        return editLink;
      }

      if (file) {
        return /^https?:\/\//.test(file) ? file : this.editLinkBase + file;
      }
    },
    editLinkText: function editLinkText() {
      return this.$store.getters.config.editLinkText || 'Edit this page';
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

.EditLink {
  margin-top: 50px
}

.EditLink a {
    text-decoration: none;
    display: flex;
    align-items: center
  }

.EditLink a:hover {
      text-decoration: underline;
    }

.icon {
  width: 18px;
  height: 18px;
  margin-right: 10px;
}
</style>