## meta-hexo-starter-custom

[![Join the chat at https://gitter.im/meta-network-team/meta-hexo-starter](https://badges.gitter.im/meta-network-team/meta-hexo-starter.svg)](https://gitter.im/meta-network-team/meta-hexo-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Installation

Each branch of this repository is a Hexo Theme. You can also use it by clone this repository and switch to the branch.

```bash
$ git clone https://github.com/Meta-Network/meta-hexo-starter-custom.git
$ git checkout theme/<theme-name>
```

Then install the dependencies and start Hexo server. With `yarn` or `npm`:

```bash
# clone the theme's repo
$ ./install_theme.sh
$ yarn
$ yarn server
```

You will see below message if it's successfully started. Open the link `http://localhost:4000` with a web-browser to preview the theme.

```bash
yarn run v1.22.10
$ hexo server
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

### Build docker image

```shell
docker build -t meta-cms-worker-theme-<theme-name>:latest .
```

### Contributing

We accept themes that meet the following criteria.

- Under the MIT license.
- You created or just like.
- Have a public Git repository URL.

We welcome any PR or issue, please see our [contributing document](https://github.com/Meta-Network/meta-hexo-starter-custom/blob/main/CONTRIBUTING.md).

You could leave a comment if you want to resolve an issue.
