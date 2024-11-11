module.exports = config => {
    config.addPassthroughCopy("src/styles.css");
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'dist'
        }
    };
};
