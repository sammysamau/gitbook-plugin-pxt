module.exports = {
    // Map of new blocks
    blocks: {
        blocks: {
            process: function(block) {
                var code = block.body;
               
                return {
                   url:       `https://pxt.microbit.org/beta---run?code=${code}`
                   // Get thumbnail for E-Books version
                   // 0.jpg is default full resolution image. 1–3.jpg is thumbnails
               };
            }
        }
    }
};
