/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./node_modules/object-grep/src/index.js
function grep({target, searchExpr, depth, path, result}) {
  if (depth < 1) {
    return result;
  }

  Object.keys(target).forEach((key) => {
    const keyPath = !path ? key : `${path}.${key}`;
    const value = target[key];

    if (key.match(searchExpr)) {
      result.inKeys[keyPath] = value;
    }

    if (['string', 'number', 'boolean', 'undefined'].includes(typeof value) || value === null) {
      if (String(value).match(searchExpr)) {
        result.inValues[keyPath] = value;
      }

      return;
    }

    grep({
      searchExpr,
      result,
      path: keyPath,
      target: value,
      depth: depth - 1,
    });
  });

  return result;
}

function objectGrep(target, searchExpr, depth = 20) {
  const result = Object.create({
      short: function () {
        return {
          inKeys: Object.keys(this.inKeys),
          inValues: Object.keys(this.inValues),
        };
      }
    },
    {
      inValues: {writable: true, configurable: true, enumerable: true, value: {}},
      inKeys: {writable: true, configurable: true, enumerable: true, value: {}}
    }
  );

  const path = '';

  if (!searchExpr) {
    searchExpr = String(searchExpr);
  }

  return grep({
    target,
    searchExpr,
    depth,
    path,
    result
  });
}

objectGrep.inject = function () {
  Object.defineProperty(Object.prototype, 'grep', {
    enumerable: false,
    value: function (regex, depth) {
      return objectGrep(this, regex, depth);
    }
  });
};

;// CONCATENATED MODULE: ./src/lib.js


objectGrep.inject();

/******/ })()
;