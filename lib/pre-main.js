'use strict';
/* @noflow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

/* NON-TRANSPILED FILE */
/* eslint comma-dangle: [1, always-multiline], prefer-object-spread/prefer-object-spread: 0 */

// WARNING: This file is not the entry point in releases. The `main` in
// `package.json` is rewritten to point to `./lib/main.js` at release time.

// Keep this file in vanilla JavaScript so we can add perf measuring hooks and
// not have to worry about accounting for transpile costs or `import` hosting.

require('../pkg/nuclide-node-transpiler');

require('./internal/preloadDependencies');

// Uncomment this line if you want to troubleshot the time it takes
// to require all the JavaScript modules during Nuclide initialization.
//
// var ENABLE_PERFORMANCE_SUMMARY = true;

if (typeof ENABLE_PERFORMANCE_SUMMARY !== 'undefined') {
  require('./internal/track-nuclide-ready').init({
    byLoadOrder: false,
    loadOrderMinDuration: 10,
    byRoot: true,
  });
}

module.exports = require('./main');
