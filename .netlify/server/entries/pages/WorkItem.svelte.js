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
  default: () => WorkItem
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var WorkItem_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".work-item.svelte-1ljhtqv{display:flex;width:100%;height:100vh;position:relative;padding:8%}.image.svelte-1ljhtqv{width:65vw;height:100%;-o-object-fit:contain;object-fit:contain;display:flex;justify-content:center}.work-text.svelte-1ljhtqv{font-size:1.25em;margin:2.5%;text-decoration:none}.work-subtext.svelte-1ljhtqv{font-size:0.75em;margin:2.5%}.text.svelte-1ljhtqv{display:flex;width:30%;height:100%;flex-direction:column;justify-content:center}")();
const css = {
  code: ".work-item.svelte-1ljhtqv{display:flex;width:100%;height:100vh;position:relative;padding:8%}.image.svelte-1ljhtqv{width:65vw;height:100%;-o-object-fit:contain;object-fit:contain;display:flex;justify-content:center}.work-text.svelte-1ljhtqv{font-size:1.25em;margin:2.5%;text-decoration:none}.work-subtext.svelte-1ljhtqv{font-size:0.75em;margin:2.5%}.text.svelte-1ljhtqv{display:flex;width:30%;height:100%;flex-direction:column;justify-content:center}",
  map: null
};
const WorkItem = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let src = item.image || "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png";
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<div class="${"work-item svelte-1ljhtqv"}" style="${"background-color: " + (0, import_index_59524ad9.e)(item.backgroundColor, true) + ";"}"><div class="${"image svelte-1ljhtqv"}"><img${(0, import_index_59524ad9.a)("src", src, 0)} class="${"image svelte-1ljhtqv"}"${(0, import_index_59524ad9.a)("alt", item.alt, 0)}></div>
    <div class="${"text svelte-1ljhtqv"}">${item.link != "" ? `<a${(0, import_index_59524ad9.a)("href", item.link, 0)} target="${"_blank"}" class="${"work-text svelte-1ljhtqv"}" style="${"color:" + (0, import_index_59524ad9.e)(item.textColor, true)}"><b>${(0, import_index_59524ad9.e)(item.title)}</b></a>` : `<p class="${"work-text svelte-1ljhtqv"}" style="${"color:" + (0, import_index_59524ad9.e)(item.textColor, true)}"><b>${(0, import_index_59524ad9.e)(item.title)}</b></p>`}

        <p class="${"work-subtext svelte-1ljhtqv"}" style="${"color:" + (0, import_index_59524ad9.e)(item.textColor, true)}">${(0, import_index_59524ad9.e)(item.subtitle)}</p>
        <p class="${"work-subtext svelte-1ljhtqv"}" style="${"color:" + (0, import_index_59524ad9.e)(item.textColor, true)}">${(0, import_index_59524ad9.e)(item.description)}</p>
        ${item.techStack.length > 0 ? `<p class="${"work-subtext svelte-1ljhtqv"}" style="${"color:" + (0, import_index_59524ad9.e)(item.textColor, true) + "; margin: 0 2.5%; text-decoration: underline"}">Tech Stack</p>
            ${(0, import_index_59524ad9.b)(item.techStack, (t) => {
    return `<p class="${"work-subtext svelte-1ljhtqv"}" style="${"color:" + (0, import_index_59524ad9.e)(item.textColor, true) + "; margin: 0 2.5%;"}">\u2003-  ${(0, import_index_59524ad9.e)(t)}</p>`;
  })}` : ``}</div>
</div>`;
});
