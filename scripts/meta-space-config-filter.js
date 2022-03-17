const { deepMerge } = require('hexo-util');

// eslint-disable-next-line no-undef
hexo.extend.filter.register('after_init', async function () {
  const { metaSpaceConfig } = this.config;

  const { user, site } = metaSpaceConfig;
  let bearConfig = {};
  if (site && user) {
    // check the theme's official documention
    bearConfig = {
      title: site.title,
      author: user.username,
      aboutme: site.subtitle,
      favicon: site.favicon,
      avatar: site.avatar,
      domain: site.domain,
      description: site.description
    }
  }

  // use deepMerge to merge config
  this.config.theme_config = deepMerge(this.config.theme_config, bearConfig);
});

hexo.extend.filter.register('before_post_render', function (data) {
  // Metadata
  if (this.config.metaSpaceConfig?.gateway?.dataViewer?.baseUrl && data?.serverVerificationMetadataStorageType && data?.serverVerificationMetadataRefer) {
    data.MetadataUrl =
      `${this.config.metaSpaceConfig.gateway.dataViewer.baseUrl}${data.serverVerificationMetadataStorageType}/${data.serverVerificationMetadataRefer}`;
  }
  return data;
});
