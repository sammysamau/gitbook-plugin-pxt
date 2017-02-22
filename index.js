module.exports = {
    // Extend templating blocks
    blocks: {
        // Author will be able to write "{% blocks %} basic.showString("Hello world") {% endblocks %}"
        sim: {
            process: function(blk) {
                var code = blk.body;
                var url = `https://pxt.microbit.org/beta---run?code=${code}`;
                return '<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="' + url + '" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-scripts allow-same-origin" frameborder="0"></iframe></div>';
            }
        },
        blocks: {
            process: function(blk) {
                var code = encodeURIComponent('```' + blk.body + '```');
                var url = `https://pxt.microbit.org/beta---docs#md:${code}:blocks:en`;
                return '<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="' + url + '" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-scripts allow-same-origin" frameborder="0"></iframe></div>';
            }
        },
        js: {
            process: function(blk) {
                var code = encodeURIComponent('```' + blk.body + '```');
                var url = `https://pxt.microbit.org/beta---docs#md:${code}:js:en`;
                return '<div style="position:relative;height:0;padding-bottom:81.97%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="' + url + '" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-scripts allow-same-origin" frameborder="0"></iframe></div>';
            }
        }
    },

    // Extend templating filters
    filters: {
        // Author will be able to write "{{ 'test'|myFilter }}"
        myFilter: function(s) {
            return "Hello "+s;
        }
    },

    // Hook process during build
    hooks: {
        // For all the hooks, this represent the current generator

        // This is called before the book is generated
        "init": function() {
            console.log("init!");
        },

        // This is called after the book generation
        "finish": function() {
            console.log("finish!");
        }
    }
};
