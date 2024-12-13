/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* binding */ CLASSES),
/* harmony export */   CLASS_ACTIVE: () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   CLASS_ARROW: () => (/* binding */ CLASS_ARROW),
/* harmony export */   CLASS_ARROWS: () => (/* binding */ CLASS_ARROWS),
/* harmony export */   CLASS_ARROW_NEXT: () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   CLASS_ARROW_PREV: () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   CLASS_CLONE: () => (/* binding */ CLASS_CLONE),
/* harmony export */   CLASS_CONTAINER: () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   CLASS_FOCUS_IN: () => (/* binding */ CLASS_FOCUS_IN),
/* harmony export */   CLASS_INITIALIZED: () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   CLASS_LIST: () => (/* binding */ CLASS_LIST),
/* harmony export */   CLASS_LOADING: () => (/* binding */ CLASS_LOADING),
/* harmony export */   CLASS_NEXT: () => (/* binding */ CLASS_NEXT),
/* harmony export */   CLASS_OVERFLOW: () => (/* binding */ CLASS_OVERFLOW),
/* harmony export */   CLASS_PAGINATION: () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   CLASS_PAGINATION_PAGE: () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   CLASS_PREV: () => (/* binding */ CLASS_PREV),
/* harmony export */   CLASS_PROGRESS: () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   CLASS_PROGRESS_BAR: () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   CLASS_ROOT: () => (/* binding */ CLASS_ROOT),
/* harmony export */   CLASS_SLIDE: () => (/* binding */ CLASS_SLIDE),
/* harmony export */   CLASS_SPINNER: () => (/* binding */ CLASS_SPINNER),
/* harmony export */   CLASS_SR: () => (/* binding */ CLASS_SR),
/* harmony export */   CLASS_TOGGLE: () => (/* binding */ CLASS_TOGGLE),
/* harmony export */   CLASS_TOGGLE_PAUSE: () => (/* binding */ CLASS_TOGGLE_PAUSE),
/* harmony export */   CLASS_TOGGLE_PLAY: () => (/* binding */ CLASS_TOGGLE_PLAY),
/* harmony export */   CLASS_TRACK: () => (/* binding */ CLASS_TRACK),
/* harmony export */   CLASS_VISIBLE: () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   DEFAULTS: () => (/* binding */ DEFAULTS),
/* harmony export */   EVENT_ACTIVE: () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   EVENT_ARROWS_MOUNTED: () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   EVENT_ARROWS_UPDATED: () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   EVENT_AUTOPLAY_PAUSE: () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   EVENT_AUTOPLAY_PLAY: () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   EVENT_AUTOPLAY_PLAYING: () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   EVENT_CLICK: () => (/* binding */ EVENT_CLICK),
/* harmony export */   EVENT_DESTROY: () => (/* binding */ EVENT_DESTROY),
/* harmony export */   EVENT_DRAG: () => (/* binding */ EVENT_DRAG),
/* harmony export */   EVENT_DRAGGED: () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   EVENT_DRAGGING: () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   EVENT_END_INDEX_CHANGED: () => (/* binding */ EVENT_END_INDEX_CHANGED),
/* harmony export */   EVENT_HIDDEN: () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   EVENT_INACTIVE: () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   EVENT_LAZYLOAD_LOADED: () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   EVENT_MOUNTED: () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   EVENT_MOVE: () => (/* binding */ EVENT_MOVE),
/* harmony export */   EVENT_MOVED: () => (/* binding */ EVENT_MOVED),
/* harmony export */   EVENT_NAVIGATION_MOUNTED: () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   EVENT_OVERFLOW: () => (/* binding */ EVENT_OVERFLOW),
/* harmony export */   EVENT_PAGINATION_MOUNTED: () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   EVENT_PAGINATION_UPDATED: () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   EVENT_READY: () => (/* binding */ EVENT_READY),
/* harmony export */   EVENT_REFRESH: () => (/* binding */ EVENT_REFRESH),
/* harmony export */   EVENT_RESIZE: () => (/* binding */ EVENT_RESIZE),
/* harmony export */   EVENT_RESIZED: () => (/* binding */ EVENT_RESIZED),
/* harmony export */   EVENT_SCROLL: () => (/* binding */ EVENT_SCROLL),
/* harmony export */   EVENT_SCROLLED: () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   EVENT_SHIFTED: () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   EVENT_SLIDE_KEYDOWN: () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   EVENT_UPDATED: () => (/* binding */ EVENT_UPDATED),
/* harmony export */   EVENT_VISIBLE: () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   EventBinder: () => (/* binding */ EventBinder),
/* harmony export */   EventInterface: () => (/* binding */ EventInterface),
/* harmony export */   FADE: () => (/* binding */ FADE),
/* harmony export */   LOOP: () => (/* binding */ LOOP),
/* harmony export */   LTR: () => (/* binding */ LTR),
/* harmony export */   RTL: () => (/* binding */ RTL),
/* harmony export */   RequestInterval: () => (/* binding */ RequestInterval),
/* harmony export */   SLIDE: () => (/* binding */ SLIDE),
/* harmony export */   STATUS_CLASSES: () => (/* binding */ STATUS_CLASSES),
/* harmony export */   Splide: () => (/* binding */ Splide),
/* harmony export */   SplideRenderer: () => (/* binding */ SplideRenderer),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   TTB: () => (/* binding */ TTB),
/* harmony export */   Throttle: () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function (key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  forEach(keys || ownKeys(object), function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      id = raf(update);
    }
  }

  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function () {
    interval.isPaused() && interval.start();
  };
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);

    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function (Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;
  var overflow;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }

  function resize(force) {
    var newRect = rect(root);

    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);

      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }

  return {
    mount: mount,
    resize: resize,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding,
    isOverflow: isOverflow
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);

    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }

  function remount() {
    destroy();
    mount();
  }

  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }

  function observe() {
    var count = computeCloneCount();

    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      var index = loop(Move.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);

    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }

    return clamp(end, 0, slideCount - 1);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }

  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, endIndex) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var placeholder = Elements.arrows,
      track = Elements.track;
  var wrapper = placeholder;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller.getPrev();
      var nextIndex = Controller.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy,
    update: update
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on,
      bind = _EventInterface6.bind,
      emit = _EventInterface6.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on,
      emit = _EventInterface8.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit,
      bind = _EventInterface9.bind,
      unbind = _EventInterface9.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      off = _EventInterface11.off,
      bind = _EventInterface11.bind,
      emit = _EventInterface11.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }

  function init() {
    empty(entries);
    register();

    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }

  function register() {
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }

  function check() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries),
    check: check
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements.pagination;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");

    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      bind = _EventInterface12.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      on = _EventInterface13.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var Slides = Components2.Slides;

  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }

  function init() {
    Slides.forEach(function (Slide) {
      Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
    });
  }

  function start(index, done) {
    Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface14 = EventInterface(splide),
        on = _EventInterface14.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ }),

/***/ "./resources/js/animations.js":
/*!************************************!*\
  !*** ./resources/js/animations.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs");
/* harmony import */ var motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! motion */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs");

