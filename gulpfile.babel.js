/**
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import swPrecache from 'sw-precache';
import gulpLoadPlugins from 'gulp-load-plugins';
import {output as pagespeed} from 'psi';
import pkg from './package.json';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
var rename = require('gulp-rename');
var order = require('gulp-order');

// Lint JavaScript
gulp.task('lint', () =>
  gulp.src(['app/scripts/**/*.js','app/assets/js/*.js','app/assets/**/*.js'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

// Optimize images
gulp.task('images', () =>
  gulp.src(['app/images/**/*','app/assets/images/**/*'])
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size({title: 'images'}))
);

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp.src([
    'app/*',
    '!app/*.html',
    'node_modules/apache-server-configs/dist/.htaccess'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}))
);

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
 //   'app/styles/**/*.scss',
    'app/styles/**/*.css',
  //  'app/assets/**/*.scss',
    'app/assets/**/*.css'
  ])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    .pipe($.if('*.css', $.cssnano({
  safe: true
}
    )))
    .pipe($.size({title: 'styles'}))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/assets'));
});


// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enables ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
//gulp.task('scripts', () =>
//gulp.src([
    // Note: Since we are not using useref in the scripts build pipeline,
    //       you need to explicitly list your scripts here in the right order
    //       to be correctly concatenated
//    './app/assets/js/revolution-custom.js'
    // Other scripts
//  ])
//  .pipe($.newer('.tmp/scripts'))
// .pipe($.sourcemaps.init())
//  .pipe($.babel())
//  .pipe($.sourcemaps.write())
//  .pipe(gulp.dest('.tmp/scripts'))
//  .pipe($.concat('main.min.js'))
//  .pipe($.uglify({preserveComments: 'some'}))
  // Output files
//  .pipe($.size({title: 'scripts'}))
/// .pipe($.sourcemaps.write('.'))
//  .pipe(gulp.dest('dist/scripts'))
//);
// Concatenate and minify JavaScript. Optionally transpiles ES2015 code to ES5.
// to enables ES2015 support remove the line `"only": "gulpfile.babel.js",` in the
// `.babelrc` file.
gulp.task('scripts1', function() {
  return gulp.src([
      // Note: Since we are not using useref in the scripts build pipeline,
      //       you need to explicitly list your scripts here in the right order
      //       to be correctly concatenated
      './app/scripts/main.js',
    //'./app/assets/js/*.js', '!./app/assets/js/*.min.js',
    //  './app/assets/js/',
      './app/assets/js/template.js',
      './app/assets/js/contact-form.js',
      './app/assets/js/revolution-custom.js',
      './app/assets/js/cube-portfolio.js',
      './app/assets/js/pricing.js',
      './app/assets/js/masterslider-custom.js',

      // Other scripts
    ])
    .pipe($.newer('.tmp/scriptsminconc'))
    .pipe(rename({suffix: '.min'}))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe($.uglify({preserveComments: 'some'}))
   .pipe($.concat('scripts.min.js'))
    // Output files
    .pipe($.size({title: 'scripts'}))
    //    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scriptsminconc'))

});

//transfer minified files to the same temp folder
gulp.task('scripts2', function() {
  return gulp.src(['./app/assets/js/*.min.js',
    './app/assets/js/jquery.flexslider-min.js'
  ])
    .pipe($.newer('.tmp/scripts'))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
});
//.pipe(notify({ message: 'Scripts2 task complete to copy minified files' }));

gulp.task('scripts3', function() {
  return gulp.src([
      // Note: Since we are not using useref in the scripts build pipeline,
      //       you need to explicitly list your scripts here in the right order
      //       to be correctly concatenated
      './app/assets/js/jquery.easing.1.3.js',
      './app/assets/js/jquery.sticky.js'



      // Other scripts
    ])
    .pipe($.newer('.tmp/scriptmin'))
    .pipe(rename({suffix: '.min'}))
    .pipe($.uglify({preserveComments: 'some'}))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scriptmin'))
    // .pipe($.concat('scripts.min.js'))
    // Output files
    .pipe($.size({title: 'scripts'}))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/scripts'))
});

//transfer minified files to the same temp folder
gulp.task('scripts4', function() {
  return gulp.src([
//      '.tmp/scripts/*',

//      '.tmp/scripts/jquery-migrate.min.js',
//      '.tmp/scripts/moderniz.min.js',

 //     '.tmp/scripts/jquery.easing.1.3.min.js',
//      '.tmp/scripts/bootstrap.min.js',
//      '.tmp/scripts/bootstrap-hover-dropdown.min.js',

//      '.tmp/scripts/jquery.flexslider-min.min.js',
//      '.tmp/scripts/parallax.min.js',

//      '.tmp/scripts/tweetie.min.js',
//      '.tmp/scripts/waypoints.min.js',
//      '.tmp/scripts/jquery.sticky.min.js',
//      '.tmp/scripts/wow.min.js',
//      '.tmp/scripts/template.min.js',
//      '.tmp/scripts/contact-form.min.js',
//      '.tmp/scripts/jquery.themepunch.tools.min.js',
//      '.tmp/scripts/jquery.themepunch.revolution.min.js',
//      '.tmp/scripts/revolution-custom.min.js',
//     '.tmp/scripts/jquery.cubeportfolio.min.js',
//      '.tmp/scripts/cube-portfolio.min.js',
//      '.tmp/scripts/pricing.min.js',

//      '.tmp/scripts/masterslider.min.js',
//      '.tmp/scripts/masterslider-custom.min.js',
//      '.tmp/scripts/pace.min.js',
//      '.tmp/scripts/scripts.min.js',
      '.tmp/scriptsmin/*.js',
      '.tmp/scripts/*.js',
      '.tmp/scriptsminconc/scripts.min.js'



    ])
    .pipe(gulp.dest('dist/assets/js'))
});

