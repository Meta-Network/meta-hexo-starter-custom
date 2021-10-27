const fs = require('hexo-fs');
const { deepMerge } = require('hexo-util');
const path = require('path');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { base_dir, render } = this;

  const metaConfigPath = path.join(base_dir, 'meta-space-config.yml');
  const isExists = await fs.exists(metaConfigPath);
  if (!isExists) return;

  const metaConfig = await render.render({ path: metaConfigPath });
  const { user, site } = metaConfig;
  let yiliaConfig = {};
  if (site && user) {
    yiliaConfig = {
      favicon: site.favicon,
      avatar: site.avatar,
      aboutme: site.description
    }
  }

  this.config.theme_config = deepMerge(this.config.theme_config, fluidConfig);
});