var runAnimations = function runAnimations() {
  var targets = document.querySelectorAll(".main-feature__main-img, .main-feature__img-2, .main-feature__img-3, .main-feature__content");
  targets.forEach(function (image) {
    (0,motion__WEBPACK_IMPORTED_MODULE_0__.inView)(image, function () {
      (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(image, {
        opacity: 1,
        transform: "translateY(0px)"
      }, {
        duration: 0.8,
        easing: "ease-in-out"
      });
    });
    (0,motion__WEBPACK_IMPORTED_MODULE_1__.animate)(image, {
      opacity: 0,
      transform: "translateY(10px)"
    }, {
      duration: 0
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runAnimations);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero-block */ "./resources/js/hero-block.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./resources/js/tabs.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./resources/js/animations.js");



var initMobileMenu = function initMobileMenu() {
  var main_navigation = document.querySelector("#mobile-menu");
  document.querySelector("#primary-menu-toggle").addEventListener("click", function (e) {
    this.setAttribute("aria-expanded", this.getAttribute("aria-expanded") === "true" ? "false" : "true");
    main_navigation.classList.toggle("hidden");
  });
};
var initTabs = function initTabs() {
  var tablists = document.querySelectorAll(".tabs [role=tablist]");
  for (var i = 0; i < tablists.length; i++) {
    new _tabs__WEBPACK_IMPORTED_MODULE_1__["default"](tablists[i]);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  (0,_hero_block__WEBPACK_IMPORTED_MODULE_0__["default"])();
  initTabs();
  (0,_animations__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./resources/js/hero-block.js":
/*!************************************!*\
  !*** ./resources/js/hero-block.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide_css_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide/css/core */ "./node_modules/@splidejs/splide/dist/css/splide-core.min.css");


var Hero = function Hero() {
  var heroSplide = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"]("#hero-splide", {
    type: "fade",
    autoplay: true,
    interval: 3000,
    cover: true,
    arrows: false,
    pagination: true,
    rewind: true
  });
  heroSplide.mount();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./resources/js/tabs.js":
/*!******************************!*\
  !*** ./resources/js/tabs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tabs = /*#__PURE__*/function () {
  function Tabs(groupNode) {
    _classCallCheck(this, Tabs);
    this.tablistNode = groupNode;
    this.tabs = [];
    this.firstTab = null;
    this.lastTab = null;
    this.tabs = Array.from(this.tablistNode.querySelectorAll("[role=tab]"));
    this.tabpanels = [];
    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute("aria-controls"));
      tab.tabIndex = -1;
      tab.setAttribute("aria-selected", "false");
      this.tabpanels.push(tabpanel);
      tab.addEventListener("keydown", this.onKeydown.bind(this));
      tab.addEventListener("click", this.onClick.bind(this));
      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    }
    this.setSelectedTab(this.firstTab);
  }
  return _createClass(Tabs, [{
    key: "setSelectedTab",
    value: function setSelectedTab(currentTab) {
      for (var i = 0; i < this.tabs.length; i += 1) {
        var tab = this.tabs[i];
        if (currentTab === tab) {
          tab.setAttribute("aria-selected", "true");
          tab.removeAttribute("tabindex");
          this.tabpanels[i].classList.remove("hidden");
        } else {
          tab.setAttribute("aria-selected", "false");
          tab.tabIndex = -1;
          this.tabpanels[i].classList.add("hidden");
        }
      }
    }
  }, {
    key: "moveFocusToTab",
    value: function moveFocusToTab(currentTab) {
      currentTab.focus();
    }
  }, {
    key: "moveFocusToPreviousTab",
    value: function moveFocusToPreviousTab(currentTab) {
      var index;
      if (currentTab === this.firstTab) {
        this.moveFocusToTab(this.lastTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index - 1]);
      }
    }
  }, {
    key: "moveFocusToNextTab",
    value: function moveFocusToNextTab(currentTab) {
      var index;
      if (currentTab === this.lastTab) {
        this.moveFocusToTab(this.firstTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.moveFocusToTab(this.tabs[index + 1]);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown(event) {
      var tgt = event.currentTarget,
        flag = false;
      switch (event.key) {
        case "ArrowLeft":
          this.moveFocusToPreviousTab(tgt);
          flag = true;
          break;
        case "ArrowRight":
          this.moveFocusToNextTab(tgt);
          flag = true;
          break;
        case "Home":
          this.moveFocusToTab(this.firstTab);
          flag = true;
          break;
        case "End":
          this.moveFocusToTab(this.lastTab);
          flag = true;
          break;
        default:
          break;
      }
      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      this.setSelectedTab(event.currentTarget);
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/@splidejs/splide/dist/css/splide-core.min.css":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/@splidejs/splide/dist/css/splide-core.min.css ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide__track--draggable{-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.splide__track--fade>.splide__list>.splide__slide{margin:0!important;opacity:0;z-index:0}.splide__track--fade>.splide__list>.splide__slide.is-active{opacity:1;z-index:1}.splide--rtl{direction:rtl}.splide__track--ttb>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{backface-visibility:hidden;display:-ms-flexbox;display:flex;height:100%;margin:0!important;padding:0!important}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide:not(.is-overflow) .splide__pagination{display:none}.splide__progress__bar{width:0}.splide{position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{backface-visibility:hidden;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0;list-style-type:none!important;margin:0;position:relative}.splide__slide img{vertical-align:bottom}.splide__spinner{animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__sr{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.splide__toggle.is-active .splide__toggle__play,.splide__toggle__pause{display:none}.splide__toggle.is-active .splide__toggle__pause{display:inline}.splide__track{overflow:hidden;position:relative;z-index:0}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/blocks/main-feature/style.css":
/*!*************************************************!*\
  !*** ./resources/blocks/main-feature/style.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/editor-style.css":
/*!****************************************!*\
  !*** ./resources/css/editor-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/css/splide-core.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/css/splide-core.min.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_splide_core_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../../../postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./splide-core.min.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/@splidejs/splide/dist/css/splide-core.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_splide_core_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_splide_core_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/GroupPlaybackControls.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/GroupPlaybackControls.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupPlaybackControls: () => (/* binding */ GroupPlaybackControls)
/* harmony export */ });
/* harmony import */ var _render_dom_scroll_supports_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render/dom/scroll/supports.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/supports.mjs");


class GroupPlaybackControls {
    constructor(animations) {
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = () => this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */
    getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for (let i = 0; i < this.animations.length; i++) {
            this.animations[i][propName] = newValue;
        }
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation) => {
            if ((0,_render_dom_scroll_supports_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsScrollTimeline)() && animation.attachTimeline) {
                return animation.attachTimeline(timeline);
            }
            else {
                return fallback(animation);
            }
        });
        return () => {
            subscriptions.forEach((cancel, i) => {
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for (let i = 0; i < this.animations.length; i++) {
            max = Math.max(max, this.animations[i].duration);
        }
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls) => controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/index.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animate: () => (/* binding */ animate),
/* harmony export */   createScopedAnimate: () => (/* binding */ createScopedAnimate)
/* harmony export */ });
/* harmony import */ var _GroupPlaybackControls_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GroupPlaybackControls.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/GroupPlaybackControls.mjs");
/* harmony import */ var _sequence_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs");
/* harmony import */ var _subject_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subject.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs");




function isSequence(value) {
    return Array.isArray(value) && Array.isArray(value[0]);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */
function createScopedAnimate(scope) {
    /**
     * Implementation
     */
    function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        if (isSequence(subjectOrSequence)) {
            animations = (0,_sequence_mjs__WEBPACK_IMPORTED_MODULE_0__.animateSequence)(subjectOrSequence, optionsOrKeyframes, scope);
        }
        else {
            animations = (0,_subject_mjs__WEBPACK_IMPORTED_MODULE_1__.animateSubject)(subjectOrSequence, optionsOrKeyframes, options, scope);
        }
        const animation = new _GroupPlaybackControls_mjs__WEBPACK_IMPORTED_MODULE_2__.GroupPlaybackControls(animations);
        if (scope) {
            scope.animations.push(animation);
        }
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveSubjects: () => (/* binding */ resolveSubjects)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../motion-dom/dist/es/utils/resolve-elements.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs");
/* harmony import */ var _utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-dom-keyframes.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs");



function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (typeof subject === "string" && (0,_utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_0__.isDOMKeyframes)(keyframes)) {
        return (0,_motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveElements)(subject, scope, selectorCache);
    }
    else if (subject instanceof NodeList) {
        return Array.from(subject);
    }
    else if (Array.isArray(subject)) {
        return subject;
    }
    else {
        return [subject];
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/sequence.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSequence: () => (/* binding */ animateSequence)
/* harmony export */ });
/* harmony import */ var _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/spring/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _sequence_create_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sequence/create.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs");
/* harmony import */ var _subject_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subject.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs");




function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0,_sequence_create_mjs__WEBPACK_IMPORTED_MODULE_0__.createAnimationsFromSequence)(sequence, options, scope, { spring: _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_1__.spring });
    animationDefinitions.forEach(({ keyframes, transition }, subject) => {
        animations.push(...(0,_subject_mjs__WEBPACK_IMPORTED_MODULE_2__.animateSubject)(subject, keyframes, transition));
    });
    return animations;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSingleValue: () => (/* binding */ animateSingleValue)
/* harmony export */ });
/* harmony import */ var _interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) ? value : (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.motionValue)(value);
    motionValue$1.start((0,_interfaces_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/subject.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateSubject: () => (/* binding */ animateSubject)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _render_store_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/store.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _interfaces_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interfaces/visual-element-target.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs");
/* harmony import */ var _utils_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/create-visual-element.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs");
/* harmony import */ var _utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-dom-keyframes.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs");
/* harmony import */ var _resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-subjects.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs");
/* harmony import */ var _single_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs");









function isSingleValue(subject, keyframes) {
    return ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(subject) ||
        typeof subject === "number" ||
        (typeof subject === "string" && !(0,_utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.isDOMKeyframes)(keyframes)));
}
/**
 * Implementation
 */
function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) {
        animations.push((0,_single_value_mjs__WEBPACK_IMPORTED_MODULE_2__.animateSingleValue)(subject, (0,_utils_is_dom_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.isDOMKeyframes)(keyframes)
            ? keyframes.default || keyframes
            : keyframes, options ? options.default || options : options));
    }
    else {
        const subjects = (0,_resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_3__.resolveSubjects)(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_4__.invariant)(Boolean(numSubjects), "No valid elements provided.");
        for (let i = 0; i < numSubjects; i++) {
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element
                ? _utils_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__.createDOMVisualElement
                : _utils_create_visual_element_mjs__WEBPACK_IMPORTED_MODULE_5__.createObjectVisualElement;
            if (!_render_store_mjs__WEBPACK_IMPORTED_MODULE_6__.visualElementStore.has(thisSubject)) {
                createVisualElement(thisSubject);
            }
            const visualElement = _render_store_mjs__WEBPACK_IMPORTED_MODULE_6__.visualElementStore.get(thisSubject);
            const transition = { ...options };
            /**
             * Resolve stagger function if provided.
             */
            if ("delay" in transition &&
                typeof transition.delay === "function") {
                transition.delay = transition.delay(i, numSubjects);
            }
            animations.push(...(0,_interfaces_visual_element_target_mjs__WEBPACK_IMPORTED_MODULE_7__.animateTarget)(visualElement, { ...keyframes, transition }, {}));
        }
    }
    return animations;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcceleratedAnimation: () => (/* binding */ AcceleratedAnimation)
/* harmony export */ });
/* harmony import */ var _easing_anticipate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../easing/anticipate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs");
/* harmony import */ var _easing_back_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../easing/back.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../easing/circ.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _render_dom_DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../render/dom/DOMKeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs");
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs");
/* harmony import */ var _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainThreadAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs");
/* harmony import */ var _utils_accelerated_values_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utils/accelerated-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs");
/* harmony import */ var _waapi_index_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waapi/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs");
/* harmony import */ var _waapi_easing_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waapi/easing.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs");
/* harmony import */ var _waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./waapi/utils/attach-timeline.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _waapi_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./waapi/utils/supports-linear-easing.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs");
/* harmony import */ var _waapi_utils_supports_waapi_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./waapi/utils/supports-waapi.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs");


















/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */
const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */
function requiresPregeneratedKeyframes(options) {
    return ((0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_0__.isGenerator)(options.type) ||
        options.type === "spring" ||
        !(0,_waapi_easing_mjs__WEBPACK_IMPORTED_MODULE_1__.isWaapiSupportedEasing)(options.ease));
}
function pregenerateKeyframes(keyframes, options) {
    /**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */
    const sampleAnimation = new _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__.MainThreadAnimation({
        ...options,
        keyframes,
        repeat: 0,
        delay: 0,
        isGenerator: true,
    });
    let state = { done: false, value: keyframes[0] };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */
    let t = 0;
    while (!state.done && t < maxDuration) {
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: undefined,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear",
    };
}
const unsupportedEasingFunctions = {
    anticipate: _easing_anticipate_mjs__WEBPACK_IMPORTED_MODULE_3__.anticipate,
    backInOut: _easing_back_mjs__WEBPACK_IMPORTED_MODULE_4__.backInOut,
    circInOut: _easing_circ_mjs__WEBPACK_IMPORTED_MODULE_5__.circInOut,
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_6__.BaseAnimation {
    constructor(options) {
        super(options);
        const { name, motionValue, element, keyframes } = this.options;
        this.resolver = new _render_dom_DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_7__.DOMKeyframesResolver(keyframes, (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    initPlayback(keyframes, finalKeyframe) {
        var _a;
        let { duration = 300, times, ease, type, motionValue, name, startTime, } = this.options;
        /**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */
        if (!((_a = motionValue.owner) === null || _a === void 0 ? void 0 : _a.current)) {
            return false;
        }
        /**
         * If the user has provided an easing function name that isn't supported
         * by WAAPI (like "anticipate"), we need to provide the corressponding
         * function. This will later get converted to a linear() easing function.
         */
        if (typeof ease === "string" &&
            (0,_waapi_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_8__.supportsLinearEasing)() &&
            isUnsupportedEase(ease)) {
            ease = unsupportedEasingFunctions[ease];
        }
        /**
         * If this animation needs pre-generated keyframes then generate.
         */
        if (requiresPregeneratedKeyframes(this.options)) {
            const { onComplete, onUpdate, motionValue, element, ...options } = this.options;
            const pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
            keyframes = pregeneratedAnimation.keyframes;
            // If this is a very short animation, ensure we have
            // at least two keyframes to animate between as older browsers
            // can't animate between a single keyframe.
            if (keyframes.length === 1) {
                keyframes[1] = keyframes[0];
            }
            duration = pregeneratedAnimation.duration;
            times = pregeneratedAnimation.times;
            ease = pregeneratedAnimation.ease;
            type = "keyframes";
        }
        const animation = (0,_waapi_index_mjs__WEBPACK_IMPORTED_MODULE_9__.startWaapiAnimation)(motionValue.owner.current, name, keyframes, { ...this.options, duration, times, ease });
        // Override the browser calculated startTime with one synchronised to other JS
        // and WAAPI animations starting this event loop.
        animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        if (this.pendingTimeline) {
            (0,_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__.attachTimeline)(animation, this.pendingTimeline);
            this.pendingTimeline = undefined;
        }
        else {
            /**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */
            animation.onfinish = () => {
                const { onComplete } = this.options;
                motionValue.set((0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete && onComplete();
                this.cancel();
                this.resolveFinishedPromise();
            };
        }
        return {
            animation,
            duration,
            times,
            type,
            ease,
            keyframes: keyframes,
        };
    }
    get duration() {
        const { resolved } = this;
        if (!resolved)
            return 0;
        const { duration } = resolved;
        return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(duration);
    }
    get time() {
        const { resolved } = this;
        if (!resolved)
            return 0;
        const { animation } = resolved;
        return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(animation.currentTime || 0);
    }
    set time(newTime) {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.currentTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(newTime);
    }
    get speed() {
        const { resolved } = this;
        if (!resolved)
            return 1;
        const { animation } = resolved;
        return animation.playbackRate;
    }
    set speed(newSpeed) {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.playbackRate = newSpeed;
    }
    get state() {
        const { resolved } = this;
        if (!resolved)
            return "idle";
        const { animation } = resolved;
        return animation.playState;
    }
    get startTime() {
        const { resolved } = this;
        if (!resolved)
            return null;
        const { animation } = resolved;
        // Coerce to number as TypeScript incorrectly types this
        // as CSSNumberish
        return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */
    attachTimeline(timeline) {
        if (!this._resolved) {
            this.pendingTimeline = timeline;
        }
        else {
            const { resolved } = this;
            if (!resolved)
                return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_13__.noop;
            const { animation } = resolved;
            (0,_waapi_utils_attach_timeline_mjs__WEBPACK_IMPORTED_MODULE_10__.attachTimeline)(animation, timeline);
        }
        return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_13__.noop;
    }
    play() {
        if (this.isStopped)
            return;
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        if (animation.playState === "finished") {
            this.updateFinishedPromise();
        }
        animation.play();
    }
    pause() {
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation } = resolved;
        animation.pause();
    }
    stop() {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle")
            return;
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        const { resolved } = this;
        if (!resolved)
            return;
        const { animation, keyframes, duration, type, ease, times } = resolved;
        if (animation.playState === "idle" ||
            animation.playState === "finished") {
            return;
        }
        /**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */
        if (this.time) {
            const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
            const sampleAnimation = new _MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_2__.MainThreadAnimation({
                ...options,
                keyframes,
                duration,
                type,
                ease,
                times,
                isGenerator: true,
            });
            const sampleTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(this.time);
            motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        }
        const { onStop } = this.options;
        onStop && onStop();
        this.cancel();
    }
    complete() {
        const { resolved } = this;
        if (!resolved)
            return;
        resolved.animation.finish();
    }
    cancel() {
        const { resolved } = this;
        if (!resolved)
            return;
        resolved.animation.cancel();
    }
    static supports(options) {
        const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
        return ((0,_waapi_utils_supports_waapi_mjs__WEBPACK_IMPORTED_MODULE_14__.supportsWaapi)() &&
            name &&
            _utils_accelerated_values_mjs__WEBPACK_IMPORTED_MODULE_15__.acceleratedValues.has(name) &&
            motionValue &&
            motionValue.owner &&
            motionValue.owner.current instanceof HTMLElement &&
            /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */
            !motionValue.owner.getProps().onUpdate &&
            !repeatDelay &&
            repeatType !== "mirror" &&
            damping !== 0 &&
            type !== "inertia");
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseAnimation: () => (/* binding */ BaseAnimation)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _utils_can_animate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/can-animate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");






/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */
const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }) {
        // Track whether the animation has been stopped. Stopped animations won't restart.
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        this.options = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            ...options,
        };
        this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */
    calcStartTime() {
        if (!this.resolvedAt)
            return this.createdAt;
        return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY
            ? this.resolvedAt
            : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */
    get resolved() {
        if (!this._resolved && !this.hasAttemptedResolve) {
            (0,_render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__.flushKeyframeResolvers)();
        }
        return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */
    onKeyframesResolved(keyframes, finalKeyframe) {
        this.resolvedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        this.hasAttemptedResolve = true;
        const { name, type, velocity, delay, onComplete, onUpdate, isGenerator, } = this.options;
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */
        if (!isGenerator && !(0,_utils_can_animate_mjs__WEBPACK_IMPORTED_MODULE_2__.canAnimate)(keyframes, name, type, velocity)) {
            // Finish immediately
            if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_3__.instantAnimationState.current || !delay) {
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate((0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_4__.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete === null || onComplete === void 0 ? void 0 : onComplete();
                this.resolveFinishedPromise();
                return;
            }
            // Finish after a delay
            else {
                this.options.duration = 0;
            }
        }
        const resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
        if (resolvedAnimation === false)
            return;
        this._resolved = {
            keyframes,
            finalKeyframe,
            ...resolvedAnimation,
        };
        this.onPostResolved();
    }
    onPostResolved() { }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
        this.options.type = "keyframes";
        this.options.ease = "linear";
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve) => {
            this.resolveFinishedPromise = resolve;
        });
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainThreadAnimation: () => (/* binding */ MainThreadAnimation),
/* harmony export */   animateValue: () => (/* binding */ animateValue)
/* harmony export */ });
/* harmony import */ var _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/spring/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/inertia.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs");
/* harmony import */ var _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generators/keyframes.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs");
/* harmony import */ var _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs");
/* harmony import */ var _utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/pipe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _utils_mix_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/mix/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs");
/* harmony import */ var _generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../generators/utils/calc-duration.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _drivers_driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drivers/driver-frameloop.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs");
/* harmony import */ var _waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");















const generators = {
    decay: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    inertia: _generators_inertia_mjs__WEBPACK_IMPORTED_MODULE_0__.inertia,
    tween: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    keyframes: _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes,
    spring: _generators_spring_index_mjs__WEBPACK_IMPORTED_MODULE_2__.spring,
};
const percentToProgress = (percent) => percent / 100;
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */
class MainThreadAnimation extends _BaseAnimation_mjs__WEBPACK_IMPORTED_MODULE_3__.BaseAnimation {
    constructor(options) {
        super(options);
        /**
         * The time at which the animation was paused.
         */
        this.holdTime = null;
        /**
         * The time at which the animation was cancelled.
         */
        this.cancelTime = null;
        /**
         * The current time of the animation.
         */
        this.currentTime = 0;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */
        this.playbackSpeed = 1;
        /**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */
        this.pendingPlayState = "running";
        /**
         * The time at which the animation was started.
         */
        this.startTime = null;
        this.state = "idle";
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */
        this.stop = () => {
            this.resolver.cancel();
            this.isStopped = true;
            if (this.state === "idle")
                return;
            this.teardown();
            const { onStop } = this.options;
            onStop && onStop();
        };
        const { name, motionValue, element, keyframes } = this.options;
        const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || _render_utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_4__.KeyframeResolver;
        const onResolved = (resolvedKeyframes, finalKeyframe) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten();
        // If we've already resolved the animation, re-initialise it
        if (this._resolved) {
            Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
        }
    }
    initPlayback(keyframes$1) {
        const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0, } = this.options;
        const generatorFactory = (0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_5__.isGenerator)(type)
            ? type
            : generators[type] || _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes;
        /**
         * If our generator doesn't support mixing numbers, we need to replace keyframes with
         * [0, 100] and then make a function that maps that to the actual keyframes.
         *
         * 100 is chosen instead of 1 as it works nicer with spring animations.
         */
        let mapPercentToKeyframes;
        let mirroredGenerator;
        if (generatorFactory !== _generators_keyframes_mjs__WEBPACK_IMPORTED_MODULE_1__.keyframes &&
            typeof keyframes$1[0] !== "number") {
            if (true) {
                (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
            }
            mapPercentToKeyframes = (0,_utils_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__.pipe)(percentToProgress, (0,_utils_mix_index_mjs__WEBPACK_IMPORTED_MODULE_8__.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [0, 100];
        }
        const generator = generatorFactory({ ...this.options, keyframes: keyframes$1 });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */
        if (repeatType === "mirror") {
            mirroredGenerator = generatorFactory({
                ...this.options,
                keyframes: [...keyframes$1].reverse(),
                velocity: -velocity,
            });
        }
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */
        if (generator.calculatedDuration === null) {
            generator.calculatedDuration = (0,_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_9__.calcGeneratorDuration)(generator);
        }
        const { calculatedDuration } = generator;
        const resolvedDuration = calculatedDuration + repeatDelay;
        const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
        return {
            generator,
            mirroredGenerator,
            mapPercentToKeyframes,
            calculatedDuration,
            resolvedDuration,
            totalDuration,
        };
    }
    onPostResolved() {
        const { autoplay = true } = this.options;
        this.play();
        if (this.pendingPlayState === "paused" || !autoplay) {
            this.pause();
        }
        else {
            this.state = this.pendingPlayState;
        }
    }
    tick(timestamp, sample = false) {
        const { resolved } = this;
        // If the animations has failed to resolve, return the final keyframe.
        if (!resolved) {
            const { keyframes } = this.options;
            return { done: true, value: keyframes[keyframes.length - 1] };
        }
        const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes, calculatedDuration, totalDuration, resolvedDuration, } = resolved;
        if (this.startTime === null)
            return generator.next(0);
        const { delay, repeat, repeatType, repeatDelay, onUpdate } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */
        if (this.speed > 0) {
            this.startTime = Math.min(this.startTime, timestamp);
        }
        else if (this.speed < 0) {
            this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        }
        // Update currentTime
        if (sample) {
            this.currentTime = timestamp;
        }
        else if (this.holdTime !== null) {
            this.currentTime = this.holdTime;
        }
        else {
            // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
            // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
            // example.
            this.currentTime =
                Math.round(timestamp - this.startTime) * this.speed;
        }
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
        const isInDelayPhase = this.speed >= 0
            ? timeWithoutDelay < 0
            : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) {
            this.currentTime = totalDuration;
        }
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */
            const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */
            let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */
            let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */
            if (!iterationProgress && progress >= 1) {
                iterationProgress = 1;
            }
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */
            const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) {
                        iterationProgress -= repeatDelay / resolvedDuration;
                    }
                }
                else if (repeatType === "mirror") {
                    frameGenerator = mirroredGenerator;
                }
            }
            elapsed = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_10__.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */
        const state = isInDelayPhase
            ? { done: false, value: keyframes[0] }
            : frameGenerator.next(elapsed);
        if (mapPercentToKeyframes) {
            state.value = mapPercentToKeyframes(state.value);
        }
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) {
            done =
                this.speed >= 0
                    ? this.currentTime >= totalDuration
                    : this.currentTime <= 0;
        }
        const isAnimationFinished = this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && done));
        if (isAnimationFinished && finalKeyframe !== undefined) {
            state.value = (0,_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_11__.getFinalKeyframe)(keyframes, this.options, finalKeyframe);
        }
        if (onUpdate) {
            onUpdate(state.value);
        }
        if (isAnimationFinished) {
            this.finish();
        }
        return state;
    }
    get duration() {
        const { resolved } = this;
        return resolved ? (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
    }
    get time() {
        return (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.holdTime !== null || this.speed === 0) {
            this.holdTime = newTime;
        }
        else if (this.driver) {
            this.startTime = this.driver.now() - newTime / this.speed;
        }
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) {
            this.time = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_12__.millisecondsToSeconds)(this.currentTime);
        }
    }
    play() {
        if (!this.resolver.isScheduled) {
            this.resolver.resume();
        }
        if (!this._resolved) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped)
            return;
        const { driver = _drivers_driver_frameloop_mjs__WEBPACK_IMPORTED_MODULE_13__.frameloopDriver, onPlay, startTime } = this.options;
        if (!this.driver) {
            this.driver = driver((timestamp) => this.tick(timestamp));
        }
        onPlay && onPlay();
        const now = this.driver.now();
        if (this.holdTime !== null) {
            this.startTime = now - this.holdTime;
        }
        else if (!this.startTime) {
            this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        }
        else if (this.state === "finished") {
            this.startTime = now;
        }
        if (this.state === "finished") {
            this.updateFinishedPromise();
        }
        this.cancelTime = this.startTime;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */
        this.state = "running";
        this.driver.start();
    }
    pause() {
        var _a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        this.state = "paused";
        this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
        if (this.state !== "running") {
            this.play();
        }
        this.pendingPlayState = this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.teardown();
        this.state = "finished";
        const { onComplete } = this.options;
        onComplete && onComplete();
    }
    cancel() {
        if (this.cancelTime !== null) {
            this.tick(this.cancelTime);
        }
        this.teardown();
        this.updateFinishedPromise();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        this.startTime = this.cancelTime = null;
        this.resolver.cancel();
    }
    stopDriver() {
        if (!this.driver)
            return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(time) {
        this.startTime = 0;
        return this.tick(time, true);
    }
}
// Legacy interface
function animateValue(options) {
    return new MainThreadAnimation(options);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   frameloopDriver: () => (/* binding */ frameloopDriver)
/* harmony export */ });
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");



const frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
        start: () => _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frame.update(passTimestamp, true),
        stop: () => (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */
        now: () => (_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing ? _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp : _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__.time.now()),
    };
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/accelerated-values.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acceleratedValues: () => (/* binding */ acceleratedValues)
/* harmony export */ });
/**
 * A list of values that can be hardware-accelerated.
 */
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
]);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canAnimate: () => (/* binding */ canAnimate)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-animatable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animatable.mjs");




function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1)
        return true;
    for (let i = 0; i < keyframes.length; i++) {
        if (keyframes[i] !== current)
            return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */
    const originKeyframe = keyframes[0];
    if (originKeyframe === null)
        return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */
    if (name === "display" || name === "visibility")
        return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0,_utils_is_animatable_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimatable)(targetKeyframe, name);
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) {
        return false;
    }
    return (hasKeyframesChanged(keyframes) ||
        ((type === "spring" || (0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__.isGenerator)(type)) && velocity));
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezierAsString: () => (/* binding */ cubicBezierAsString),
/* harmony export */   isWaapiSupportedEasing: () => (/* binding */ isWaapiSupportedEasing),
/* harmony export */   mapEasingToNativeEasing: () => (/* binding */ mapEasingToNativeEasing),
/* harmony export */   supportedWaapiEasing: () => (/* binding */ supportedWaapiEasing)
/* harmony export */ });
/* harmony import */ var _easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../easing/utils/is-bezier-definition.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs");
/* harmony import */ var _utils_linear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/linear.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs");
/* harmony import */ var _utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/supports-linear-easing.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs");




function isWaapiSupportedEasing(easing) {
    return Boolean((typeof easing === "function" && (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)()) ||
        !easing ||
        (typeof easing === "string" &&
            (easing in supportedWaapiEasing || (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)())) ||
        (0,_easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isBezierDefinition)(easing) ||
        (Array.isArray(easing) && easing.every(isWaapiSupportedEasing)));
}
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /*@__PURE__*/ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /*@__PURE__*/ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /*@__PURE__*/ cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
        return undefined;
    }
    else if (typeof easing === "function" && (0,_utils_supports_linear_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.supportsLinearEasing)()) {
        return (0,_utils_linear_mjs__WEBPACK_IMPORTED_MODULE_2__.generateLinearEasing)(easing, duration);
    }
    else if ((0,_easing_utils_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_1__.isBezierDefinition)(easing)) {
        return cubicBezierAsString(easing);
    }
    else if (Array.isArray(easing)) {
        return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) ||
            supportedWaapiEasing.easeOut);
    }
    else {
        return supportedWaapiEasing[easing];
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startWaapiAnimation: () => (/* binding */ startWaapiAnimation)
/* harmony export */ });
/* harmony import */ var _easing_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./easing.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs");


function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeInOut", times, } = {}) {
    const keyframeOptions = { [valueName]: keyframes };
    if (times)
        keyframeOptions.offset = times;
    const easing = (0,_easing_mjs__WEBPACK_IMPORTED_MODULE_0__.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */
    if (Array.isArray(easing))
        keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal",
    });
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachTimeline: () => (/* binding */ attachTimeline)
/* harmony export */ });
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFinalKeyframe: () => (/* binding */ getFinalKeyframe)
/* harmony export */ });
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1
        ? 0
        : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined
        ? resolvedKeyframes[index]
        : finalKeyframe;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateLinearEasing: () => (/* binding */ generateLinearEasing)
/* harmony export */ });
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/progress.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/progress.mjs");


const generateLinearEasing = (easing, duration, // as milliseconds
resolution = 10 // as milliseconds
) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
        points += easing((0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, numPoints - 1, i)) + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoSupports: () => (/* binding */ memoSupports)
/* harmony export */ });
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/memo.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs");
/* harmony import */ var _supports_flags_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supports-flags.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs");



function memoSupports(callback, supportsFlag) {
    const memoized = (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(callback);
    return () => { var _a; return (_a = _supports_flags_mjs__WEBPACK_IMPORTED_MODULE_1__.supportsFlags[supportsFlag]) !== null && _a !== void 0 ? _a : memoized(); };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsFlags: () => (/* binding */ supportsFlags)
/* harmony export */ });
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */
const supportsFlags = {
    linearEasing: undefined,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsLinearEasing: () => (/* binding */ supportsLinearEasing)
/* harmony export */ });
/* harmony import */ var _memo_supports_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memo-supports.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs");


const supportsLinearEasing = /*@__PURE__*/ (0,_memo_supports_mjs__WEBPACK_IMPORTED_MODULE_0__.memoSupports)(() => {
    try {
        document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    }
    catch (e) {
        return false;
    }
    return true;
}, "linearEasing");




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsWaapi: () => (/* binding */ supportsWaapi)
/* harmony export */ });
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/memo.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs");


const supportsWaapi = /*@__PURE__*/ (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inertia: () => (/* binding */ inertia)
/* harmony export */ });
/* harmony import */ var _spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spring/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/velocity.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs");



function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed, }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin,
    };
    const isOutOfBounds = (v) => (min !== undefined && v < min) || (max !== undefined && v > max);
    const nearestBoundary = (v) => {
        if (min === undefined)
            return max;
        if (max === undefined)
            return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */
    if (target !== ideal)
        amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
        if (!isOutOfBounds(state.value))
            return;
        timeReachedBoundary = t;
        spring$1 = (0,_spring_index_mjs__WEBPACK_IMPORTED_MODULE_0__.spring)({
            keyframes: [state.value, nearestBoundary(state.value)],
            velocity: (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_1__.calcGeneratorVelocity)(calcLatest, t, state.value), // TODO: This should be passing * 1000
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed,
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t) => {
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */
            let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */
            if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) {
                return spring$1.next(t - timeReachedBoundary);
            }
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        },
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEasing: () => (/* binding */ defaultEasing),
/* harmony export */   keyframes: () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../easing/ease.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../easing/utils/is-easing-array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs");
/* harmony import */ var _easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easing/utils/map.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs");
/* harmony import */ var _utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/interpolate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/offsets/default.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/offsets/time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs");







function defaultEasing(values, easing) {
    return values.map(() => easing || _easing_ease_mjs__WEBPACK_IMPORTED_MODULE_0__.easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut", }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */
    const easingFunctions = (0,_easing_utils_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_1__.isEasingArray)(ease)
        ? ease.map(_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)
        : (0,_easing_utils_map_mjs__WEBPACK_IMPORTED_MODULE_2__.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = {
        done: false,
        value: keyframeValues[0],
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */
    const absoluteTimes = (0,_utils_offsets_time_mjs__WEBPACK_IMPORTED_MODULE_3__.convertOffsetToTimes)(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length
        ? times
        : (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_4__.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0,_utils_interpolate_mjs__WEBPACK_IMPORTED_MODULE_5__.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions)
            ? easingFunctions
            : defaultEasing(keyframeValues, easingFunctions),
    });
    return {
        calculatedDuration: duration,
        next: (t) => {
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        },
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   springDefaults: () => (/* binding */ springDefaults)
/* harmony export */ });
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800, // in ms
    bounce: 0.3,
    visualDuration: 0.3, // in seconds
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2,
    },
    restDelta: {
        granular: 0.005,
        default: 0.5,
    },
    // Limits
    minDuration: 0.01, // in seconds
    maxDuration: 10.0, // in seconds
    minDamping: 0.05,
    maxDamping: 1,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcAngularFreq: () => (/* binding */ calcAngularFreq),
/* harmony export */   findSpring: () => (/* binding */ findSpring)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs");





const safeMin = 0.001;
function findSpring({ duration = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.duration, bounce = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.bounce, velocity = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.velocity, mass = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass, }) {
    let envelope;
    let derivative;
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_1__.warning)(duration <= (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */
    dampingRatio = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__.clamp)(_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.minDamping, _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.maxDamping, dampingRatio);
    duration = (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_3__.clamp)(_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.minDuration, _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.maxDuration, (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */
        envelope = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - (a / b) * c;
        };
        derivative = (undampedFreq) => {
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return (factor * ((d - e) * f)) / g;
        };
    }
    else {
        /**
         * Critically-damped spring
         */
        envelope = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq) => {
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.stiffness,
            damping: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.damping,
            duration,
        };
    }
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration,
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spring: () => (/* binding */ spring)
/* harmony export */ });
/* harmony import */ var _animators_waapi_utils_linear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animators/waapi/utils/linear.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/linear.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/velocity.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs");
/* harmony import */ var _find_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs");
/* harmony import */ var _utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/calc-duration.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs");
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/defaults.mjs");








const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some((key) => options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.velocity,
        stiffness: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.stiffness,
        damping: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.damping,
        mass: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass,
        isResolvedFromDuration: false,
        ...options,
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) &&
        isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = (2 * Math.PI) / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 * (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_1__.clamp)(0.05, 1, 1 - options.bounce) * Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass,
                stiffness,
                damping,
            };
        }
        else {
            const derived = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_2__.findSpring)(options);
            springOptions = {
                ...springOptions,
                ...derived,
                mass: _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.mass,
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.visualDuration, bounce = _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object"
        ? {
            visualDuration: optionsOrVisualDuration,
            keyframes: [0, 1],
            bounce,
        }
        : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration, } = getSpringOptions({
        ...options,
        velocity: -(0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsToSeconds)(options.velocity || 0),
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale
        ? _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restSpeed.granular
        : _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale
        ? _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restDelta.granular
        : _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.springDefaults.restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0,_find_mjs__WEBPACK_IMPORTED_MODULE_2__.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return (target -
                envelope *
                    (((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) /
                        angularFreq) *
                        Math.sin(angularFreq * t) +
                        initialDelta * Math.cos(angularFreq * t)));
        };
    }
    else if (dampingRatio === 1) {
        // Critically damped spring
        resolveSpring = (t) => target -
            Math.exp(-undampedAngularFreq * t) *
                (initialDelta +
                    (initialVelocity + undampedAngularFreq * initialDelta) * t);
    }
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t) => {
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return (target -
                (envelope *
                    ((initialVelocity +
                        dampingRatio * undampedAngularFreq * initialDelta) *
                        Math.sinh(freqForT) +
                        dampedAngularFreq *
                            initialDelta *
                            Math.cosh(freqForT))) /
                    dampedAngularFreq);
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t) => {
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */
                if (dampingRatio < 1) {
                    currentVelocity =
                        t === 0
                            ? (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.secondsToMilliseconds)(initialVelocity)
                            : (0,_utils_velocity_mjs__WEBPACK_IMPORTED_MODULE_4__.calcGeneratorVelocity)(resolveSpring, t, current);
                }
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done =
                    isBelowVelocityThreshold && isBelowDisplacementThreshold;
            }
            else {
                state.done = t >= duration;
            }
            state.value = state.done ? target : current;
            return state;
        },
        toString: () => {
            const calculatedDuration = Math.min((0,_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__.calcGeneratorDuration)(generator), _utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_5__.maxGeneratorDuration);
            const easing = (0,_animators_waapi_utils_linear_mjs__WEBPACK_IMPORTED_MODULE_6__.generateLinearEasing)((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        },
    };
    return generator;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorDuration: () => (/* binding */ calcGeneratorDuration),
/* harmony export */   maxGeneratorDuration: () => (/* binding */ maxGeneratorDuration)
/* harmony export */ });
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGenerator: () => (/* binding */ isGenerator)
/* harmony export */ });
function isGenerator(type) {
    return typeof type === "function";
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcGeneratorVelocity: () => (/* binding */ calcGeneratorVelocity)
/* harmony export */ });
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/velocity-per-second.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs");


