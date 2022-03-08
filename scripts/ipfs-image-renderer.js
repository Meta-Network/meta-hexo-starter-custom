hexo.extend.filter.register("markdown-it:renderer", md => {
    const originalHandler = md.renderer.rules.image;
    const checkIPFS = /^ipfs:\/\//;

    function buildIPFSUrl(cid) {
        const defaultUrl = "https://ipfs.fleek.co/ipfs/";
        const baseUrl = hexo.config?.metaSpaceConfig?.gateway?.ipfs?.baseUrl || defaultUrl;
        return `${baseUrl}${cid}`
    }

    md.renderer.rules.image = function processIPFSImage(tokens, idx, options, env, self) {
        const token = tokens[idx];
        const tokenSrc = token.attrGet("src");
        if (checkIPFS.test(tokenSrc)) {
            const sourceUrl = new URL(tokenSrc);
            token.attrSet("src", buildIPFSUrl(sourceUrl.hostname));
        }
        return originalHandler.call(this, tokens, idx, options, env, self);
    };
});
