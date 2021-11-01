const fs = require('hexo-fs');
const got = require('got');
const path = require('path');
const isURL = require('isurl');
hexo.extend.generator.register('favicon', async function (locals) {

  const { metaSpaceConfig } = this.config;
  const { site, gateway } = metaSpaceConfig;
  if (site.favicon) {
    const faviconURL = new URL(site.favicon);
    if (isURL(faviconURL)) {

      return {
        path: 'static/favicon.ico',
        data: function () {
          if (faviconURL.protocol === "ipfs:") {
            return got.stream(`${gateway.ipfs.baseUrl}${faviconURL.hostname}`);
          }

          return got.stream(site.favicon);
        }
      };
    }
  }

});