const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_0__.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateMotionValue: () => (/* binding */ animateMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/default-transitions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs");
/* harmony import */ var _utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-value-transition.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/GlobalConfig.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/use-instant-transition-state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs");
/* harmony import */ var _animators_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animators/waapi/utils/get-final-keyframe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");
/* harmony import */ var _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animators/AcceleratedAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/AcceleratedAnimation.mjs");
/* harmony import */ var _animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animators/MainThreadAnimation.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs");
/* harmony import */ var _GroupPlaybackControls_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GroupPlaybackControls.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/GroupPlaybackControls.mjs");
/* harmony import */ var _utils_is_transition_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-transition-defined.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs");












const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = (0,_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition, name) || {};
    /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */
    const delay = valueTransition.delay || transition.delay || 0;
    /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */
    let { elapsed = 0 } = transition;
    elapsed = elapsed - (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(delay);
    let options = {
        keyframes: Array.isArray(target) ? target : [null, target],
        ease: "easeOut",
        velocity: value.getVelocity(),
        ...valueTransition,
        delay: -elapsed,
        onUpdate: (v) => {
            value.set(v);
            valueTransition.onUpdate && valueTransition.onUpdate(v);
        },
        onComplete: () => {
            onComplete();
            valueTransition.onComplete && valueTransition.onComplete();
        },
        name,
        motionValue: value,
        element: isHandoff ? undefined : element,
    };
    /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */
    if (!(0,_utils_is_transition_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.isTransitionDefined)(valueTransition)) {
        options = {
            ...options,
            ...(0,_utils_default_transitions_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultTransition)(name, options),
        };
    }
    /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */
    if (options.duration) {
        options.duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.duration);
    }
    if (options.repeatDelay) {
        options.repeatDelay = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.secondsToMilliseconds)(options.repeatDelay);
    }
    if (options.from !== undefined) {
        options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false ||
        (options.duration === 0 && !options.repeatDelay)) {
        options.duration = 0;
        if (options.delay === 0) {
            shouldSkip = true;
        }
    }
    if (_utils_use_instant_transition_state_mjs__WEBPACK_IMPORTED_MODULE_4__.instantAnimationState.current ||
        _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_5__.MotionGlobalConfig.skipAnimations) {
        shouldSkip = true;
        options.duration = 0;
        options.delay = 0;
    }
    /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */
    if (shouldSkip && !isHandoff && value.get() !== undefined) {
        const finalKeyframe = (0,_animators_waapi_utils_get_final_keyframe_mjs__WEBPACK_IMPORTED_MODULE_6__.getFinalKeyframe)(options.keyframes, valueTransition);
        if (finalKeyframe !== undefined) {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_7__.frame.update(() => {
                options.onUpdate(finalKeyframe);
                options.onComplete();
            });
            // We still want to return some animation controls here rather
            // than returning undefined
            return new _GroupPlaybackControls_mjs__WEBPACK_IMPORTED_MODULE_8__.GroupPlaybackControls([]);
        }
    }
    /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */
    if (!isHandoff && _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__.AcceleratedAnimation.supports(options)) {
        return new _animators_AcceleratedAnimation_mjs__WEBPACK_IMPORTED_MODULE_9__.AcceleratedAnimation(options);
    }
    else {
        return new _animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_10__.MainThreadAnimation(options);
    }
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateTarget: () => (/* binding */ animateTarget)
/* harmony export */ });
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs");
/* harmony import */ var _render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../render/utils/setters.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs");
/* harmony import */ var _utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/get-value-transition.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs");
/* harmony import */ var _optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../optimized-appear/get-appear-id.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs");
/* harmony import */ var _value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/use-will-change/add-will-change.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");








/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride)
        transition = transitionOverride;
    const animations = [];
    const animationTypeState = type &&
        visualElement.animationState &&
        visualElement.animationState.getState()[type];
    for (const key in target) {
        const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        const valueTarget = target[key];
        if (valueTarget === undefined ||
            (animationTypeState &&
                shouldBlockAnimation(animationTypeState, key))) {
            continue;
        }
        const valueTransition = {
            delay,
            ...(0,_utils_get_value_transition_mjs__WEBPACK_IMPORTED_MODULE_0__.getValueTransition)(transition || {}, key),
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */
        let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0,_optimized_appear_get_appear_id_mjs__WEBPACK_IMPORTED_MODULE_1__.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame);
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0,_value_use_will_change_add_will_change_mjs__WEBPACK_IMPORTED_MODULE_3__.addValueToWillChange)(visualElement, key);
        value.start((0,_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_5__.transformProps.has(key)
            ? { type: false }
            : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) {
            animations.push(animation);
        }
    }
    if (transitionEnd) {
        Promise.all(animations).then(() => {
            _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.update(() => {
                transitionEnd && (0,_render_utils_setters_mjs__WEBPACK_IMPORTED_MODULE_6__.setTarget)(visualElement, transitionEnd);
            });
        });
    }
    return animations;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/data-id.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/data-id.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optimizedAppearDataAttribute: () => (/* binding */ optimizedAppearDataAttribute),
/* harmony export */   optimizedAppearDataId: () => (/* binding */ optimizedAppearDataId)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/camel-to-dash.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");


const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0,_render_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_0__.camelToDash)(optimizedAppearDataId);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs":
/*!********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOptimisedAppearId: () => (/* binding */ getOptimisedAppearId)
/* harmony export */ });
/* harmony import */ var _data_id_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-id.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/data-id.mjs");


function getOptimisedAppearId(visualElement) {
    return visualElement.props[_data_id_mjs__WEBPACK_IMPORTED_MODULE_0__.optimizedAppearDataAttribute];
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/create.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnimationsFromSequence: () => (/* binding */ createAnimationsFromSequence),
/* harmony export */   getValueTransition: () => (/* binding */ getValueTransition)
/* harmony export */ });
/* harmony import */ var _easing_utils_create_generator_easing_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../easing/utils/create-generator-easing.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/create-generator-easing.mjs");
/* harmony import */ var _utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/offsets/default.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs");
/* harmony import */ var _utils_offsets_fill_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/offsets/fill.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs");
/* harmony import */ var _utils_progress_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/progress.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _animate_resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animate/resolve-subjects.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/resolve-subjects.mjs");
/* harmony import */ var _generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generators/utils/is-generator.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs");
/* harmony import */ var _utils_calc_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/calc-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs");
/* harmony import */ var _utils_edit_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/edit.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs");
/* harmony import */ var _utils_sort_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/sort.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs");












const defaultSegmentEasing = "easeInOut";
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */
    for (let i = 0; i < sequence.length; i++) {
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */
        if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        }
        else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0,_utils_calc_time_mjs__WEBPACK_IMPORTED_MODULE_0__.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */
        if (transition.at !== undefined) {
            currentTime = (0,_utils_calc_time_mjs__WEBPACK_IMPORTED_MODULE_0__.calcNextTime)(currentTime, transition.at, prevTime, timeLabels);
        }
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */
        let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0) => {
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0,_utils_offsets_default_mjs__WEBPACK_IMPORTED_MODULE_1__.defaultOffset)(valueKeyframesAsList), type = "keyframes", ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */
            const calculatedDelay = typeof delay === "function"
                ? delay(elementIndex, numSubjects)
                : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */
            const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0,_generators_utils_is_generator_mjs__WEBPACK_IMPORTED_MODULE_2__.isGenerator)(type)
                ? type
                : generators === null || generators === void 0 ? void 0 : generators[type];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */
                let absoluteDelta = 100;
                if (numKeyframes === 2 &&
                    isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = { ...remainingTransition };
                if (duration !== undefined) {
                    springTransition.duration = (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.secondsToMilliseconds)(duration);
                }
                const springEasing = (0,_easing_utils_create_generator_easing_mjs__WEBPACK_IMPORTED_MODULE_4__.createGeneratorEasing)(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : (duration = defaultDuration);
            const startTime = currentTime + calculatedDelay;
            const targetTime = startTime + duration;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */
            if (times.length === 1 && times[0] === 0) {
                times[1] = 1;
            }
            /**
             * Fill out if offset if fewer offsets than keyframes
             */
            const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0,_utils_offsets_fill_mjs__WEBPACK_IMPORTED_MODULE_5__.fillOffset)(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */
            valueKeyframesAsList.length === 1 &&
                valueKeyframesAsList.unshift(null);
            /**
             * Add keyframes, mapping offsets to absolute time.
             */
            (0,_utils_edit_mjs__WEBPACK_IMPORTED_MODULE_6__.addKeyframes)(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_7__.isMotionValue)(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        }
        else {
            const subjects = (0,_animate_resolve_subjects_mjs__WEBPACK_IMPORTED_MODULE_8__.resolveSubjects)(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */
            for (let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++) {
                /**
                 * Cast necessary, but we know these are of this type
                 */
                keyframes = keyframes;
                transition = transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for (const key in keyframes) {
                    resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
                }
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */
    sequences.forEach((valueSequences, element) => {
        for (const key in valueSequences) {
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */
            valueSequence.sort(_utils_sort_mjs__WEBPACK_IMPORTED_MODULE_9__.compareByTime);
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */
            for (let i = 0; i < valueSequence.length; i++) {
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0,_utils_progress_mjs__WEBPACK_IMPORTED_MODULE_10__.progress)(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */
            if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */
            if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) {
                animationDefinitions.set(element, {
                    keyframes: {},
                    transition: {},
                });
            }
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition,
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name])
        sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [keyframes];
}
function getValueTransition(transition, key) {
    return transition && transition[key]
        ? {
            ...transition,
            ...transition[key],
        }
        : { ...transition };
}
const isNumber = (keyframe) => typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes) => keyframes.every(isNumber);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcNextTime: () => (/* binding */ calcNextTime)
/* harmony export */ });
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */
function calcNextTime(current, next, prev, labels) {
    var _a;
    if (typeof next === "number") {
        return next;
    }
    else if (next.startsWith("-") || next.startsWith("+")) {
        return Math.max(0, current + parseFloat(next));
    }
    else if (next === "<") {
        return prev;
    }
    else {
        return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/edit.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addKeyframes: () => (/* binding */ addKeyframes),
/* harmony export */   eraseKeyframes: () => (/* binding */ eraseKeyframes)
/* harmony export */ });
/* harmony import */ var _easing_utils_get_easing_for_segment_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../easing/utils/get-easing-for-segment.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs");
/* harmony import */ var _utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs");
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/mix/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");




function eraseKeyframes(sequence, startTime, endTime) {
    for (let i = 0; i < sequence.length; i++) {
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0,_utils_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */
    eraseKeyframes(sequence, startTime, endTime);
    for (let i = 0; i < keyframes.length; i++) {
        sequence.push({
            value: keyframes[i],
            at: (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(startTime, endTime, offset[i]),
            easing: (0,_easing_utils_get_easing_for_segment_mjs__WEBPACK_IMPORTED_MODULE_2__.getEasingForSegment)(easing, i),
        });
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/sequence/utils/sort.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareByTime: () => (/* binding */ compareByTime)
/* harmony export */ });
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null)
            return 1;
        if (b.value === null)
            return -1;
        return 0;
    }
    else {
        return a.at - b.at;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/create-visual-element.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDOMVisualElement: () => (/* binding */ createDOMVisualElement),
/* harmony export */   createObjectVisualElement: () => (/* binding */ createObjectVisualElement)
/* harmony export */ });
/* harmony import */ var _render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/dom/utils/is-svg-element.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs");
/* harmony import */ var _render_svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/svg/SVGVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs");
/* harmony import */ var _render_html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../render/html/HTMLVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs");
/* harmony import */ var _render_store_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../render/store.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _render_object_ObjectVisualElement_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../render/object/ObjectVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs");






function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {},
            },
            latestValues: {},
        },
    };
    const node = (0,_render_dom_utils_is_svg_element_mjs__WEBPACK_IMPORTED_MODULE_0__.isSVGElement)(element)
        ? new _render_svg_SVGVisualElement_mjs__WEBPACK_IMPORTED_MODULE_1__.SVGVisualElement(options)
        : new _render_html_HTMLVisualElement_mjs__WEBPACK_IMPORTED_MODULE_2__.HTMLVisualElement(options);
    node.mount(element);
    _render_store_mjs__WEBPACK_IMPORTED_MODULE_3__.visualElementStore.set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {},
            },
            latestValues: {},
        },
    };
    const node = new _render_object_ObjectVisualElement_mjs__WEBPACK_IMPORTED_MODULE_4__.ObjectVisualElement(options);
    node.mount(subject);
    _render_store_mjs__WEBPACK_IMPORTED_MODULE_3__.visualElementStore.set(subject, node);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultTransition: () => (/* binding */ getDefaultTransition)
/* harmony export */ });
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");


const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
};
const criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
});
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8,
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */
const ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
};
const getDefaultTransition = (valueKey, { keyframes }) => {
    if (keyframes.length > 2) {
        return keyframesTransition;
    }
    else if (_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(valueKey)) {
        return valueKey.startsWith("scale")
            ? criticallyDampedSpring(keyframes[1])
            : underDampedSpring;
    }
    return ease;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueTransition: () => (/* binding */ getValueTransition)
/* harmony export */ });
function getValueTransition(transition, key) {
    return transition
        ? transition[key] ||
            transition["default"] ||
            transition
        : undefined;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animatable.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animatable.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimatable: () => (/* binding */ isAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");


/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
const isAnimatable = (value, name) => {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        (_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.complex.test(value) || value === "0") && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAnimationControls: () => (/* binding */ isAnimationControls)
/* harmony export */ });
function isAnimationControls(v) {
    return (v !== null &&
        typeof v === "object" &&
        typeof v.start === "function");
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDOMKeyframes: () => (/* binding */ isDOMKeyframes)
/* harmony export */ });
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isKeyframesTarget: () => (/* binding */ isKeyframesTarget)
/* harmony export */ });
const isKeyframesTarget = (v) => {
    return Array.isArray(v);
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNone: () => (/* binding */ isNone)
/* harmony export */ });
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/is-zero-value-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs");


function isNone(value) {
    if (typeof value === "number") {
        return value === 0;
    }
    else if (value !== null) {
        return value === "none" || value === "0" || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_0__.isZeroValueString)(value);
    }
    else {
        return true;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isTransitionDefined: () => (/* binding */ isTransitionDefined)
/* harmony export */ });
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anticipate: () => (/* binding */ anticipate)
/* harmony export */ });
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs");


const anticipate = (p) => (p *= 2) < 1 ? 0.5 * (0,_back_mjs__WEBPACK_IMPORTED_MODULE_0__.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backIn: () => (/* binding */ backIn),
/* harmony export */   backInOut: () => (/* binding */ backInOut),
/* harmony export */   backOut: () => (/* binding */ backOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs");




const backOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_1__.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_2__.mirrorEasing)(backIn);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circIn: () => (/* binding */ circIn),
/* harmony export */   circInOut: () => (/* binding */ circInOut),
/* harmony export */   circOut: () => (/* binding */ circOut)
/* harmony export */ });
/* harmony import */ var _modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/mirror.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs");
/* harmony import */ var _modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/reverse.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs");



const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = (0,_modifiers_reverse_mjs__WEBPACK_IMPORTED_MODULE_0__.reverseEasing)(circIn);
const circInOut = (0,_modifiers_mirror_mjs__WEBPACK_IMPORTED_MODULE_1__.mirrorEasing)(circIn);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cubicBezier: () => (/* binding */ cubicBezier)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");



/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2) => (((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) *
    t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        }
        else {
            lowerBound = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision &&
        ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2)
        return _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easeIn: () => (/* binding */ easeIn),
/* harmony export */   easeInOut: () => (/* binding */ easeInOut),
/* harmony export */   easeOut: () => (/* binding */ easeOut)
/* harmony export */ });
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bezier.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs");


