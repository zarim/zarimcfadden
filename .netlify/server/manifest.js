var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon-16x16.png", "favicon-32x32.png", "favicon_package_v0.16/android-chrome-192x192.png", "favicon_package_v0.16/android-chrome-512x512.png", "favicon_package_v0.16/apple-touch-icon.png", "favicon_package_v0.16/browserconfig.xml", "favicon_package_v0.16/favicon-16x16.png", "favicon_package_v0.16/favicon-32x32.png", "favicon_package_v0.16/favicon.ico", "favicon_package_v0.16/mstile-150x150.png", "favicon_package_v0.16/safari-pinned-tab.svg", "favicon_package_v0.16/site.webmanifest"]),
  mimeTypes: { ".png": "image/png", ".xml": "application/xml", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" },
  _: {
    entry: { "file": "start-c39186fb.js", "js": ["start-c39186fb.js", "chunks/index-613948cd.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "About",
        pattern: /^\/About\/?$/,
        names: [],
        types: [],
        path: "/About",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "Header",
        pattern: /^\/Header\/?$/,
        names: [],
        types: [],
        path: "/Header",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "Intro",
        pattern: /^\/Intro\/?$/,
        names: [],
        types: [],
        path: "/Intro",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "Menu",
        pattern: /^\/Menu\/?$/,
        names: [],
        types: [],
        path: "/Menu",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "Resume",
        pattern: /^\/Resume\/?$/,
        names: [],
        types: [],
        path: "/Resume",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "page",
        id: "WebWork",
        pattern: /^\/WebWork\/?$/,
        names: [],
        types: [],
        path: "/WebWork",
        shadow: null,
        a: [0, 8],
        b: [1]
      },
      {
        type: "page",
        id: "Work",
        pattern: /^\/Work\/?$/,
        names: [],
        types: [],
        path: "/Work",
        shadow: null,
        a: [0, 9],
        b: [1]
      },
      {
        type: "page",
        id: "WorkItem",
        pattern: /^\/WorkItem\/?$/,
        names: [],
        types: [],
        path: "/WorkItem",
        shadow: null,
        a: [0, 10],
        b: [1]
      },
      {
        type: "page",
        id: "WorkMenu",
        pattern: /^\/WorkMenu\/?$/,
        names: [],
        types: [],
        path: "/WorkMenu",
        shadow: null,
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        id: "iOSWork",
        pattern: /^\/iOSWork\/?$/,
        names: [],
        types: [],
        path: "/iOSWork",
        shadow: null,
        a: [0, 12],
        b: [1]
      },
      {
        type: "endpoint",
        id: "todos/work",
        pattern: /^\/todos\/work\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/todos/work.js")))
      },
      {
        type: "endpoint",
        id: "todos/project",
        pattern: /^\/todos\/project\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/todos/project.js")))
      },
      {
        type: "endpoint",
        id: "todos/education",
        pattern: /^\/todos\/education\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/todos/education.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
