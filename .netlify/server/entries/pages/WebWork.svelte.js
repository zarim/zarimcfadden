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
  default: () => WebWork,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var import_Header_svelte = __toESM(require("./Header.svelte.js"));
var import_WorkItem_svelte = __toESM(require("./WorkItem.svelte.js"));
var import_WorkMenu_svelte = __toESM(require("./WorkMenu.svelte.js"));
var import_Menu_svelte = require("./Menu.svelte.js");
var WebWork_svelte_svelte_type_style_lang = "";
const css = {
  code: ".work-container.svelte-1hrlke0{display:flex;flex-flow:row wrap;justify-content:center;overflow:hidden}.work-container.svelte-1hrlke0:active{color:#323649\n    }.work.svelte-1hrlke0{display:contents}",
  map: null
};
async function load({ fetch }) {
  const res = await fetch("/todos/project");
  const jsonRes = await res.json();
  return { props: { web: jsonRes.webItems } };
}
const WebWork = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { web } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.web === void 0 && $$bindings.web && web !== void 0)
    $$bindings.web(web);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Web Work</title>`, ""}`, ""}

${(0, import_index_59524ad9.v)(import_Header_svelte.default, "Header").$$render($$result, { page: "work" }, {}, {})}
${(0, import_index_59524ad9.v)(import_WorkMenu_svelte.default, "WorkMenu").$$render($$result, { items: web, type: "web" }, {}, {})}

${(0, import_index_59524ad9.b)(web, (w) => {
    return `<div class="${"work-container svelte-1hrlke0"}"${(0, import_index_59524ad9.a)("id", w.title, 0)}><div class="${"work svelte-1hrlke0"}"${(0, import_index_59524ad9.a)("id", w.title, 0)} style="${"background-color: " + (0, import_index_59524ad9.e)(w.backgroundColor, true) + ";"}">${(0, import_index_59524ad9.v)(import_WorkItem_svelte.default, "WorkItem").$$render($$result, { item: w }, {}, {})}</div>
</div>`;
  })}`;
});