const easeIn = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_0__.cubicBezier)(0.42, 0, 0.58, 1);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mirrorEasing: () => (/* binding */ mirrorEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
const mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/reverse.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reverseEasing: () => (/* binding */ reverseEasing)
/* harmony export */ });
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/create-generator-easing.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/create-generator-easing.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGeneratorEasing: () => (/* binding */ createGeneratorEasing)
/* harmony export */ });
/* harmony import */ var _animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation/generators/utils/calc-duration.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/calc-duration.mjs");
/* harmony import */ var _utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/time-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs");



/**
 * Create a progress => progress easing function from a generator.
 */
function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale] });
    const duration = Math.min((0,_animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_0__.calcGeneratorDuration)(generator), _animation_generators_utils_calc_duration_mjs__WEBPACK_IMPORTED_MODULE_0__.maxGeneratorDuration);
    return {
        type: "keyframes",
        ease: (progress) => generator.next(duration * progress).value / scale,
        duration: (0,_utils_time_conversion_mjs__WEBPACK_IMPORTED_MODULE_1__.millisecondsToSeconds)(duration),
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/get-easing-for-segment.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEasingForSegment: () => (/* binding */ getEasingForSegment)
/* harmony export */ });
/* harmony import */ var _utils_wrap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/wrap.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/wrap.mjs");
/* harmony import */ var _is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-easing-array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs");



function getEasingForSegment(easing, i) {
    return (0,_is_easing_array_mjs__WEBPACK_IMPORTED_MODULE_0__.isEasingArray)(easing) ? easing[(0,_utils_wrap_mjs__WEBPACK_IMPORTED_MODULE_1__.wrap)(0, easing.length, i)] : easing;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBezierDefinition: () => (/* binding */ isBezierDefinition)
/* harmony export */ });
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-easing-array.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEasingArray: () => (/* binding */ isEasingArray)
/* harmony export */ });
const isEasingArray = (ease) => {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/map.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easingDefinitionToFunction: () => (/* binding */ easingDefinitionToFunction)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cubic-bezier.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/cubic-bezier.mjs");
/* harmony import */ var _ease_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ease.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs");
/* harmony import */ var _circ_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../circ.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/circ.mjs");
/* harmony import */ var _back_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../back.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/back.mjs");
/* harmony import */ var _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../anticipate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/anticipate.mjs");
/* harmony import */ var _is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-bezier-definition.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/easing/utils/is-bezier-definition.mjs");









const easingLookup = {
    linear: _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop,
    easeIn: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeIn,
    easeInOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeInOut,
    easeOut: _ease_mjs__WEBPACK_IMPORTED_MODULE_1__.easeOut,
    circIn: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circIn,
    circInOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circInOut,
    circOut: _circ_mjs__WEBPACK_IMPORTED_MODULE_2__.circOut,
    backIn: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backIn,
    backInOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backInOut,
    backOut: _back_mjs__WEBPACK_IMPORTED_MODULE_3__.backOut,
    anticipate: _anticipate_mjs__WEBPACK_IMPORTED_MODULE_4__.anticipate,
};
const easingDefinitionToFunction = (definition) => {
    if ((0,_is_bezier_definition_mjs__WEBPACK_IMPORTED_MODULE_5__.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0,_cubic_bezier_mjs__WEBPACK_IMPORTED_MODULE_7__.cubicBezier)(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_6__.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderBatcher: () => (/* binding */ createRenderBatcher),
/* harmony export */   stepsOrder: () => (/* binding */ stepsOrder)
/* harmony export */ });
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalConfig.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _render_step_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-step.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs");



const stepsOrder = [
    "read", // Read
    "resolveKeyframes", // Write/Read/Write/Read
    "update", // Compute
    "preRender", // Compute
    "render", // Write
    "postRender", // Compute
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    const flagRunNextFrame = () => (runNextFrame = true);
    const steps = stepsOrder.reduce((acc, key) => {
        acc[key] = (0,_render_step_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderStep)(flagRunNextFrame);
        return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = () => {
        const timestamp = _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionGlobalConfig.useManualTiming
            ? state.timestamp
            : performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed
            ? 1000 / 60
            : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = () => {
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) {
            scheduleNextBatch(processBatch);
        }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false) => {
            if (!runNextFrame)
                wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process) => {
        for (let i = 0; i < stepsOrder.length; i++) {
            steps[stepsOrder[i]].cancel(process);
        }
    };
    return { schedule, cancel, state, steps };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelFrame: () => (/* binding */ cancelFrame),
/* harmony export */   frame: () => (/* binding */ frame),
/* harmony export */   frameData: () => (/* binding */ frameData),
/* harmony export */   frameSteps: () => (/* binding */ frameSteps)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _batcher_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batcher.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs");




const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps, } = (0,_batcher_mjs__WEBPACK_IMPORTED_MODULE_0__.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop, true);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRenderStep: () => (/* binding */ createRenderStep)
/* harmony export */ });
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */
    let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */
    let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */
    const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false,
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (callback, keepAlive = false, immediate = false) => {
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive)
                toKeepAlive.add(callback);
            if (!queue.has(callback))
                queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (callback) => {
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (frameData) => {
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */
            if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [nextFrame, thisFrame];
            // Clear the next frame queue
            nextFrame.clear();
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        },
    };
    return step;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   time: () => (/* binding */ time)
/* harmony export */ });
/* harmony import */ var _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/GlobalConfig.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs");
/* harmony import */ var _frame_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");



let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */
const time = {
    now: () => {
        if (now === undefined) {
            time.set(_frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.isProcessing || _utils_GlobalConfig_mjs__WEBPACK_IMPORTED_MODULE_1__.MotionGlobalConfig.useManualTiming
                ? _frame_mjs__WEBPACK_IMPORTED_MODULE_0__.frameData.timestamp
                : performance.now());
        }
        return now;
    },
    set: (newTime) => {
        now = newTime;
        queueMicrotask(clearTime);
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureDefinitions: () => (/* binding */ featureDefinitions)
/* harmony export */ });
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
};
const featureDefinitions = {};
for (const key in featureProps) {
    featureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name]),
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isForcedMotionValue: () => (/* binding */ isForcedMotionValue)
/* harmony export */ });
/* harmony import */ var _projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/styles/scale-correction.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-correction.mjs");
/* harmony import */ var _render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../render/html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");



function isForcedMotionValue(key, { layout, layoutId }) {
    return (_render_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key) ||
        key.startsWith("origin") ||
        ((layout || layoutId !== undefined) &&
            (!!_projection_styles_scale_correction_mjs__WEBPACK_IMPORTED_MODULE_1__.scaleCorrectors[key] || key === "opacity")));
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertBoundingBoxToBox: () => (/* binding */ convertBoundingBoxToBox),
/* harmony export */   convertBoxToBoundingBox: () => (/* binding */ convertBoxToBoundingBox),
/* harmony export */   transformBoxPoints: () => (/* binding */ transformBoxPoints)
/* harmony export */ });
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToBox({ top, left, right, bottom, }) {
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoxPoints(point, transformPoint) {
    if (!transformPoint)
        return point;
    const topLeft = transformPoint({ x: point.left, y: point.top });
    const bottomRight = transformPoint({ x: point.right, y: point.bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyAxisDelta: () => (/* binding */ applyAxisDelta),
/* harmony export */   applyBoxDelta: () => (/* binding */ applyBoxDelta),
/* harmony export */   applyPointDelta: () => (/* binding */ applyPointDelta),
/* harmony export */   applyTreeDeltas: () => (/* binding */ applyTreeDeltas),
/* harmony export */   scalePoint: () => (/* binding */ scalePoint),
/* harmony export */   transformAxis: () => (/* binding */ transformAxis),
/* harmony export */   transformBox: () => (/* binding */ transformBox),
/* harmony export */   translateAxis: () => (/* binding */ translateAxis)
/* harmony export */ });
/* harmony import */ var _utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mix/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs");



/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
        return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */
        const { visualElement } = node.options;
        if (visualElement &&
            visualElement.props.style &&
            visualElement.props.style.display === "contents") {
            continue;
        }
        if (isSharedTransition &&
            node.options.layoutScroll &&
            node.scroll &&
            node !== node.root) {
            transformBox(box, {
                x: -node.scroll.offset.x,
                y: -node.scroll.offset.y,
            });
        }
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0,_utils_has_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.hasTransform)(node.latestValues)) {
            transformBox(box, node.latestValues);
        }
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */
    if (treeScale.x < TREE_SCALE_SNAP_MAX &&
        treeScale.x > TREE_SCALE_SNAP_MIN) {
        treeScale.x = 1.0;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX &&
        treeScale.y > TREE_SCALE_SNAP_MIN) {
        treeScale.y = 1.0;
    }
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0,_utils_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAxis: () => (/* binding */ createAxis),
/* harmony export */   createAxisDelta: () => (/* binding */ createAxisDelta),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   createDelta: () => (/* binding */ createDelta)
/* harmony export */ });
const createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
});
const createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta(),
});
const createAxis = () => ({ min: 0, max: 0 });
const createBox = () => ({
    x: createAxis(),
    y: createAxis(),
});




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-correction.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-correction.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScaleCorrector: () => (/* binding */ addScaleCorrector),
/* harmony export */   scaleCorrectors: () => (/* binding */ scaleCorrectors)
/* harmony export */ });
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    Object.assign(scaleCorrectors, correctors);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   has2DTranslate: () => (/* binding */ has2DTranslate),
/* harmony export */   hasScale: () => (/* binding */ hasScale),
/* harmony export */   hasTransform: () => (/* binding */ hasTransform)
/* harmony export */ });
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return (!isIdentityScale(scale) ||
        !isIdentityScale(scaleX) ||
        !isIdentityScale(scaleY));
}
function hasTransform(values) {
    return (hasScale(values) ||
        has2DTranslate(values) ||
        values.z ||
        values.rotate ||
        values.rotateX ||
        values.rotateY ||
        values.skewX ||
        values.skewY);
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   measurePageBox: () => (/* binding */ measurePageBox),
/* harmony export */   measureViewportBox: () => (/* binding */ measureViewportBox)
/* harmony export */ });
/* harmony import */ var _geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs");
/* harmony import */ var _geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/delta-apply.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs");



function measureViewportBox(instance, transformPoint) {
    return (0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.convertBoundingBoxToBox)((0,_geometry_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.x, scroll.offset.x);
        (0,_geometry_delta_apply_mjs__WEBPACK_IMPORTED_MODULE_1__.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualElement: () => (/* binding */ VisualElement)
/* harmony export */ });
/* harmony import */ var _utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/reduced-motion/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs");
/* harmony import */ var _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/reduced-motion/state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs");
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/is-controlling-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs");
/* harmony import */ var _utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs");
/* harmony import */ var _utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/resolve-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../motion/features/definitions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs");
/* harmony import */ var _store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs");
/* harmony import */ var _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/is-numerical-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/is-zero-value-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs");
/* harmony import */ var _dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dom/value-types/find.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/find.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dom/value-types/animatable-none.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../projection/geometry/models.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");






















const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */
class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState, }, options = {}) {
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */
        this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */
        this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */
        this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */
        this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */
        this.values = new Map();
        this.KeyframeResolver = _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__.KeyframeResolver;
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */
        this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */
        this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */
        this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */
        this.propEventSubscriptions = {};
        this.notifyUpdate = () => this.notify("Update", this.latestValues);
        this.render = () => {
            if (!this.current)
                return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = () => {
            const now = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_1__.time.now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.render(this.render, false, true);
            }
        };
        const { latestValues, renderState } = visualState;
        this.latestValues = latestValues;
        this.baseTarget = { ...latestValues };
        this.initialValues = props.initial ? { ...latestValues } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isControllingVariants)(props);
        this.isVariantNode = (0,_utils_is_controlling_variants_mjs__WEBPACK_IMPORTED_MODULE_3__.isVariantNode)(props);
        if (this.isVariantNode) {
            this.variantChildren = new Set();
        }
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */
        const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for (const key in initialMotionValues) {
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value)) {
                value.set(latestValues[key], false);
            }
        }
    }
    mount(instance) {
        this.current = instance;
        _store_mjs__WEBPACK_IMPORTED_MODULE_5__.visualElementStore.set(instance, this);
        if (this.projection && !this.projection.instance) {
            this.projection.mount(instance);
        }
        if (this.parent && this.isVariantNode && !this.isControllingVariants) {
            this.removeFromVariantTree = this.parent.addVariantChild(this);
        }
        this.values.forEach((value, key) => this.bindToMotionValue(key, value));
        if (!_utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__.hasReducedMotionListener.current) {
            (0,_utils_reduced_motion_index_mjs__WEBPACK_IMPORTED_MODULE_7__.initPrefersReducedMotion)();
        }
        this.shouldReduceMotion =
            this.reducedMotionConfig === "never"
                ? false
                : this.reducedMotionConfig === "always"
                    ? true
                    : _utils_reduced_motion_state_mjs__WEBPACK_IMPORTED_MODULE_6__.prefersReducedMotion.current;
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_8__.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        }
        if (this.parent)
            this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        _store_mjs__WEBPACK_IMPORTED_MODULE_5__.visualElementStore.delete(this.current);
        this.projection && this.projection.unmount();
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.notifyUpdate);
        (0,_frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove) => remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for (const key in this.events) {
            this.events[key].clear();
        }
        for (const key in this.features) {
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) {
            this.valueSubscriptions.get(key)();
        }
        const valueIsTransform = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_9__.transformProps.has(key);
        const removeOnChange = value.on("change", (latestValue) => {
            this.latestValues[key] = latestValue;
            this.props.onUpdate && _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_2__.frame.preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) {
                this.projection.isTransformDirty = true;
            }
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) {
            removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        }
        this.valueSubscriptions.set(key, () => {
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck)
                removeSyncCheck();
            if (value.owner)
                value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */
        if (!this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== other.type) {
            return 0;
        }
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for (key in _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__.featureDefinitions) {
            const featureDefinition = _motion_features_definitions_mjs__WEBPACK_IMPORTED_MODULE_10__.featureDefinitions[key];
            if (!featureDefinition)
                continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */
            if (!this.features[key] &&
                FeatureConstructor &&
                isEnabled(this.props)) {
                this.features[key] = new FeatureConstructor(this);
            }
            /**
             * If we have a feature, mount or update it.
             */
            if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) {
                    feature.update();
                }
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_11__.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) {
            this.scheduleRender();
        }
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */
        for (let i = 0; i < propEventHandlers.length; i++) {
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = ("on" + key);
            const listener = props[listenerName];
            if (listener) {
                this.propEventSubscriptions[key] = this.on(key, listener);
            }
        }
        this.prevMotionValues = (0,_utils_motion_values_mjs__WEBPACK_IMPORTED_MODULE_12__.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) {
            this.handleChildMotionValue();
        }
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
                ? this.parent.getClosestVariantNode()
                : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren &&
                closestVariantNode.variantChildren.add(child);
            return () => closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue)
                this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) {
            return this.props.values[key];
        }
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_13__.motionValue)(defaultValue === null ? undefined : defaultValue, { owner: this });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
        var _a;
        let value = this.latestValues[key] !== undefined || !this.current
            ? this.latestValues[key]
            : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" &&
                ((0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_14__.isNumericalString)(value) || (0,_utils_is_zero_value_string_mjs__WEBPACK_IMPORTED_MODULE_15__.isZeroValueString)(value))) {
                // If this is a number read as a string, ie "0" or "200", convert it to a number
                value = parseFloat(value);
            }
            else if (!(0,_dom_value_types_find_mjs__WEBPACK_IMPORTED_MODULE_16__.findValueType)(value) && _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_17__.complex.test(target)) {
                value = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_18__.getAnimatableNone)(key, target);
            }
            this.setBaseTarget(key, (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value) ? value.get() : value);
        }
        return (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0,_utils_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_19__.resolveVariantFromProps)(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
            if (variant) {
                valueFromInitial = variant[key];
            }
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */
        if (initial && valueFromInitial !== undefined) {
            return valueFromInitial;
        }
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */
        const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_4__.isMotionValue)(target))
            return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */
        return this.initialValues[key] !== undefined &&
            valueFromInitial === undefined
            ? undefined
            : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_20__.SubscriptionManager();
        }
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].notify(...args);
        }
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMKeyframesResolver: () => (/* binding */ DOMKeyframesResolver)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_none_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/utils/is-none.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs");
/* harmony import */ var _utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/css-variables-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs");
/* harmony import */ var _utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/unit-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");
/* harmony import */ var _value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./value-types/dimensions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/KeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs");
/* harmony import */ var _html_utils_make_none_animatable_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html/utils/make-none-animatable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs");








