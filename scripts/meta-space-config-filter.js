const { deepMerge } = require('hexo-util');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { metaSpaceConfig } = this.config;

  const { user, site } = metaSpaceConfig;
  let dailyConfig = {};
  if (site && user) {
    // check the theme's official documention
    dailyConfig = {
        title: site.title,
        subtitle: site.subtitle,
        favicon: site.favicon,
        avatar: site.avatar
    }
  }

  // use deepMerge to merge config
  this.config.theme_config = deepMerge(this.config.theme_config, dailyConfig);
});