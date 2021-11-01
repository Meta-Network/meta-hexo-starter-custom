const fs = require('hexo-fs');
const { deepMerge } = require('hexo-util');
const path = require('path');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { metaSpaceConfig } = this.config;

  const { user, site } = metaSpaceConfig;
  let liteConfig = {};
  if (site && user) {
    liteConfig = {
      avatar: {
        url: site.avatar
      },
    }
  }

  this.config.theme_config = deepMerge(this.config.theme_config, liteConfig);
});
