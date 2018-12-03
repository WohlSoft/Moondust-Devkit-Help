export var isExternalLink = function isExternalLink(link) {
  return /^https?:\/\//.test(link);
};
export var slugify = function slugify(str) {
  var RE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
  var REPLACEMENT = '-';
  var WHITESPACE = /\s/g;
  return str.trim().replace(RE, '').replace(WHITESPACE, REPLACEMENT).toLowerCase();
};
export var getFilenameByPath = function getFilenameByPath(sourcePath, path) {
  sourcePath = sourcePath || '';
  sourcePath = sourcePath.replace(/\/$/, '');

  if (/\.md$/.test(path)) {
    return sourcePath + path;
  }

  var filepath = /\/$/.test(path) ? path + "README.md" : path + ".md";
  return sourcePath + filepath;
};