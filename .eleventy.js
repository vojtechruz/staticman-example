const yaml = require("js-yaml");
const eleventySass = require("eleventy-sass");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Support YAML in _data
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy static files
  eleventyConfig.addPassthroughCopy("static");

  // Sass compilation
  eleventyConfig.addPlugin(eleventySass, {
    sass: {
      loadPaths: ["node_modules"]
    }
  });

  // Date filter
  eleventyConfig.addFilter("date", (dateObj, format) => {
    let dateTime;
    if (typeof dateObj === "number") {
      dateTime = DateTime.fromSeconds(dateObj);
    } else {
      dateTime = DateTime.fromJSDate(dateObj);
    }
    return dateTime.toFormat(format || "dd.MM.yyyy HH:mm");
  });

  // Convert comments object to a sorted array
  eleventyConfig.addFilter("getSortedComments", (commentsObj) => {
    if (!commentsObj) return [];
    return Object.values(commentsObj).sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "../_data"
    }
  };
};