class DOMKeyframesResolver extends _utils_KeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_0__.KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current)
            return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0,_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableToken)(keyframe)) {
                    const resolved = (0,_utils_css_variables_conversion_mjs__WEBPACK_IMPORTED_MODULE_2__.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) {
                        unresolvedKeyframes[i] = resolved;
                    }
                    if (i === unresolvedKeyframes.length - 1) {
                        this.finalKeyframe = keyframe;
                    }
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */
        this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */
        if (!_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
            return;
        }
        const [origin, target] = unresolvedKeyframes;
        const originType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__.findDimensionValueType)(origin);
        const targetType = (0,_value_types_dimensions_mjs__WEBPACK_IMPORTED_MODULE_4__.findDimensionValueType)(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */
        if (originType === targetType)
            return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */
        if ((0,_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.isNumOrPxType)(originType) && (0,_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.isNumOrPxType)(targetType)) {
            for (let i = 0; i < unresolvedKeyframes.length; i++) {
                const value = unresolvedKeyframes[i];
                if (typeof value === "string") {
                    unresolvedKeyframes[i] = parseFloat(value);
                }
            }
        }
        else {
            /**
             * Else, the only way to resolve this is by measuring the element.
             */
            this.needsMeasurement = true;
        }
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if ((0,_animation_utils_is_none_mjs__WEBPACK_IMPORTED_MODULE_5__.isNone)(unresolvedKeyframes[i])) {
                noneKeyframeIndexes.push(i);
            }
        }
        if (noneKeyframeIndexes.length) {
            (0,_html_utils_make_none_animatable_mjs__WEBPACK_IMPORTED_MODULE_6__.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
        }
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current)
            return;
        if (name === "height") {
            this.suspendedScrollY = window.pageYOffset;
        }
        this.measuredOrigin = _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) {
            element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
        }
    }
    measureEndState() {
        var _a;
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current)
            return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_3__.positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) {
            this.finalKeyframe = finalKeyframe;
        }
        // If we removed transform values, reapply them before the next render
        if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) {
            this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
                element
                    .getValue(unsetTransformName)
                    .set(unsetTransformValue);
            });
        }
        this.resolveNoneKeyframes();
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMVisualElement: () => (/* binding */ DOMVisualElement)
/* harmony export */ });
/* harmony import */ var _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs");
/* harmony import */ var _DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMKeyframesResolver.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");




class DOMVisualElement extends _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.VisualElement {
    constructor() {
        super(...arguments);
        this.KeyframeResolver = _DOMKeyframesResolver_mjs__WEBPACK_IMPORTED_MODULE_1__.DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */
        return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style
            ? props.style[key]
            : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_2__.isMotionValue)(children)) {
            this.childSubscription = children.on("change", (latest) => {
                if (this.current) {
                    this.current.textContent = `${latest}`;
                }
            });
        }
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/supports.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/scroll/supports.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportsScrollTimeline: () => (/* binding */ supportsScrollTimeline)
/* harmony export */ });
/* harmony import */ var _utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/memo.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs");


const supportsScrollTimeline = (0,_utils_memo_mjs__WEBPACK_IMPORTED_MODULE_0__.memo)(() => window.ScrollTimeline !== undefined);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelToDash: () => (/* binding */ camelToDash)
/* harmony export */ });
/**
 * Convert camelCase to dash-case properties.
 */
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVariableValue: () => (/* binding */ getVariableValue),
/* harmony export */   parseCSSVariable: () => (/* binding */ parseCSSVariable)
/* harmony export */ });
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/is-numerical-string.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs");
/* harmony import */ var _is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");




/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
const splitCSSVariableRegex = 
// eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
        return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 !== null && token1 !== void 0 ? token1 : token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_0__.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0,_utils_is_numerical_string_mjs__WEBPACK_IMPORTED_MODULE_1__.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0,_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_2__.isCSSVariableToken)(fallback)
        ? getVariableValue(fallback, element, depth + 1)
        : fallback;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCSSVariableName: () => (/* binding */ isCSSVariableName),
/* harmony export */   isCSSVariableToken: () => (/* binding */ isCSSVariableToken)
/* harmony export */ });
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = 
/*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = 
/*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
        return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGElement: () => (/* binding */ isSVGElement)
/* harmony export */ });
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumOrPxType: () => (/* binding */ isNumOrPxType),
/* harmony export */   positionalKeys: () => (/* binding */ positionalKeys),
/* harmony export */   positionalValues: () => (/* binding */ positionalValues),
/* harmony export */   removeNonTranslationalTransform: () => (/* binding */ removeNonTranslationalTransform)
/* harmony export */ });
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");




const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
]);
const isNumOrPxType = (v) => v === _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number || v === _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px;
const getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
    if (transform === "none" || !transform)
        return 0;
    const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        const matrix = transform.match(/^matrix\((.+)\)$/u);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
};
const transformKeys = new Set(["x", "y", "z"]);
const nonTranslationalTransformKeys = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnimatableNone: () => (/* binding */ getAnimatableNone)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _defaults_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs");




function getAnimatableNone(key, value) {
    let defaultValueType = (0,_defaults_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultValueType)(key);
    if (defaultValueType !== _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_1__.filter)
        defaultValueType = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex;
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone
        ? defaultValueType.getAnimatableNone(value)
        : undefined;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValueTypes: () => (/* binding */ defaultValueTypes),
/* harmony export */   getDefaultValueType: () => (/* binding */ getDefaultValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/filter.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs");




/**
 * A map of default value types for common values
 */
const defaultValueTypes = {
    ..._number_mjs__WEBPACK_IMPORTED_MODULE_0__.numberValueTypes,
    // Color props
    color: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    backgroundColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    outlineColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    fill: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    stroke: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    // Border props
    borderColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderTopColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderRightColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderBottomColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    borderLeftColor: _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color,
    filter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
    WebkitFilter: _value_types_complex_filter_mjs__WEBPACK_IMPORTED_MODULE_2__.filter,
};
/**
 * Gets the default ValueType for the provided value key
 */
const getDefaultValueType = (key) => defaultValueTypes[key];




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimensionValueTypes: () => (/* binding */ dimensionValueTypes),
/* harmony export */   findDimensionValueType: () => (/* binding */ findDimensionValueType)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs");
/* harmony import */ var _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-auto.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-auto.mjs");





/**
 * A list of value types commonly used for dimensions
 */
const dimensionValueTypes = [_value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.px, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.degrees, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vw, _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.vh, _type_auto_mjs__WEBPACK_IMPORTED_MODULE_2__.auto];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
const findDimensionValueType = (v) => dimensionValueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/find.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/find.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findValueType: () => (/* binding */ findValueType)
/* harmony export */ });
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/dimensions.mjs");
/* harmony import */ var _test_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs");





/**
 * A list of all ValueTypes
 */
const valueTypes = [..._dimensions_mjs__WEBPACK_IMPORTED_MODULE_0__.dimensionValueTypes, _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_1__.color, _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_2__.complex];
/**
 * Tests a value against the list of ValueTypes
 */
const findValueType = (v) => valueTypes.find((0,_test_mjs__WEBPACK_IMPORTED_MODULE_3__.testValueType)(v));




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValueAsType: () => (/* binding */ getValueAsType)
/* harmony export */ });
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
const getValueAsType = (value, type) => {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number-browser.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number-browser.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserNumberValueTypes: () => (/* binding */ browserNumberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");


const browserNumberValueTypes = {
    // Border props
    borderWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRightWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderLeftWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    radius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderTopRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomRightRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    borderBottomLeftRadius: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Positioning props
    width: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxWidth: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    height: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    maxHeight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    top: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    right: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    bottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    left: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Spacing props
    padding: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    paddingLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    margin: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginTop: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginRight: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginBottom: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    marginLeft: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    // Misc
    backgroundPositionX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    backgroundPositionY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numberValueTypes: () => (/* binding */ numberValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _number_browser_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-browser.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number-browser.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/transform.mjs");
/* harmony import */ var _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type-int.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-int.mjs");






const numberValueTypes = {
    ..._number_browser_mjs__WEBPACK_IMPORTED_MODULE_0__.browserNumberValueTypes,
    ..._transform_mjs__WEBPACK_IMPORTED_MODULE_1__.transformValueTypes,
    zIndex: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
    size: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_3__.px,
    // SVG
    fillOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.alpha,
    strokeOpacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_4__.alpha,
    numOctaves: _type_int_mjs__WEBPACK_IMPORTED_MODULE_2__.int,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   testValueType: () => (/* binding */ testValueType)
/* harmony export */ });
/**
 * Tests a provided value against a ValueType
 */
const testValueType = (v) => (type) => type.test(v);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/transform.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/transform.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformValueTypes: () => (/* binding */ transformValueTypes)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");



const transformValueTypes = {
    rotate: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    rotateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    scale: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleX: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleY: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    scaleZ: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.scale,
    skew: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    skewY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.degrees,
    distance: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    translateZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    x: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    y: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    z: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    perspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    transformPerspective: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
    opacity: _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha,
    originX: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originY: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.progressPercentage,
    originZ: _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-auto.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-auto.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auto: () => (/* binding */ auto)
/* harmony export */ });
/**
 * ValueType for "auto"
 */
const auto = {
    test: (v) => v === "auto",
    parse: (v) => v,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-int.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/type-int.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   int: () => (/* binding */ int)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");


const int = {
    ..._value_types_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_0__.number,
    transform: Math.round,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/viewport/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inView: () => (/* binding */ inView)
/* harmony export */ });
/* harmony import */ var _motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs */ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs");


const thresholds = {
    some: 0,
    all: 1,
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0,_motion_dom_dist_es_utils_resolve_elements_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveElements)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries) => {
        entries.forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */
            if (entry.isIntersecting === Boolean(onEnd))
                return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                }
                else {
                    observer.unobserve(entry.target);
                }
            }
            else if (onEnd) {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount],
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLVisualElement: () => (/* binding */ HTMLVisualElement),
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/build-styles.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dom/utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/utils/measure.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");









function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "html";
        this.renderInstance = _utils_render_mjs__WEBPACK_IMPORTED_MODULE_1__.renderHTML;
    }
    readValueFromInstance(instance, key) {
        if (_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_4__.isCSSVariableName)(key)
                ? computedStyle.getPropertyValue(key)
                : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0,_projection_utils_measure_mjs__WEBPACK_IMPORTED_MODULE_5__.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0,_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_6__.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_7__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHTMLStyles: () => (/* binding */ buildHTMLStyles)
/* harmony export */ });
/* harmony import */ var _build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./build-transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-transform.mjs");
/* harmony import */ var _dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs");






function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */
    for (const key in latestValues) {
        const value = latestValues[key];
        if (_transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformProps.has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        }
        else if ((0,_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        }
        else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_2__.getValueAsType)(value, _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_3__.numberValueTypes[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] =
                    valueAsType;
            }
            else {
                style[key] = valueAsType;
            }
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) {
            style.transform = (0,_build_transform_mjs__WEBPACK_IMPORTED_MODULE_4__.buildTransform)(latestValues, state.transform, transformTemplate);
        }
        else if (style.transform) {
            /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */
            style.transform = "none";
        }
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */
    if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0, } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-transform.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-transform.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTransform: () => (/* binding */ buildTransform)
/* harmony export */ });
/* harmony import */ var _transform_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/get-as-type.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs");
/* harmony import */ var _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/value-types/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/number.mjs");




const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
const numTransforms = _transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder.length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */
    for (let i = 0; i < numTransforms; i++) {
        const key = _transform_mjs__WEBPACK_IMPORTED_MODULE_0__.transformPropOrder[i];
        const value = latestValues[key];
        if (value === undefined)
            continue;
        let valueIsDefault = true;
        if (typeof value === "number") {
            valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        }
        else {
            valueIsDefault = parseFloat(value) === 0;
        }
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0,_dom_value_types_get_as_type_mjs__WEBPACK_IMPORTED_MODULE_1__.getValueAsType)(value, _dom_value_types_number_mjs__WEBPACK_IMPORTED_MODULE_2__.numberValueTypes[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) {
                transform[key] = valueAsType;
            }
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeNoneKeyframesAnimatable: () => (/* binding */ makeNoneKeyframesAnimatable)
/* harmony export */ });
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dom/value-types/animatable-none.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs");



/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */
const invalidTemplates = new Set(["auto", "none", "0"]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" &&
            !invalidTemplates.has(keyframe) &&
            (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_0__.analyseComplexValue)(keyframe).values.length) {
            animatableTemplate = unresolvedKeyframes[i];
        }
        i++;
    }
    if (animatableTemplate && name) {
        for (const noneIndex of noneKeyframeIndexes) {
            unresolvedKeyframes[noneIndex] = (0,_dom_value_types_animatable_none_mjs__WEBPACK_IMPORTED_MODULE_1__.getAnimatableNone)(name, animatableTemplate);
        }
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHTML: () => (/* binding */ renderHTML)
/* harmony export */ });
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for (const key in vars) {
        element.style.setProperty(key, vars[key]);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs":
/*!******************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../motion/utils/is-forced-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");



function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for (const key in style) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(style[key]) ||
            (prevProps.style &&
                (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevProps.style[key])) ||
            (0,_motion_utils_is_forced_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isForcedMotionValue)(key, props) ||
            ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transformPropOrder: () => (/* binding */ transformPropOrder),
/* harmony export */   transformProps: () => (/* binding */ transformProps)
/* harmony export */ });
/**
 * Generate a list of every possible transform key.
 */
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
];
/**
 * A quick lookup for transform props.
 */
const transformProps = new Set(transformPropOrder);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/object/ObjectVisualElement.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectVisualElement: () => (/* binding */ ObjectVisualElement)
/* harmony export */ });
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs");



function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends _VisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.VisualElement {
    constructor() {
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") {
                return value;
            }
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0,_projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox)();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   visualElementStore: () => (/* binding */ visualElementStore)
/* harmony export */ });
const visualElementStore = new WeakMap();




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGVisualElement: () => (/* binding */ SVGVisualElement)
/* harmony export */ });
/* harmony import */ var _utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/scrape-motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs");
/* harmony import */ var _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DOMVisualElement.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMVisualElement.mjs");
/* harmony import */ var _utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/build-attrs.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs");
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dom/utils/camel-to-dash.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/camel-case-attrs.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");
/* harmony import */ var _utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/render.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs");
/* harmony import */ var _dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/value-types/defaults.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/defaults.mjs");
/* harmony import */ var _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projection/geometry/models.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs");
/* harmony import */ var _utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/is-svg-tag.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs");











