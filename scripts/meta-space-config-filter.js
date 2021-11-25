const { deepMerge } = require('hexo-util');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { metaSpaceConfig } = this.config;

  const { user, site } = metaSpaceConfig;
  let yiliaConfig = {};
  if (site && user) {
    yiliaConfig = {
      favicon: site.favicon,
      avatar: site.avatar,
      aboutme: site.description
    }
  }

  this.config.theme_config = deepMerge(this.config.theme_config, yiliaConfig);
});