//delete the temp folder
gulp.task('cleantempjs',function() {
  return del('.tmp/scriptsconc')
});

gulp.task('copyfont', function() {
  return gulp.src(['app/**/*.{eot,svg,ttf,woff,woff2}']  )
    .pipe($.if('*.{eot,svg,ttf,woff,woff2}', $.size({title: 'font', showFiles: true})))
    .pipe(gulp.dest('dist'));
  });

gulp.task('copyphp', function() {
  return gulp.src(['app/**/*.php']  )
    .pipe($.if('*.php', $.size({title: 'php', showFiles: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('copymisc', function() {
  return gulp.src(['app/**/*.{txt,swf,psd}']  )
    .pipe($.if('*.{txt,swf,psd}', $.size({title: 'misc', showFiles: true})))
    .pipe(gulp.dest('dist'));
});


gulp.task('copyimages', function() {
  return gulp.src(['app/**/*.{png,jpg,gif,cur}']  )

    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))

    .pipe($.size({title: 'images'}))
    .pipe($.if('*.{png,jpg,gif,cur}', $.size({title: 'images', showFiles: true})))
    .pipe(gulp.dest('dist'));
});

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe($.useref({searchPath: '{.tmp,app}'}))
    // Remove any unused CSS
    .pipe($.if('*.css', $.uncss({
      html: [
        'app/index.html'
      ],
      // CSS Selectors for UnCSS to ignore
      ignore: []
    })))

    // Concatenate and minify styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.cssnano()))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    })))
    // Output files
    .pipe($.if('*.html', $.size({title: 'html', showFiles: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('cacheClear',() =>

$.cache.clearAll()
);
// Clean output directory
gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['scripts', 'styles'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app'],
    port: 3000
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/scripts/**/*.js'], ['lint', 'scripts']);
  gulp.watch(['app/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', ['default'], () =>
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist',
    port: 3001
  })
);

// Build production files, the default task
gulp.task('default',['cacheClear','clean'], () =>
  runSequence(
    'styles',
    'scripts1',
    'scripts2',
    'scripts3',
    'scripts4',
    'cleantempjs',
    ['html','images','copyfont','copyphp','copyimages','copymisc'],
    'copy',

    'generate-service-worker'
  )
);

// Run PageSpeed Insights
gulp.task('pagespeed', cb =>
  // Update the below URL to the public URL of your site
  pagespeed('example.com', {
    strategy: 'mobile'
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: 'YOUR_API_KEY'
  }, cb)
);

// Copy over the scripts that are used in importScripts as part of the generate-service-worker task.
gulp.task('copy-sw-scripts', () => {
  return gulp.src(['node_modules/sw-toolbox/sw-toolbox.js', 'app/scripts/sw/runtime-caching.js'])
    .pipe(gulp.dest('dist/scripts/sw'));
});

// See http://www.html5rocks.com/en/tutorials/service-worker/introduction/ for
// an in-depth explanation of what service workers are and why you should care.
// Generate a service worker file that will provide offline functionality for
// local resources. This should only be done for the 'dist' directory, to allow
// live reload to work as expected when serving from the 'app' directory.
gulp.task('generate-service-worker', ['copy-sw-scripts'], () => {
  const rootDir = 'dist';
  const filepath = path.join(rootDir, 'service-worker.js');

  return swPrecache.write(filepath, {
    // Used to avoid cache conflicts when serving on localhost.
    cacheId: pkg.name || 'EduDefine',
    // sw-toolbox.js needs to be listed first. It sets up methods used in runtime-caching.js.
    importScripts: [
      'scripts/sw/sw-toolbox.js',
      'scripts/sw/runtime-caching.js'
    ],
    staticFileGlobs: [
      // Add/remove glob patterns to match your directory setup.
      `${rootDir}/images/**/*`,
      `${rootDir}/assets/**/*`,
      `${rootDir}/scripts/**/*.js`,
      `${rootDir}/styles/**/*.css`,
//      `${rootDir}/assets/**/*.css`,
      `${rootDir}/*.{html,json}`
    ],
    // Translates a static file path to the relative URL that it's served from.
    // This is '/' rather than path.sep because the paths returned from
    // glob always use '/'.
    stripPrefix: rootDir + '/'
  });
});

// Load custom tasks from the `tasks` directory
// Run: `npm install --save-dev require-dir` from the command-line
// try { require('require-dir')('tasks'); } catch (err) { console.error(err); }
