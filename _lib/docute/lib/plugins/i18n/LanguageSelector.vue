<template>  
  <div class="LanguageSelector">
    <DocuteSelect @change="handleChange">
      <option disabled>Choose Language</option>
      <option
        v-for="language in languages"
        :value="language.path"
        :selected="isCurrentLocale(language.path)"
        :key="language.path">
        {{ language.language }}
      </option>
    </DocuteSelect>
  </div>
</template>

<script>
export default {
  computed: {
    languages: function languages() {
      var languageOverrides = this.$store.getters.languageOverrides;
      return Object.keys(languageOverrides).map(function (path) {
        return {
          path: path,
          language: languageOverrides[path].language
        };
      });
    }
  },
  methods: {
    isCurrentLocale: function isCurrentLocale(path) {
      return this.$store.getters.currentLocalePath === path;
    },
    handleChange: function handleChange(e) {
      var localePath = e.target.value;
      var exactPath = this.$route.path.replace(new RegExp("^" + this.$store.getters.currentLocalePath), localePath);
      this.$router.push(exactPath);
    }
  }
};
</script>

<style scoped>
.LanguageSelector {
  padding: 0 20px;
  margin-top: 10px;
}
</style>