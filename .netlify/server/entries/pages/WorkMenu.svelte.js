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
  default: () => WorkMenu
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var WorkMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: ".menu-bar.svelte-iifpi2{position:-webkit-sticky;position:sticky;top:0;width:100%;display:flex;flex-direction:row;height:52px;border-bottom:0.25px solid rgba(0, 0, 0, 0.2);transition:opacity 200ms ease 0s;opacity:1;background-color:hsla(0, 0%, 100%, 0.9);box-shadow:0 1px 1px 0 rgb(0 0 0 / 10%);z-index:1}.section-title-left.svelte-iifpi2{color:rgba(0, 0, 0, 0.3);font-family:'Maison mono', sans-serif;font-size:11px;line-height:24px;font-weight:700;letter-spacing:1px;text-transform:uppercase;float:left}.section-title-left.svelte-iifpi2:hover{color:#323649}.section-title-right.svelte-iifpi2:hover{color:#323649}.section-title-right.svelte-iifpi2{color:rgba(0, 0, 0, 0.3);font-family:'Maison mono', sans-serif;font-size:11px;line-height:24px;font-weight:700;letter-spacing:1px;float:right}.left-side.svelte-iifpi2{width:40%;text-align:center;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;margin:0 10%}.right-side.svelte-iifpi2{width:20%;text-align:center;display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;margin:0 10%}",
  map: null
};
const WorkMenu = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { type } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css);
  return `${type == "web" ? `<div class="${"menu-bar svelte-iifpi2"}"><div class="${"left-side svelte-iifpi2"}">${(0, import_index_59524ad9.b)(items, (i) => {
    return `<a sveltekit:prefetch href="${"/WebWork#" + (0, import_index_59524ad9.e)(i.title, true)}"><h1 class="${"section-title-left svelte-iifpi2"}" id="${"id: " + (0, import_index_59524ad9.e)(i.title, true)}">${(0, import_index_59524ad9.e)(i.title)}</h1></a>`;
  })}</div>
        <div class="${"right-side svelte-iifpi2"}"><a sveltekit:prefetch href="${"/WebWork#web"}"${(0, import_index_59524ad9.a)("element", "web", 0)}><h1 class="${"section-title-right svelte-iifpi2"}" style="${"color: #323649"}" id="${"webMenu"}">WEB</h1></a>
            <a sveltekit:prefetch href="${"/iOSWork#ios"}"${(0, import_index_59524ad9.a)("element", "ios", 0)}><h1 class="${"section-title-right svelte-iifpi2"}" id="${"iosMenu"}">iOS</h1></a></div></div>` : ``}

${type == "ios" ? `<div class="${"menu-bar svelte-iifpi2"}"><div class="${"left-side svelte-iifpi2"}">${(0, import_index_59524ad9.b)(items, (i) => {
    return `<a sveltekit:prefetch href="${"/iOSWork#" + (0, import_index_59524ad9.e)(i.title, true)}"><h1 class="${"section-title-left svelte-iifpi2"}" id="${"id: " + (0, import_index_59524ad9.e)(i.title, true)}">${(0, import_index_59524ad9.e)(i.title)}</h1></a>`;
  })}</div>
        <div class="${"right-side svelte-iifpi2"}"><a href="${"/WebWork#web"}"${(0, import_index_59524ad9.a)("element", "web", 0)}><h1 class="${"section-title-right svelte-iifpi2"}" id="${"webMenu"}">WEB</h1></a>
            <a href="${"/iOSWork#ios"}"${(0, import_index_59524ad9.a)("element", "ios", 0)}><h1 class="${"section-title-right svelte-iifpi2"}" style="${"color: #323649"}" id="${"iosMenu"}">iOS</h1></a></div></div>` : ``}`;
});
