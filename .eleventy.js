module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/data');
  eleventyConfig.addPassthroughCopy('./src/styles');
  // eleventyConfig.addPassthroughCopy('./src/models');
  // eleventyConfig.addPassthroughCopy('./src/utils');

  return {
    dir: {
      input: "./src",
      output: "./public",
    }
  };
};
