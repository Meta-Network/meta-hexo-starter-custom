const { deepMerge } = require('hexo-util');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { metaSpaceConfig } = this.config;

  const { user, site } = metaSpaceConfig;
  let diasporaConfig = {};
  if (site && user) {
    // check the theme's official documention
    diasporaConfig = {
      favicon: site.favicon,
      keywords: site.keywords
    }
  }

  // use deepMerge to merge config
  this.config.theme_config = deepMerge(this.config.theme_config, diasporaConfig);
});