<template>  
  <div class="VersionsSelector">
    <DocuteSelect @change="handleChange">
      <option disabled>Choose Version</option>
      <option
        v-for="(value, key) in $store.getters.config.versions"
        :key="key"
        :value="value.link"
        :selected="currentVersionLink === value.link">
        {{ key }}
      </option>
    </DocuteSelect>
  </div>
</template>

<script>
import { isExternalLink } from '../../utils';
export default {
  methods: {
    handleChange: function handleChange(e) {
      var link = e.target.value;

      if (isExternalLink(link)) {
        location.href = link;
      } else {
        this.$router.push(link);
      }
    }
  },
  computed: {
    currentVersionLink: function currentVersionLink() {
      var versions = this.$store.getters.config.versions;

      var _arr = Object.keys(versions);

      for (var _i = 0; _i < _arr.length; _i++) {
        var version = _arr[_i];
        var link = versions[version].link;

        if (link !== '/' && this.$route.path.startsWith(link)) {
          return link;
        }
      }

      return '/';
    }
  }
};
</script>

<style scoped>
.VersionsSelector {
  padding: 0 20px;
  margin-top: 10px;
}
</style>