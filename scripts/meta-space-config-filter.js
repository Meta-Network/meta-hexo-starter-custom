const { deepMerge } = require('hexo-util');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { metaSpaceConfig } = this.config;

  const { user, site } = metaSpaceConfig;
  let freemindConfig = {};
  if (site && user) {
    freemindConfig = {
      favicon: site.favicon,
      slogan: site.subtitle
    }
  }

  this.config.theme_config = deepMerge(this.config.theme_config, freemindConfig);
});
