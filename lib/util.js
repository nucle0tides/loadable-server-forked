"use strict";

exports.__esModule = true;
exports.joinURLPath = exports.smartRequire = exports.clearModuleCache = void 0;

const clearModuleCache = key => delete require.cache[key];

exports.clearModuleCache = clearModuleCache;

const smartRequire = modulePath => {
  if (process.env.NODE_ENV !== 'production') {
    clearModuleCache(modulePath);
  } // Use __non_webpack_require__ to prevent Webpack from compiling it
  // when the server-side code is compiled with Webpack
  // eslint-disable-next-line camelcase


  if (typeof __non_webpack_require__ !== 'undefined') {
    // eslint-disable-next-line no-undef
    return __non_webpack_require__(modulePath);
  } // eslint-disable-next-line global-require, import/no-dynamic-require, no-eval


  return eval('module.require')(modulePath);
};

exports.smartRequire = smartRequire;

const joinURLPath = (publicPath, filename) => {
  if (publicPath.substr(-1) === '/') {
    return `${publicPath}${filename}`;
  }

  return `${publicPath}/${filename}`;
};

exports.joinURLPath = joinURLPath;