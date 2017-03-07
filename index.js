module.exports = {
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% blocks %} basic.showString("Hello world") {% endblocks %}"
        sim: {
            process: function(blk) {
                var code = blk.body;
                var base = this.book.config.get('pluginsConfig.pxt.base', 'pxt.microbit.org');
                var url = `https://${base}/beta---run?code=${code}`;
                var padding = '81.97%';
                return `<div style="position:relative;height:0;padding-bottom:${padding};overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="${url}" frameborder="0" sandbox="allow-popups allow-scripts allow-same-origin"></iframe></div>`;
            }
        },
        docs: {
            process: function(blk) {
                var code = encodeURIComponent(blk.body);
                var base = this.book.config.get('pluginsConfig.pxt.base', 'pxt.microbit.org');
                var url = `https://${base}/beta---docs#md:${code}:blocks:en`;
                var padding = '70%';
                return `<div style="position:relative;height:0;padding-bottom:${padding};overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="${url}" frameborder="0" sandbox="allow-popups allow-scripts allow-same-origin"></iframe></div>`;
            }
        },
        code: function (blk) {
            var lang = blk.kwargs.language;
            var code = blk.body;
            if (lang == "sim") {
                var url = `https://${base}/beta---run?code=${code}`;
                var padding = '81.97%';
                return `<div style="position:relative;height:0;padding-bottom:${padding};overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="${url}" frameborder="0" sandbox="allow-popups allow-scripts allow-same-origin"></iframe></div>`;
            }
            return ``;
        }
    }
};