class SVGVisualElement extends _dom_DOMVisualElement_mjs__WEBPACK_IMPORTED_MODULE_0__.DOMVisualElement {
    constructor() {
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = _projection_geometry_models_mjs__WEBPACK_IMPORTED_MODULE_1__.createBox;
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if (_html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformProps.has(key)) {
            const defaultType = (0,_dom_value_types_defaults_mjs__WEBPACK_IMPORTED_MODULE_3__.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !_utils_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_4__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_5__.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0,_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_6__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
        (0,_utils_build_attrs_mjs__WEBPACK_IMPORTED_MODULE_7__.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0,_utils_render_mjs__WEBPACK_IMPORTED_MODULE_8__.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0,_utils_is_svg_tag_mjs__WEBPACK_IMPORTED_MODULE_9__.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGAttrs: () => (/* binding */ buildSVGAttrs)
/* harmony export */ });
/* harmony import */ var _html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/build-styles.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs");
/* harmony import */ var _transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-origin.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs");
/* harmony import */ var _path_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs");




/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, 
// This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate) {
    (0,_html_utils_build_styles_mjs__WEBPACK_IMPORTED_MODULE_0__.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */
    if (isSVGTag) {
        if (state.style.viewBox) {
            state.attrs.viewBox = state.style.viewBox;
        }
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        if (dimensions)
            style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions &&
        (originX !== undefined || originY !== undefined || style.transform)) {
        style.transformOrigin = (0,_transform_origin_mjs__WEBPACK_IMPORTED_MODULE_1__.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    if (attrScale !== undefined)
        attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) {
        (0,_path_mjs__WEBPACK_IMPORTED_MODULE_2__.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCaseAttributes: () => (/* binding */ camelCaseAttributes)
/* harmony export */ });
/**
 * A set of attribute names that are always read/written as camel case.
 */
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSVGTag: () => (/* binding */ isSVGTag)
/* harmony export */ });
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSVGPath: () => (/* binding */ buildSVGPath)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");


const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(-offset);
    // Build the dash array
    const pathLength = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(length);
    const pathSpacing = _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderSVG: () => (/* binding */ renderSVG)
/* harmony export */ });
/* harmony import */ var _dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom/utils/camel-to-dash.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs");
/* harmony import */ var _html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/render.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs");
/* harmony import */ var _camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camel-case-attrs.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs");




function renderSVG(element, renderState, _styleProp, projection) {
    (0,_html_utils_render_mjs__WEBPACK_IMPORTED_MODULE_0__.renderHTML)(element, renderState, undefined, projection);
    for (const key in renderState.attrs) {
        element.setAttribute(!_camel_case_attrs_mjs__WEBPACK_IMPORTED_MODULE_1__.camelCaseAttributes.has(key) ? (0,_dom_utils_camel_to_dash_mjs__WEBPACK_IMPORTED_MODULE_2__.camelToDash)(key) : key, renderState.attrs[key]);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrapeMotionValuesFromProps: () => (/* binding */ scrapeMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");
/* harmony import */ var _html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../html/utils/scrape-motion-values.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs");
/* harmony import */ var _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html/utils/transform.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/transform.mjs");




function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0,_html_utils_scrape_motion_values_mjs__WEBPACK_IMPORTED_MODULE_0__.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for (const key in props) {
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(props[key]) ||
            (0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.isMotionValue)(prevProps[key])) {
            const targetKey = _html_utils_transform_mjs__WEBPACK_IMPORTED_MODULE_2__.transformPropOrder.indexOf(key) !== -1
                ? "attr" + key.charAt(0).toUpperCase() + key.substring(1)
                : key;
            newValues[targetKey] = props[key];
        }
    }
    return newValues;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcSVGTransformOrigin: () => (/* binding */ calcSVGTransformOrigin)
/* harmony export */ });
/* harmony import */ var _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../value/types/numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");


function calcOrigin(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : _value_types_numbers_units_mjs__WEBPACK_IMPORTED_MODULE_0__.px.transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/KeyframesResolver.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyframeResolver: () => (/* binding */ KeyframeResolver),
/* harmony export */   flushKeyframeResolvers: () => (/* binding */ flushKeyframeResolvers)
/* harmony export */ });
/* harmony import */ var _dom_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/utils/unit-conversion.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");



const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */
        elementsToMeasure.forEach((element) => {
            const removedTransforms = (0,_dom_utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_0__.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length)
                return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element) => {
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) {
                restore.forEach(([key, value]) => {
                    var _a;
                    (_a = element.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(value);
                });
            }
        });
        // Read
        resolversToMeasure.forEach((resolver) => resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver) => {
            if (resolver.suspendedScrollY !== undefined) {
                window.scrollTo(0, resolver.suspendedScrollY);
            }
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete());
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver) => {
        resolver.readKeyframes();
        if (resolver.needsMeasurement) {
            anyNeedsMeasurement = true;
        }
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
        /**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */
        this.isComplete = false;
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */
        this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */
        this.needsMeasurement = false;
        /**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */
        this.isScheduled = false;
        this.unresolvedKeyframes = [...unresolvedKeyframes];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.isScheduled = true;
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.read(readAllKeyframes);
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_1__.frame.resolveKeyframes(measureAllKeyframes);
            }
        }
        else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        /**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
            if (unresolvedKeyframes[i] === null) {
                /**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */
                if (i === 0) {
                    const currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                    const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                    if (currentValue !== undefined) {
                        unresolvedKeyframes[0] = currentValue;
                    }
                    else if (element && name) {
                        const valueAsRead = element.readValue(name, finalKeyframe);
                        if (valueAsRead !== undefined && valueAsRead !== null) {
                            unresolvedKeyframes[0] = valueAsRead;
                        }
                    }
                    if (unresolvedKeyframes[0] === undefined) {
                        unresolvedKeyframes[0] = finalKeyframe;
                    }
                    if (motionValue && currentValue === undefined) {
                        motionValue.set(unresolvedKeyframes[0]);
                    }
                }
                else {
                    unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
                }
            }
        }
    }
    setFinalKeyframe() { }
    measureInitialState() { }
    renderEndStyles() { }
    measureEndState() { }
    complete() {
        this.isComplete = true;
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
        toResolve.delete(this);
    }
    cancel() {
        if (!this.isComplete) {
            this.isScheduled = false;
            toResolve.delete(this);
        }
    }
    resume() {
        if (!this.isComplete)
            this.scheduleResolve();
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isControllingVariants: () => (/* binding */ isControllingVariants),
/* harmony export */   isVariantNode: () => (/* binding */ isVariantNode)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animation/utils/is-animation-controls.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs");
/* harmony import */ var _is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-variant-label.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs");
/* harmony import */ var _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variant-props.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs");




function isControllingVariants(props) {
    return ((0,_animation_utils_is_animation_controls_mjs__WEBPACK_IMPORTED_MODULE_0__.isAnimationControls)(props.animate) ||
        _variant_props_mjs__WEBPACK_IMPORTED_MODULE_1__.variantProps.some((name) => (0,_is_variant_label_mjs__WEBPACK_IMPORTED_MODULE_2__.isVariantLabel)(props[name])));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVariantLabel: () => (/* binding */ isVariantLabel)
/* harmony export */ });
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateMotionValuesFromProps: () => (/* binding */ updateMotionValuesFromProps)
/* harmony export */ });
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");




function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */
            element.addValue(key, nextValue);
            /**
             * Check the version of the incoming motion value with this version
             * and warn against mismatches.
             */
            if (true) {
                (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(nextValue.version === "11.14.4", `Attempting to mix Motion versions ${nextValue.version} with 11.14.4 may not work as expected.`);
            }
        }
        else if ((0,_value_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(prevValue)) {
            /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */
            element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(nextValue, { owner: element }));
        }
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */
            if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) {
                    existingValue.jump(nextValue);
                }
                else if (!existingValue.hasAnimated) {
                    existingValue.set(nextValue);
                }
            }
            else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_2__.motionValue)(latestValue !== undefined ? latestValue : nextValue, { owner: element }));
            }
        }
    }
    // Handle removed values
    for (const key in prev) {
        if (next[key] === undefined)
            element.removeValue(key);
    }
    return next;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariant: () => (/* binding */ resolveVariant)
/* harmony export */ });
/* harmony import */ var _resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs");


function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0,_resolve_variants_mjs__WEBPACK_IMPORTED_MODULE_0__.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveVariantFromProps: () => (/* binding */ resolveVariantFromProps)
/* harmony export */ });
function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement === null || visualElement === void 0 ? void 0 : visualElement.values.forEach((value, key) => {
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */
    if (typeof definition === "string") {
        definition = props.variants && props.variants[definition];
    }
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */
    if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTarget: () => (/* binding */ setTarget)
/* harmony export */ });
/* harmony import */ var _utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/resolve-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/resolve-value.mjs");
/* harmony import */ var _value_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs");
/* harmony import */ var _resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve-dynamic-variants.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs");




/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, (0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_0__.motionValue)(value));
    }
}
function setTarget(visualElement, definition) {
    const resolved = (0,_resolve_dynamic_variants_mjs__WEBPACK_IMPORTED_MODULE_1__.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
        const value = (0,_utils_resolve_value_mjs__WEBPACK_IMPORTED_MODULE_2__.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   variantPriorityOrder: () => (/* binding */ variantPriorityOrder),
/* harmony export */   variantProps: () => (/* binding */ variantProps)
/* harmony export */ });
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
];
const variantProps = ["initial", ...variantPriorityOrder];




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionGlobalConfig: () => (/* binding */ MotionGlobalConfig)
/* harmony export */ });
const MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUniqueItem: () => (/* binding */ addUniqueItem),
/* harmony export */   moveItem: () => (/* binding */ moveItem),
/* harmony export */   removeItem: () => (/* binding */ removeItem)
/* harmony export */ });
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
        arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
        arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (min, max, v) => {
    if (v > max)
        return max;
    if (v < min)
        return min;
    return v;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hslaToRgba: () => (/* binding */ hslaToRgba)
/* harmony export */ });
// Adapted from https://gist.github.com/mjackson/5311256
function hueToRgb(p, q, t) {
    if (t < 0)
        t += 1;
    if (t > 1)
        t -= 1;
    if (t < 1 / 6)
        return p + (q - p) * 6 * t;
    if (t < 1 / 2)
        return q;
    if (t < 2 / 3)
        return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
        red = green = blue = lightness;
    }
    else {
        const q = lightness < 0.5
            ? lightness * (1 + saturation)
            : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha,
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interpolate: () => (/* binding */ interpolate)
/* harmony export */ });
/* harmony import */ var _clamp_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/progress.mjs");
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../motion-utils/dist/es/noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");
/* harmony import */ var _mix_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mix/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs");







function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || _mix_index_mjs__WEBPACK_IMPORTED_MODULE_0__.mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || _motion_utils_dist_es_noop_mjs__WEBPACK_IMPORTED_MODULE_1__.noop : ease;
            mixer = (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_2__.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */
    if (inputLength === 1)
        return () => output[0];
    if (inputLength === 2 && input[0] === input[1])
        return () => output[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [...input].reverse();
        output = [...output].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
        let i = 0;
        if (numMixers > 1) {
            for (; i < input.length - 2; i++) {
                if (v < input[i + 1])
                    break;
            }
        }
        const progressInRange = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_4__.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp
        ? (v) => interpolator((0,_clamp_mjs__WEBPACK_IMPORTED_MODULE_5__.clamp)(input[0], input[inputLength - 1], v))
        : interpolator;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBrowser: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof window !== "undefined";




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumericalString: () => (/* binding */ isNumericalString)
/* harmony export */ });
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-zero-value-string.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isZeroValueString: () => (/* binding */ isZeroValueString)
/* harmony export */ });
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memo: () => (/* binding */ memo)
/* harmony export */ });
function memo(callback) {
    let result;
    return () => {
        if (result === undefined)
            result = callback();
        return result;
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixColor: () => (/* binding */ mixColor),
/* harmony export */   mixLinearColor: () => (/* binding */ mixLinearColor)
/* harmony export */ });
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hsla-to-rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs");
/* harmony import */ var _value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../value/types/color/hex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../value/types/color/rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../value/types/color/hsla.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _immediate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./immediate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs");








// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [_value_types_color_hex_mjs__WEBPACK_IMPORTED_MODULE_0__.hex, _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba, _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_3__.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type))
        return false;
    let model = type.parse(color);
    if (type === _value_types_color_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla) {
        // TODO Remove this cast - needed since Motion's stricter typing
        model = (0,_hsla_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_4__.hslaToRgba)(model);
    }
    return model;
}
const mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
        return (0,_immediate_mjs__WEBPACK_IMPORTED_MODULE_5__.mixImmediate)(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0,_number_mjs__WEBPACK_IMPORTED_MODULE_6__.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return _value_types_color_rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform(blended);
    };
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMixer: () => (/* binding */ getMixer),
/* harmony export */   mixArray: () => (/* binding */ mixArray),
/* harmony export */   mixComplex: () => (/* binding */ mixComplex),
/* harmony export */   mixObject: () => (/* binding */ mixObject)
/* harmony export */ });
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _color_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs");
/* harmony import */ var _pipe_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipe.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs");
/* harmony import */ var _motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../motion-utils/dist/es/errors.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs");
/* harmony import */ var _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../value/types/color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../value/types/complex/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../render/dom/utils/is-css-variable.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs");
/* harmony import */ var _visibility_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visibility.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/visibility.mjs");
/* harmony import */ var _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./immediate.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs");










function mixNumber(a, b) {
    return (p) => (0,_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") {
        return mixNumber;
    }
    else if (typeof a === "string") {
        return (0,_render_dom_utils_is_css_variable_mjs__WEBPACK_IMPORTED_MODULE_1__.isCSSVariableToken)(a)
            ? _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate
            : _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.test(a)
                ? _color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor
                : mixComplex;
    }
    else if (Array.isArray(a)) {
        return mixArray;
    }
    else if (typeof a === "object") {
        return _value_types_color_index_mjs__WEBPACK_IMPORTED_MODULE_3__.color.test(a) ? _color_mjs__WEBPACK_IMPORTED_MODULE_4__.mixColor : mixObject;
    }
    return _immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate;
}
function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
        for (let i = 0; i < numValues; i++) {
            output[i] = blendValue[i](p);
        }
        return output;
    };
}
function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
        if (a[key] !== undefined && b[key] !== undefined) {
            blendValue[key] = getMixer(a[key])(a[key], b[key]);
        }
    }
    return (v) => {
        for (const key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target) => {
    const template = _value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.complex.createTransformer(target);
    const originStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.analyseComplexValue)(origin);
    const targetStats = (0,_value_types_complex_index_mjs__WEBPACK_IMPORTED_MODULE_5__.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length &&
        originStats.indexes.color.length === targetStats.indexes.color.length &&
        originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.invisibleValues.has(origin) &&
            !targetStats.values.length) ||
            (_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.invisibleValues.has(target) &&
                !originStats.values.length)) {
            return (0,_visibility_mjs__WEBPACK_IMPORTED_MODULE_6__.mixVisibility)(origin, target);
        }
        return (0,_pipe_mjs__WEBPACK_IMPORTED_MODULE_7__.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    }
    else {
        (0,_motion_utils_dist_es_errors_mjs__WEBPACK_IMPORTED_MODULE_8__.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (0,_immediate_mjs__WEBPACK_IMPORTED_MODULE_2__.mixImmediate)(origin, target);
    }
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixImmediate: () => (/* binding */ mixImmediate)
/* harmony export */ });
function mixImmediate(a, b) {
    return (p) => (p > 0 ? b : a);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mix: () => (/* binding */ mix)
/* harmony export */ });
/* harmony import */ var _complex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs");
/* harmony import */ var _number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");



