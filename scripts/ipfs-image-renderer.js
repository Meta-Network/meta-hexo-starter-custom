hexo.extend.filter.register("markdown-it:renderer", md => {
    const { metaSpaceConfig } = hexo.config;
    const { gateway } = metaSpaceConfig;
    const originalHandler = md.renderer.rules.image;

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];

        const sourceUrl = new URL(token.attrGet("src"));
        if (sourceUrl.protocol === "ipfs:") {
            token.attrSet("src", `${gateway.ipfs.baseUrl}/${sourceUrl.hostname}`);
        }

        return originalHandler.call(this, tokens, idx, options, env, self);
    };
});
