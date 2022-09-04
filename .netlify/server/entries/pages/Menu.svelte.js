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
  default: () => Menu
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var Menu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "a.svelte-vga7el{margin:0 0 0 5%;text-decoration:none;color:rgba(0, 0, 0, 0.2);margin:auto}.menu.svelte-vga7el{justify-content:center;display:flex;font-size:20px;font-weight:300;margin:auto;width:20%;padding-bottom:50px}")();
const css = {
  code: "a.svelte-vga7el{margin:0 0 0 5%;text-decoration:none;color:rgba(0, 0, 0, 0.2);margin:auto}.menu.svelte-vga7el{justify-content:center;display:flex;font-size:20px;font-weight:300;margin:auto;width:20%;padding-bottom:50px}",
  map: null
};
const Menu = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  let { page = "" } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  return `<div class="${"menu svelte-vga7el"}">${page == "about" ? `<a sveltekit:prefetch href="${"/"}" style="${"color: #323649;"}" class="${"svelte-vga7el"}">About</a>
        <a sveltekit:prefetch href="${"/WebWork"}" class="${"svelte-vga7el"}">Work</a>
        <a sveltekit:prefetch href="${"/Resume"}" class="${"svelte-vga7el"}">Resume</a>` : ``}
    ${page == "work" ? `<a sveltekit:prefetch href="${"/"}" class="${"svelte-vga7el"}">About</a>
        <a sveltekit:prefetch href="${"/WebWork"}" style="${"color: #323649;"}" class="${"svelte-vga7el"}">Work</a>
        <a sveltekit:prefetch href="${"/Resume"}" class="${"svelte-vga7el"}">Resume</a>` : ``}
    ${page == "resume" ? `<a sveltekit:prefetch href="${"/"}" class="${"svelte-vga7el"}">About</a>
        <a sveltekit:prefetch href="${"/WebWork"}" class="${"svelte-vga7el"}">Work</a>
        <a sveltekit:prefetch href="${"/Resume"}" style="${"color: #323649;"}" class="${"svelte-vga7el"}">Resume</a>` : ``}
</div>`;
});
