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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var import_Intro_svelte = __toESM(require("./Intro.svelte.js"));
var import_Header_svelte = __toESM(require("./Header.svelte.js"));
var import_Menu_svelte = require("./Menu.svelte.js");
var About_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".intro-container.svelte-1gygnwc{display:flex;margin:1% auto;flex-direction:row;width:45%}.zari.svelte-1gygnwc{height:400px;float:right;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:3% auto;display:flex;align-items:center}.email.svelte-1gygnwc{margin-top:0px;margin-bottom:40px;font-family:'Maison mono', sans-serif;color:rgba(0, 0, 0, 0.3);font-size:16px;font-weight:400;text-align:center;text-decoration:none}.link-block.svelte-1gygnwc{display:block;margin-right:auto;margin-left:auto;text-decoration:none;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-top:80px}.social-media.svelte-1gygnwc{display:flex;flex-direction:row;justify-content:center}.icon-image.svelte-1gygnwc{height:30px}.image-link.svelte-1gygnwc{margin:0 1%}")();
const css = {
  code: ".intro-container.svelte-1gygnwc{display:flex;margin:1% auto;flex-direction:row;width:45%}.zari.svelte-1gygnwc{height:400px;float:right;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:3% auto;display:flex;align-items:center}.email.svelte-1gygnwc{margin-top:0px;margin-bottom:40px;font-family:'Maison mono', sans-serif;color:rgba(0, 0, 0, 0.3);font-size:16px;font-weight:400;text-align:center;text-decoration:none}.link-block.svelte-1gygnwc{display:block;margin-right:auto;margin-left:auto;text-decoration:none;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding-top:80px}.social-media.svelte-1gygnwc{display:flex;flex-direction:row;justify-content:center}.icon-image.svelte-1gygnwc{height:30px}.image-link.svelte-1gygnwc{margin:0 1%}",
  map: null
};
let src = "https://i.ibb.co/NFRyV8D/zari.jpg";
const About = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

${(0, import_index_59524ad9.v)(import_Header_svelte.default, "Header").$$render($$result, { page: "about" }, {}, {})}
<a href="${"mailto:zmuhammad55@gmail.com"}" class="${"link-block svelte-1gygnwc"}"><p class="${"email svelte-1gygnwc"}">Email me!</p></a>
<div class="${"social-media svelte-1gygnwc"}"><a class="${"image-link svelte-1gygnwc"}" target="${"_blank"}" href="${"https://www.linkedin.com/in/zari-mcfadden-45262978/"}"><img class="${"icon-image svelte-1gygnwc"}" src="${"https://i.ibb.co/wrVVYTH/linkedin.png"}" alt="${"linkedin"}" border="${"0"}"></a>
    <a class="${"image-link svelte-1gygnwc"}" target="${"_blank"}" href="${"https://github.com/zarim"}"><img class="${"icon-image svelte-1gygnwc"}" src="${"https://i.ibb.co/yqchxF6/github.png"}" alt="${"github"}" border="${"0"}"></a>
    <a class="${"image-link svelte-1gygnwc"}" target="${"_blank"}" href="${"https://twitter.com/ZariMcFadden"}"><img class="${"icon-image svelte-1gygnwc"}" src="${"https://i.ibb.co/ssN6MZ5/twitter.png"}" alt="${"twitter"}" border="${"0"}"></a></div>
<div class="${"intro-container svelte-1gygnwc"}">${(0, import_index_59524ad9.v)(import_Intro_svelte.default, "Intro").$$render($$result, {}, {}, {})}
    <img class="${"zari svelte-1gygnwc"}"${(0, import_index_59524ad9.a)("src", src, 0)} alt="${"zari"}"> 
</div>`;
});
