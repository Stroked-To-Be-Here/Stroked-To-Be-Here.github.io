module.exports = config => {
    // Copy CSS
    config.addPassthroughCopy("src/styles.css");
    
    // Copy images
    config.addPassthroughCopy("src/images");
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'docs'
        }
    };
};
