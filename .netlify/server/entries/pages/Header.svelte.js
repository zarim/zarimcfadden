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
  default: () => Header
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var import_Menu_svelte = __toESM(require("./Menu.svelte.js"));
var Header_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".header-container.svelte-puhlc6{display:flex;flex-direction:column;border-bottom:0.25px solid rgba(0, 0, 0, 0.2)}.name.svelte-puhlc6{text-align:center;padding-top:170px;font-size:32px;line-height:48px;font-weight:500}.sub-text.svelte-puhlc6{text-align:center;color:rgba(0, 0, 0, 0.6);font-size:20px;line-height:26px;padding-bottom:70px}")();
const css = {
  code: ".header-container.svelte-puhlc6{display:flex;flex-direction:column;border-bottom:0.25px solid rgba(0, 0, 0, 0.2)}.name.svelte-puhlc6{text-align:center;padding-top:170px;font-size:32px;line-height:48px;font-weight:500}.sub-text.svelte-puhlc6{text-align:center;color:rgba(0, 0, 0, 0.6);font-size:20px;line-height:26px;padding-bottom:70px}",
  map: null
};
const Header = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  let { page = "" } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css);
  return `<div class="${"header-container svelte-puhlc6"}"><p class="${"name svelte-puhlc6"}">Zari McFadden</p>
    <p class="${"sub-text svelte-puhlc6"}">Ph.D. Student / Durham Native / Spelman Woman</p>
    ${(0, import_index_59524ad9.v)(import_Menu_svelte.default, "Menu").$$render($$result, { page }, {}, {})}
</div>`;
});