function mix(from, to, p) {
    if (typeof from === "number" &&
        typeof to === "number" &&
        typeof p === "number") {
        return (0,_number_mjs__WEBPACK_IMPORTED_MODULE_0__.mixNumber)(from, to, p);
    }
    const mixer = (0,_complex_mjs__WEBPACK_IMPORTED_MODULE_1__.getMixer)(from);
    return mixer(from, to);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixNumber: () => (/* binding */ mixNumber)
/* harmony export */ });
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
const mixNumber = (from, to, progress) => {
    return from + (to - from) * progress;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/visibility.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/visibility.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invisibleValues: () => (/* binding */ invisibleValues),
/* harmony export */   mixVisibility: () => (/* binding */ mixVisibility)
/* harmony export */ });
const invisibleValues = new Set(["none", "hidden"]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */
function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
        return (p) => (p <= 0 ? origin : target);
    }
    else {
        return (p) => (p >= 1 ? target : origin);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOffset: () => (/* binding */ defaultOffset)
/* harmony export */ });
/* harmony import */ var _fill_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs");


function defaultOffset(arr) {
    const offset = [0];
    (0,_fill_mjs__WEBPACK_IMPORTED_MODULE_0__.fillOffset)(offset, arr.length - 1);
    return offset;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillOffset: () => (/* binding */ fillOffset)
/* harmony export */ });
/* harmony import */ var _mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mix/number.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/number.mjs");
/* harmony import */ var _progress_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../progress.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/progress.mjs");



function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
        const offsetProgress = (0,_progress_mjs__WEBPACK_IMPORTED_MODULE_0__.progress)(0, remaining, i);
        offset.push((0,_mix_number_mjs__WEBPACK_IMPORTED_MODULE_1__.mixNumber)(min, 1, offsetProgress));
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertOffsetToTimes: () => (/* binding */ convertOffsetToTimes)
/* harmony export */ });
function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/pipe.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/progress.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/progress.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   progress: () => (/* binding */ progress)
/* harmony export */ });
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
const progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPrefersReducedMotion: () => (/* binding */ initPrefersReducedMotion)
/* harmony export */ });
/* harmony import */ var _is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is-browser.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs");
/* harmony import */ var _state_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs");



function initPrefersReducedMotion() {
    _state_mjs__WEBPACK_IMPORTED_MODULE_0__.hasReducedMotionListener.current = true;
    if (!_is_browser_mjs__WEBPACK_IMPORTED_MODULE_1__.isBrowser)
        return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = () => (_state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = motionMediaQuery.matches);
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        _state_mjs__WEBPACK_IMPORTED_MODULE_0__.prefersReducedMotion.current = false;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasReducedMotionListener: () => (/* binding */ hasReducedMotionListener),
/* harmony export */   prefersReducedMotion: () => (/* binding */ prefersReducedMotion)
/* harmony export */ });
// Does this device prefer reduced motion? Returns `null` server-side.
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/resolve-value.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/resolve-value.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCustomValue: () => (/* binding */ isCustomValue),
/* harmony export */   resolveFinalValueInKeyframes: () => (/* binding */ resolveFinalValueInKeyframes)
/* harmony export */ });
/* harmony import */ var _animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/utils/is-keyframes-target.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs");


const isCustomValue = (v) => {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v) => {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0,_animation_utils_is_keyframes_target_mjs__WEBPACK_IMPORTED_MODULE_0__.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionManager: () => (/* binding */ SubscriptionManager)
/* harmony export */ });
/* harmony import */ var _array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs");


class SubscriptionManager {
    constructor() {
        this.subscriptions = [];
    }
    add(handler) {
        (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.addUniqueItem)(this.subscriptions, handler);
        return () => (0,_array_mjs__WEBPACK_IMPORTED_MODULE_0__.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions)
            return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */
            this.subscriptions[0](a, b, c);
        }
        else {
            for (let i = 0; i < numSubscriptions; i++) {
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */
                const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/time-conversion.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   millisecondsToSeconds: () => (/* binding */ millisecondsToSeconds),
/* harmony export */   secondsToMilliseconds: () => (/* binding */ secondsToMilliseconds)
/* harmony export */ });
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
const secondsToMilliseconds = (seconds) => seconds * 1000;
const millisecondsToSeconds = (milliseconds) => milliseconds / 1000;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs":
/*!**************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/use-instant-transition-state.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instantAnimationState: () => (/* binding */ instantAnimationState)
/* harmony export */ });
const instantAnimationState = {
    current: false,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   velocityPerSecond: () => (/* binding */ velocityPerSecond)
/* harmony export */ });
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warnOnce: () => (/* binding */ warnOnce)
/* harmony export */ });
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message))
        return;
    console.warn(message);
    if (element)
        console.warn(element);
    warned.add(message);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/wrap.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/utils/wrap.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrap: () => (/* binding */ wrap)
/* harmony export */ });
const wrap = (min, max, v) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/index.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MotionValue: () => (/* binding */ MotionValue),
/* harmony export */   collectMotionValues: () => (/* binding */ collectMotionValues),
/* harmony export */   motionValue: () => (/* binding */ motionValue)
/* harmony export */ });
/* harmony import */ var _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscription-manager.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs");
/* harmony import */ var _utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/velocity-per-second.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs");
/* harmony import */ var _utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/warn-once.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs");
/* harmony import */ var _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../frameloop/sync-time.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs");
/* harmony import */ var _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../frameloop/frame.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs");






/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined,
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    constructor(init, options = {}) {
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */
        this.version = "11.14.4";
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */
        this.events = {};
        this.updateAndNotify = (v, render = true) => {
            const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */
            if (this.updatedAt !== currentTime) {
                this.setPrevFrameValue();
            }
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev && this.events.change) {
                this.events.change.notify(this.current);
            }
            // Update render subscribers
            if (render && this.events.renderRequest) {
                this.events.renderRequest.notify(this.current);
            }
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        if (this.canTrackVelocity === null && current !== undefined) {
            this.canTrackVelocity = isFloat(this.current);
        }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
        if (true) {
            (0,_utils_warn_once_mjs__WEBPACK_IMPORTED_MODULE_1__.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        }
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = new _utils_subscription_manager_mjs__WEBPACK_IMPORTED_MODULE_2__.SubscriptionManager();
        }
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") {
            return () => {
                unsubscribe();
                /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */
                _frameloop_frame_mjs__WEBPACK_IMPORTED_MODULE_3__.frame.read(() => {
                    if (!this.events.change.getSize()) {
                        this.stop();
                    }
                });
            };
        }
        return unsubscribe;
    }
    clearListeners() {
        for (const eventManagers in this.events) {
            this.events[eventManagers].clear();
        }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v, render = true) {
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect)
            this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        if (collectMotionValues.current) {
            collectMotionValues.current.push(this);
        }
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        const currentTime = _frameloop_sync_time_mjs__WEBPACK_IMPORTED_MODULE_0__.time.now();
        if (!this.canTrackVelocity ||
            this.prevFrameValue === undefined ||
            currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
            return 0;
        }
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0,_utils_velocity_per_second_mjs__WEBPACK_IMPORTED_MODULE_4__.velocityPerSecond)(parseFloat(this.current) -
            parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    start(startAnimation) {
        this.stop();
        return new Promise((resolve) => {
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) {
                this.events.animationStart.notify();
            }
        }).then(() => {
            if (this.events.animationComplete) {
                this.events.animationComplete.notify();
            }
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) {
                this.events.animationCancel.notify();
            }
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) {
            this.stopPassiveEffect();
        }
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hex: () => (/* binding */ hex)
/* harmony export */ });
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs");



function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
        // Or we have 3 characters, ie #F00
    }
    else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1,
    };
}
const hex = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("#"),
    parse: parseHex,
    transform: _rgba_mjs__WEBPACK_IMPORTED_MODULE_1__.rgba.transform,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hsla: () => (/* binding */ hsla)
/* harmony export */ });
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/units.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs");





const hsla = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
        return ("hsla(" +
            Math.round(hue) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(saturation)) +
            ", " +
            _numbers_units_mjs__WEBPACK_IMPORTED_MODULE_1__.percent.transform((0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(lightness)) +
            ", " +
            (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_2__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_3__.alpha.transform(alpha$1)) +
            ")");
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color)
/* harmony export */ });
/* harmony import */ var _hex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs");
/* harmony import */ var _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hsla.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hsla.mjs");
/* harmony import */ var _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgba.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs");




const color = {
    test: (v) => _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v) || _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.test(v) || _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v),
    parse: (v) => {
        if (_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.test(v)) {
            return _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.parse(v);
        }
        else if (_hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.test(v)) {
            return _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.parse(v);
        }
        else {
            return _hex_mjs__WEBPACK_IMPORTED_MODULE_1__.hex.parse(v);
        }
    },
    transform: (v) => {
        return typeof v === "string"
            ? v
            : v.hasOwnProperty("red")
                ? _rgba_mjs__WEBPACK_IMPORTED_MODULE_0__.rgba.transform(v)
                : _hsla_mjs__WEBPACK_IMPORTED_MODULE_2__.hsla.transform(v);
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/rgba.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rgbUnit: () => (/* binding */ rgbUnit),
/* harmony export */   rgba: () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");
/* harmony import */ var _numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../numbers/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs");





const clampRgbUnit = (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 255, v);
const rgbUnit = {
    ..._numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.number,
    transform: (v) => Math.round(clampRgbUnit(v)),
};
const rgba = {
    test: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" +
        rgbUnit.transform(red) +
        ", " +
        rgbUnit.transform(green) +
        ", " +
        rgbUnit.transform(blue) +
        ", " +
        (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(_numbers_index_mjs__WEBPACK_IMPORTED_MODULE_1__.alpha.transform(alpha$1)) +
        ")",
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/utils.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isColorString: () => (/* binding */ isColorString),
/* harmony export */   splitColor: () => (/* binding */ splitColor)
/* harmony export */ });
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs");
/* harmony import */ var _utils_is_nullish_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-nullish.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs");
/* harmony import */ var _utils_single_color_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/single-color-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs");




/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */
const isColorString = (type, testProp) => (v) => {
    return Boolean((typeof v === "string" &&
        _utils_single_color_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.singleColorRegex.test(v) &&
        v.startsWith(type)) ||
        (testProp &&
            !(0,_utils_is_nullish_mjs__WEBPACK_IMPORTED_MODULE_1__.isNullish)(v) &&
            Object.prototype.hasOwnProperty.call(v, testProp)));
};
const splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
        return v;
    const [a, b, c, alpha] = v.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_2__.floatRegex);
    return {
        [aName]: parseFloat(a),
        [bName]: parseFloat(b),
        [cName]: parseFloat(c),
        alpha: alpha !== undefined ? parseFloat(alpha) : 1,
    };
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/filter.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs");
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs");



/**
 * Properties that should default to 1 or 100%
 */
const maxDefaults = new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
        return v;
    const [number] = value.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex) || [];
    if (!number)
        return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value)
        defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ..._index_mjs__WEBPACK_IMPORTED_MODULE_1__.complex,
    getAnimatableNone: (v) => {
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    },
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   analyseComplexValue: () => (/* binding */ analyseComplexValue),
/* harmony export */   complex: () => (/* binding */ complex)
/* harmony export */ });
/* harmony import */ var _color_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color/index.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/index.mjs");
/* harmony import */ var _utils_color_regex_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/color-regex.mjs");
/* harmony import */ var _utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/float-regex.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs");
/* harmony import */ var _utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/sanitize.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs");





function test(v) {
    var _a, _b;
    return (isNaN(v) &&
        typeof v === "string" &&
        (((_a = v.match(_utils_float_regex_mjs__WEBPACK_IMPORTED_MODULE_0__.floatRegex)) === null || _a === void 0 ? void 0 : _a.length) || 0) +
            (((_b = v.match(_utils_color_regex_mjs__WEBPACK_IMPORTED_MODULE_1__.colorRegex)) === null || _b === void 0 ? void 0 : _b.length) || 0) >
            0);
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: [],
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
        if (_color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push(_color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.parse(parsedValue));
        }
        else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        }
        else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v) => {
        let output = "";
        for (let i = 0; i < numSections; i++) {
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) {
                    output += (0,_utils_sanitize_mjs__WEBPACK_IMPORTED_MODULE_3__.sanitize)(v[i]);
                }
                else if (type === COLOR_TOKEN) {
                    output += _color_index_mjs__WEBPACK_IMPORTED_MODULE_2__.color.transform(v[i]);
                }
                else {
                    output += v[i];
                }
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/index.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alpha: () => (/* binding */ alpha),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   scale: () => (/* binding */ scale)
/* harmony export */ });
/* harmony import */ var _utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/clamp.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs");


const number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v,
};
const alpha = {
    ...number,
    transform: (v) => (0,_utils_clamp_mjs__WEBPACK_IMPORTED_MODULE_0__.clamp)(0, 1, v),
};
const scale = {
    ...number,
    default: 1,
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs":
/*!*****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/numbers/units.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   degrees: () => (/* binding */ degrees),
/* harmony export */   percent: () => (/* binding */ percent),
/* harmony export */   progressPercentage: () => (/* binding */ progressPercentage),
/* harmony export */   px: () => (/* binding */ px),
/* harmony export */   vh: () => (/* binding */ vh),
/* harmony export */   vw: () => (/* binding */ vw)
/* harmony export */ });
const createUnitType = (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`,
});
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100),
};




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/color-regex.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/color-regex.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorRegex: () => (/* binding */ colorRegex)
/* harmony export */ });
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/float-regex.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   floatRegex: () => (/* binding */ floatRegex)
/* harmony export */ });
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs":
/*!********************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNullish: () => (/* binding */ isNullish)
/* harmony export */ });
function isNullish(v) {
    return v == null;
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs":
/*!******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/sanitize.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sanitize: () => (/* binding */ sanitize)
/* harmony export */ });
// If this number is a decimal, make it just five decimal places
// to avoid exponents
const sanitize = (v) => Math.round(v * 100000) / 100000;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs":
/*!****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   singleColorRegex: () => (/* binding */ singleColorRegex)
/* harmony export */ });
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addValueToWillChange: () => (/* binding */ addValueToWillChange)
/* harmony export */ });
/* harmony import */ var _is_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs");


function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */
    if ((0,_is_mjs__WEBPACK_IMPORTED_MODULE_0__.isWillChangeMotionValue)(willChange)) {
        return willChange.add(key);
    }
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs":
/*!****************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWillChangeMotionValue: () => (/* binding */ isWillChangeMotionValue)
/* harmony export */ });
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-motion-value.mjs */ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs");


function isWillChangeMotionValue(value) {
    return Boolean((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__.isMotionValue)(value) && value.add);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs":
/*!*******************************************************************************************!*\
  !*** ./node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMotionValue: () => (/* binding */ isMotionValue)
/* harmony export */ });
const isMotionValue = (value) => Boolean(value && value.getVelocity);




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveElements: () => (/* binding */ resolveElements)
/* harmony export */ });
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) {
        return [elementOrSelector];
    }
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) {
            // TODO: Refactor to utils package
            // invariant(
            //     Boolean(scope.current),
            //     "Scope provided, but no element detected."
            // )
            root = scope.current;
        }
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   warning: () => (/* binding */ warning)
/* harmony export */ });
/* harmony import */ var _noop_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop.mjs */ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs");


let warning = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
let invariant = _noop_mjs__WEBPACK_IMPORTED_MODULE_0__.noop;
if (true) {
    warning = (check, message) => {
        if (!check && typeof console !== "undefined") {
            console.warn(message);
        }
    };
    invariant = (check, message) => {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
const noop = (any) => any;




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/editor-style": 0,
/******/ 			"css/app": 0,
/******/ 			"blocks/main-feature/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailpress"] = self["webpackChunktailpress"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app","blocks/main-feature/style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app","blocks/main-feature/style"], () => (__webpack_require__("./resources/blocks/main-feature/style.css")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style","css/app","blocks/main-feature/style"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor-style","css/app","blocks/main-feature/style"], () => (__webpack_require__("./resources/css/editor-style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;