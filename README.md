# CSSconf AR

## Installation
Clone the repo && run `npm i`. After everything is successfully installed run `gulp`. Gulp will spin up a local server at `localhost:2016`.

## Tasks
By running `gulp` (the default task) you get the following:
- local server with livereload
- postCSS tasks
  - resolve all `@import`s
  - unwrap all nested content
  - enable custom properties
  - enable nesting
  - enable custom media and media min-max
  - enable color functions
  - run Autoprefixer
  - minify all CSS
  - pack the same media queries together
- watch tasks for all HTML, CSS & JS files
- concatenation & minification for JS files

## Information

This project uses plain CSS on steroids (postCSS). It enables prior mentioned features. For more information check the `gulpfile.js` and [cssnext{}](http://cssnext.io/features/).

Production files are not checked in during development to avoid unnecessary merge conflicts. The default gulp task (`gulp`) always generates new CSS and JS files on start up.

This project includes stylelint.
