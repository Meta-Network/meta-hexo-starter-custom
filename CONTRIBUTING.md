# Contributing

## Pull request

We use the plugin [`hexo-filter-meta-space`](https://www.npmjs.com/package/hexo-filter-meta-space), a common configuration file `meta-space-config.yml` and script files `scripts/meta-space-config-filter.js`, `scripts/meta-space-post-filter.js` to adapt multiple themes. We focus on these features.

### Checkout

1. Fork [Meta-Network/meta-hexo-starter-custom](https://github.com/Meta-Network/meta-hexo-starter-custom).

2. Clone the repository.

    ``` bash
    $ git clone https://github.com/<username>/meta-hexo-starter-custom.git
    $ cd meta-hexo-starter-custom
    ```

### Submitting a new theme template

We accept themes that meet the following criteria.

- Under the MIT license.
- You created, forked or just like.
- Have a public Git repository URL.

FYI: 

- [New theme Pull Request example](https://github.com/Meta-Network/meta-hexo-starter-custom/pull/8)
- [New theme request Issue example](https://github.com/Meta-Network/meta-hexo-starter-custom/issues/7)

#### Steps

1. Create a theme branch.

    ``` bash
    $ git checkout -b theme/<theme_name>
    ```

2. Edit `install_theme.sh`:

    ```shell
    #!/bin/bash
    git clone <theme_repo_url> themes/<theme_name>
    ```

3. Install dependencies:

    ```bash
    # optional, check the theme's official documentation
    $ yarn add <theme_dependencies>
    # see the section 'Add meta-space-config-filter'
    $ yarn add hexo-filter-meta-space 
    # install other dependencies in package.json
    $ yarn
    ```

4. Create `_config.[theme].yml` and delete the existed one (See [Hexo documention](https://hexo.io/docs/configuration#Alternate-Theme-Config)). Edit `_config.yml` :
    ```yaml
    theme: <theme_name>
    ```

5. Run the additional commands requested in the theme's official documentation.

6. Push the branch.

    ``` bash
    $ git commit -a
    $ git push
    ```

7. Create a pull request and describe the change.

### Configuring meta-space-config-filter

FYI: 

- [Script Pull Request for theme example](https://github.com/Meta-Network/meta-hexo-starter-custom/pull/3)

#### Steps

1. Check into the theme's branch, install dependencies:

    ``` bash
    $ git checkout theme/<theme_name>
    # see the section 'Add meta-space-config-filter'
    $ yarn add hexo-filter-meta-space 
    # install other dependencies in package.json
    $ yarn
    ```

2. Check `meta-space-config.yml`.

    ```yaml
    # meta-space-config.yml
    user:
      username: Remi
      nickname: Remi
    site:
      title: Remi's test site
      subtitle: Crystal
      description: This is a Meta Space test site
      keywords:
        - Test
        - Meta Space
        - Hexo
      favicon: ipfs://bafybeiftknbhe6aainxnkdhkm7kdfv7cl4chz37fresnzks2cqwawfv6ki
      avatar: https://avatars.githubusercontent.com/u/68253563?v=4
      language: zh-CN
      timezone: Asia/Shanghai
      domain: remi-site5.metaspaces.life
    gateway:
      ipfs:
        baseUrl: https://ipfs.fleek.co/ipfs/
    ```

3. Create or edit `scripts/meta-space-config-filter.js`. 

    ```js
    const fs = require('hexo-fs');
    const { deepMerge } = require('hexo-util');
    const path = require('path');
    
    // eslint-disable-next-line no-undef
    hexo.extend.filter.register('after_init', async function () {
      // load meta-space-config.yml
      const { metaSpaceConfig } = this.config;
      if (!metaSpaceConfig) return;
    
      const { user, site } = metaConfig;
      const auroraConfig = {};
    
      if (site && user) {
        // check the theme's official documention
        auroraConfig.site = {
          author: user.username,
          nick: user.nickname,
          subtitle: site.subtitle,
          description: site.description,
          language: site.language,
          logo: site.avatar,
          avatar: site.avatar,
        }
      }
    
      // use deepMerge to merge config
      this.config.theme_config = deepMerge(this.config.theme_config, auroraConfig);
    });
    ```

4. Push the branch.

    ``` bash
    $ git add scripts/meta-space-config-filter.js
    $ git commit
    $ git push
    ```

5. Create a pull request and describe the change.

### Configuring meta-space-post-filter

1. Check into the theme's branch, install dependencies:

    ``` bash
    $ git checkout theme/<theme_name>
    $ yarn
    $ yarn add hexo-filter-meta-space
    ```

2. Check `meta-space-config.yml` if you load this config in the script.

    ```yaml
    # meta-space-config.yml
    user:
      username: Remi
      nickname: Remi
    site:
      title: Remi's test site
      subtitle: Crystal
      description: This is a Meta Space test site
      keywords:
        - Test
        - Meta Space
        - Hexo
      favicon: ipfs://bafybeiftknbhe6aainxnkdhkm7kdfv7cl4chz37fresnzks2cqwawfv6ki
      avatar: https://avatars.githubusercontent.com/u/68253563?v=4
      language: zh-CN
      timezone: Asia/Shanghai
      domain: remi-site5.metaspaces.life
    gateway:
      ipfs:
        baseUrl: https://ipfs.fleek.co/ipfs/
    ```

3. Create or edit `scripts/meta-space-post-filter.js`.

    ```js
    hexo.extend.filter.register('before_post_render', function (data) {
      // modify front-matter for posts
      data.cover && (data.index_img = data.cover);
      return data;
    });
    ```

4. Push the branch.

    ``` bash
    $ git add scripts/meta-space-post-filter.js
    $ git commit
    $ git push
    ```

5. Create a pull request and describe the change.


## Testing

Before you submitting the pull request. Start the Hexo server to check your settings are working properly.

``` bash
$ yarn server --debug
```

## Reporting Issues

As a Hexo project, solutions can be found in [Hexo Troubleshooting](https://hexo.io/docs/troubleshooting.html).

If you can't find the answer, please report it on [GitHub](https://github.com/Meta-Network/meta-hexo-starter-custom/issues).
 
1. Represent the problem in [debug mode](https://hexo.io/docs/commands.html#Debug_mode).
2. Run `hexo version` and check the version info.
3. Post both debug message and version info on GitHub.
