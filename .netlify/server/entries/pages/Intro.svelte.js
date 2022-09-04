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
  default: () => Intro
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var Intro_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".intro.svelte-1fpmf43{display:flex;align-items:center;margin:0 2%}p.svelte-1fpmf43{line-height:1.6;font-weight:300;font-size:20px;text-align:left;margin:auto}a.svelte-1fpmf43{color:inherit;text-decoration:underline}")();
const css = {
  code: ".intro.svelte-1fpmf43{display:flex;align-items:center;margin:0 2%}p.svelte-1fpmf43{line-height:1.6;font-weight:300;font-size:20px;text-align:left;margin:auto}a.svelte-1fpmf43{color:inherit;text-decoration:underline}",
  map: null
};
const Intro = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"intro svelte-1fpmf43"}"><p class="${"svelte-1fpmf43"}"><br>
        I am currently a PhD student in Computer Science at North Carolina State University studying AI for Social Good. I completed my B.S. in Computer Science at Spelman College in 2020.
        <br><br>
        In my free time, I&#39;m a world traveler, avid reader, and self-published author of a book titled <a href="${"https://www.amazon.com/18-Things-Ive-Learned-Years/dp/0578485303"}" target="${"_blank"}" class="${"svelte-1fpmf43"}">18 Things I&#39;ve Learned in 18 Years</a>.
    </p>
</div>`;
});
