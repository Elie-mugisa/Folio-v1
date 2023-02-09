// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// ****** ANIMATION SCROLL *********
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  scrollY > 100 ? navbar.classList.add('navbar_anim') : navbar.classList.remove('navbar_anim');
});

// ******** Onload Img Event ******
var photo = document.querySelector('.photo img');
var casquette = document.querySelector('.casquette');
var quote = document.querySelector('.quote');
window.addEventListener('load', function () {
  photo.classList.add('photo-anim');
  casquette.classList.add('casquette-anim');
});
window.addEventListener('scroll', function () {
  scrollY > 20 ? quote.classList.add('quote-anim') : quote.classList.remove('quote-anim');
});

// *******************MENU RESPONSIVE****************************************
var hambourg = document.querySelector('.hambourg');
var menu_modal = document.querySelector('.menu-modal');
var inner_modal = document.querySelector('.inner-modal');
var close = inner_modal.querySelector('.close');
var liens = inner_modal.querySelectorAll('a');
function opneModal() {
  // hambourg.classList.toggle('active');
  menu_modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  menu_modal.classList.remove('open');
  document.body.style.overflow = 'visible';
}
hambourg.addEventListener('click', opneModal);
close.addEventListener('click', closeModal);

// ***** Click Outside **********
menu_modal.addEventListener('click', function (e) {
  var oustside = !e.target.closest('.inner-modal');
  if (oustside) {
    closeModal();
  }
});
liens.forEach(function (lien) {
  return lien.addEventListener('click', closeModal);
});

// ********************************************************************
var pageUp = document.querySelector('.Page_Up');
var hero2 = document.querySelector('.hero2');
var span = hero2.querySelector('.span');
var p = hero2.querySelector('.p');
var para = hero2.querySelector('.paragraphe2');
window.addEventListener('scroll', function () {
  scrollY > 270 ? span.classList.add('span_anim') : span.classList.remove('span_anim');
  if (scrollY > 300) {
    p.classList.add('p_anim');
    para.classList.add('paragraphe2_anim');
  } else {
    p.classList.remove('p_anim');
    para.classList.remove('paragraphe2_anim');
  }
});
window.addEventListener('scroll', function () {
  scrollY > 230 ? pageUp.classList.add('pageUp') : pageUp.classList.remove('pageUp');
});

// *****************Levels******************
var box = document.querySelectorAll('.box');
window.addEventListener('load', function () {
  box.forEach(function (item) {
    var numContent = item.querySelector('.num');
    var num = parseInt(numContent.innerText);
    var count = 0;
    setInterval(function () {
      if (count == num) {
        clearInterval();
      } else {
        count++;
        numContent.innerText = count;
      }
    }, 25);
  });
});

// ********* Annimation des blogs de services **********************
var observe1 = new IntersectionObserver(function (entries) {
  var _iterator = _createForOfIteratorHelper(entries),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      entry.isIntersecting ? entry.target.classList.add('blog_anim') : entry.target.classList.remove('blog_anim');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}, {
  threshold: .7
});
observe1.observe(document.querySelector('.container_blogs .blog1'));
observe1.observe(document.querySelector('.container_blogs .blog2'));

// ********* Annimation des blogs de skill levels **********************
var observe2 = new IntersectionObserver(function (entries) {
  var _iterator2 = _createForOfIteratorHelper(entries),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var entry = _step2.value;
      entry.isIntersecting ? entry.target.classList.add('box-anim') : entry.target.classList.remove('box-anim');
      if (entry.isIntersecting) {
        entry.target.classList.add('titre_tech_anim');
      } else {
        entry.target.classList.remove('titre_tech_anim');
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}, {
  threshold: .7
});
observe2.observe(document.querySelector(' .box1'));
observe2.observe(document.querySelector(' .box2'));
observe2.observe(document.querySelector(' .box4'));
observe2.observe(document.querySelector(' .box5'));
observe2.observe(document.querySelector(' .box6'));
observe2.observe(document.querySelector(' .box7'));
observe2.observe(document.querySelector(' .titre_tech'));

// ********* Annimation des blogs de Works **********************
var observe3 = new IntersectionObserver(function (entries) {
  var _iterator3 = _createForOfIteratorHelper(entries),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var entry = _step3.value;
      entry.isIntersecting ? entry.target.classList.add('titre-anim') : entry.target.classList.remove('titre-anim');
      if (entry.isIntersecting) {
        entry.target.classList.add('projet_Wrapp-anim');
      } else {
        entry.target.classList.remove('projet_Wrapp-anim');
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}, {
  threshold: .7
});
observe3.observe(document.querySelector('.boitee1'));
observe3.observe(document.querySelector('.boitee2'));
observe3.observe(document.querySelector('.boitee3'));
observe3.observe(document.querySelector('.boitee4'));
observe3.observe(document.querySelector('.boitee5'));
observe3.observe(document.querySelector('.title-done-projets'));

// ********* Annimation des paragraphes de About ***********************
var obsever4 = new IntersectionObserver(function (entries) {
  var _iterator4 = _createForOfIteratorHelper(entries),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var entry = _step4.value;
      entry.isIntersecting ? entry.target.classList.add('p-to-observe') : entry.target.classList.remove('p-to-observe');
      if (entry.isIntersecting) {
        entry.target.classList.add('h2-to-observe');
      } else {
        entry.target.classList.remove('h2-to-observe');
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}, {
  threshold: 1
});
obsever4.observe(document.querySelector('#para0-to-observe'));
obsever4.observe(document.querySelector('#para1-to-observe'));
obsever4.observe(document.querySelector('#para2-to-observe'));
obsever4.observe(document.querySelector('.Titre-to-observe'));
var textEl = document.querySelector('.text .text1');
var text1 = "I am Elie...";
var speedEl = document.querySelector('#speed');
var index = 1;
var speed = 300 / 0.4;
writtingText1();
function writtingText1() {
  textEl.innerText = text1.slice(0, index);
  index++;
  if (index > text1.length) {
    index = 1;
  }
  setTimeout(writtingText1, speed);
}
speedEl.addEventListener('input', function (e) {
  speed = 300 / e.target.value;
});
},{}],"C:/Users/MERVEILLE/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56006" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/MERVEILLE/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map