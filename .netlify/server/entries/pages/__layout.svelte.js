var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var app = /* @__PURE__ */ (() => "/* Write your global styles here, in PostCSS syntax\n\n@import '@fontsource/fira-mono';\n\n@tailwind base;\n\n\n:root {\n	font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\n		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n	--font-mono: 'Fira Mono', monospace;\n	--pure-white: #ffffff;\n	--primary-color: #b9c6d2;\n	--secondary-color: #d0dde9;\n	--tertiary-color: #edf0f8;\n	--accent-color: #ff3e00;\n	--heading-color: rgba(0, 0, 0, 0.7);\n	--text-color: #444444;\n	--background-without-opacity: rgba(255, 255, 255, 0.7);\n	--column-width: 42rem;\n	--column-margin-top: 4rem;\n}\n\nbody {\n	min-height: 100vh;\n	margin: 0;\n	background-color: var(--primary-color);\n	background: linear-gradient(\n		180deg,\n		var(--primary-color) 0%,\n		var(--secondary-color) 10.45%,\n		var(--tertiary-color) 41.35%\n	);\n}\n\nbody::before {\n	content: '';\n	width: 80vw;\n	height: 100vh;\n	position: absolute;\n	top: 0;\n	left: 10vw;\n	z-index: -1;\n	background: radial-gradient(\n		50% 50% at 50% 50%,\n		var(--pure-white) 0%,\n		rgba(255, 255, 255, 0) 100%\n	);\n	opacity: 0.05;\n}\n\n#svelte {\n	min-height: 100vh;\n	display: flex;\n	flex-direction: column;\n}\n\nh1,\nh2,\np {\n	font-weight: 400;\n	color: var(--heading-color);\n}\n\np {\n	line-height: 1.5;\n}\n\na {\n	color: var(--accent-color);\n	text-decoration: none;\n}\n\na:hover {\n	text-decoration: underline;\n}\n\nh1 {\n	font-size: 2rem;\n	text-align: center;\n}\n\nh2 {\n	font-size: 1rem;\n}\n\npre {\n	font-size: 16px;\n	font-family: var(--font-mono);\n	background-color: rgba(255, 255, 255, 0.45);\n	border-radius: 3px;\n	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);\n	padding: 0.5em;\n	overflow-x: auto;\n	color: var(--text-color);\n}\n\ninput,\nbutton {\n	font-size: inherit;\n	font-family: inherit;\n}\n\nbutton:focus:not(:focus-visible) {\n	outline: none;\n}\n\n@media (min-width: 720px) {\n	h1 {\n		font-size: 2.4rem;\n	}\n}\n\n@tailwind components;\n\n@tailwind utilities; */\n\n\n* {\n	box-sizing: border-box;\n	margin: 0;\n	padding: 0;\n}\n\n\nbody {\n	/* font-family: 'Serif roman', sans-serif; */\n	font-family: Maisonneue, sans-serif;\n	background-color: #fff;\n	line-height: 1.6;\n	color: #323649;\n	font-size: 30px;\n	font-weight: 300;\n}")();
const _layout = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``}`;
});
