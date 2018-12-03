import marked from './marked';
import { slugify } from '.';
export default (function (hooks) {
  var renderer = new marked.Renderer();
  var slugs = [];

  renderer.heading = function (text, level, raw) {
    var env = this.options.env;
    var slug = slugify(raw);
    slugs.push(slug);
    var sameSlugCount = slugs.filter(function (v) {
      return v === slug;
    }).length;

    if (sameSlugCount > 1) {
      slug += "-" + sameSlugCount;
    }

    if (level === 1) {
      env.title = text; // Remove h1 header

      return '';
    }

    if (level === 2 || level === 3) {
      env.headings.push({
        level: level,
        raw: raw,
        // Remove trailing HTML
        text: raw.replace(/<.*>\s*$/g, ''),
        slug: slug
      });
    }

    var tag = "h" + level;
    return "<" + tag + " id=\"" + slug + "\">" + text + "</" + tag + ">";
  }; // Disable template interpolation in code


  renderer.codespan = function (text) {
    return "<code v-pre>" + text + "</code>";
  };

  var origCode = renderer.code;

  renderer.code = function (code, lang, escaped, opts) {
    var res = origCode.call(this, code, lang, escaped).replace(/^<pre>/, '<pre v-pre>');

    if (opts && opts.highlight) {
      var codeMask = code.split('\n').map(function (v, i) {
        i += 1;
        var shouldHighlight = opts.highlight.some(function (number) {
          if (typeof number === 'number') {
            return number === i;
          }

          if (typeof number === 'string') {
            var _number$split$map = number.split('-').map(Number),
                start = _number$split$map[0],
                end = _number$split$map[1];

            return i >= start && (!end || i <= end);
          }

          return false;
        });
        return shouldHighlight ? "<span class=\"code-line highlighted\">&#8203;</span>" : "<span class=\"code-line\">&#8203;</span>";
      }).join('');
      res += "<div class=\"code-mask\">" + codeMask + "</div>";
    }

    return "<div data-lang=\"" + (lang || '') + "\" class=\"pre-wrapper\">" + res + "</div>";
  };

  return hooks.process('extendMarkedRenderer', renderer);
});