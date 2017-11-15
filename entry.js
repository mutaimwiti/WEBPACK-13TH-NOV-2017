/*
This is the entry file
 */
/*
We are requiring style.css which will be bundled by webpack
 */
require("./style.css");
/*
content.js is a dependency that will be recognized by webpack and loaded
 */
document.write(require("./content.js"));