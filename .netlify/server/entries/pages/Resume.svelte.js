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
  default: () => Resume,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_59524ad9 = require("../../chunks/index-59524ad9.js");
var import_Header_svelte = __toESM(require("./Header.svelte.js"));
var import_Menu_svelte = require("./Menu.svelte.js");
var Resume_svelte_svelte_type_style_lang = "";
const css = {
  code: ".resume-container.svelte-1cs630c{margin:auto;width:65%;display:flex;flex-direction:row;padding-top:56px}.left-panel.svelte-1cs630c{display:flex;flex-direction:column;width:40%;height:100%;padding-right:16px}.right-panel.svelte-1cs630c{display:flex;flex-direction:column;width:60%;height:100%;padding-left:16px}.education-sidebar.svelte-1cs630c{margin-bottom:32px}.resume-sidebar.svelte-1cs630c{margin-bottom:32px;padding-top:32px;border-top:0.25px solid rgba(0, 0, 0, 0.2);width:90%}.work-experience.svelte-1cs630c{margin-bottom:56px}.section-title.svelte-1cs630c{color:rgba(0, 0, 0, 0.3);font-family:'Maison mono', sans-serif;font-size:11px;line-height:24px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:24px}.download-title.svelte-1cs630c{color:rgba(0, 0, 0, 0.3);font-family:'Maison mono', sans-serif;font-size:11px;line-height:24px;font-weight:700;letter-spacing:1px;text-transform:uppercase}.item-title.svelte-1cs630c{margin-top:0px;margin-bottom:0px;font-family:Maisonneue, sans-serif;color:rgba(0, 0, 0, 0.9);font-size:16px;line-height:24px;font-weight:600}.item-subtitle.svelte-1cs630c{margin-top:0px;margin-bottom:0px;font-family:Maisonneue, sans-serif;color:rgba(0, 0, 0, 0.9);font-size:16px;line-height:24px;padding-left:4px}.item-dates.svelte-1cs630c{margin-top:0px;margin-bottom:8px;font-family:Maisonneue, sans-serif;color:rgba(0, 0, 0, 0.7);font-size:13px;line-height:24px;font-weight:500}.section-content.svelte-1cs630c{margin-bottom:0px;font-family:Maisonneue, sans-serif;color:rgba(0, 0, 0, 0.7);font-size:16px;line-height:24px;font-weight:400}.company-description.svelte-1cs630c{display:flex;flex-direction:row}",
  map: null
};
async function load({ fetch }) {
  const resWork = await fetch("/todos/work");
  const resEducation = await fetch("/todos/education");
  const jsonResWork = await resWork.json();
  const jsonResEducation = await resEducation.json();
  return {
    props: {
      works: jsonResWork.workItems,
      educations: jsonResEducation.educationItems
    }
  };
}
const Resume = (0, import_index_59524ad9.c)(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let { works } = $$props;
  let { educations } = $$props;
  let skills = ["iOS App Development", "Qualitative Data Analysis", "Frontend Web Development"];
  let languages = [
    "HTML / CSS / JavaScript",
    "Svelte / SvelteKit",
    "Swift / SwiftUI",
    "Python",
    "Java",
    "C++"
  ];
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.works === void 0 && $$bindings.works && works !== void 0)
    $$bindings.works(works);
  if ($$props.educations === void 0 && $$bindings.educations && educations !== void 0)
    $$bindings.educations(educations);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Resume</title>`, ""}`, ""}
${(0, import_index_59524ad9.v)(import_Header_svelte.default, "Header").$$render($$result, { page: "resume" }, {}, {})}

<div class="${"resume-container svelte-1cs630c"}"><div class="${"left-panel svelte-1cs630c"}"><div class="${"education-sidebar svelte-1cs630c"}"><p class="${"section-title svelte-1cs630c"}">Education</p>
			${(0, import_index_59524ad9.b)(educations, (e) => {
    return `<p class="${"item-title svelte-1cs630c"}">${(0, import_index_59524ad9.e)(e.school)}</p>
				<p class="${"section-content svelte-1cs630c"}">${(0, import_index_59524ad9.e)(e.major)}</p>
				<p class="${"item-dates svelte-1cs630c"}">${(0, import_index_59524ad9.e)(e.dates)}</p>`;
  })}</div>
		${skills.length > 0 ? `<div class="${"resume-sidebar svelte-1cs630c"}"><p class="${"section-title svelte-1cs630c"}">Skills</p>
				${(0, import_index_59524ad9.b)(skills, (s) => {
    return `<p class="${"section-content svelte-1cs630c"}">${(0, import_index_59524ad9.e)(s)}</p>`;
  })}</div>` : ``}
		${languages.length > 0 ? `<div class="${"resume-sidebar svelte-1cs630c"}"><p class="${"section-title svelte-1cs630c"}">Languages &amp; Frameworks</p>
				${(0, import_index_59524ad9.b)(languages, (l) => {
    return `<p class="${"section-content svelte-1cs630c"}">${(0, import_index_59524ad9.e)(l)}</p>`;
  })}</div>` : ``}
		<div class="${"resume-sidebar svelte-1cs630c"}"><p class="${"download-title svelte-1cs630c"}">Download</p>
			<a class="${"section-content svelte-1cs630c"}" href="${"https://drive.google.com/file/d/1ZvGoIbqnHH7DE_ZYVrPj73k-s_PqDbrQ/view?usp=sharing"}" target="${"_blank"}" download="${"Zari-McFadden-Resume.pdf"}">Download PDF</a></div></div>
	<div class="${"right-panel svelte-1cs630c"}"><p class="${"section-title svelte-1cs630c"}">Work Experience</p>
		${(0, import_index_59524ad9.b)(works, (w) => {
    return `<div class="${"work-experience svelte-1cs630c"}"><div class="${"company-description svelte-1cs630c"}"><p class="${"item-title svelte-1cs630c"}">${(0, import_index_59524ad9.e)(w.subtitle)}</p>
				<p class="${"item-subtitle svelte-1cs630c"}">${(0, import_index_59524ad9.e)(w.title)}</p></div>
			<p class="${"item-dates svelte-1cs630c"}">${(0, import_index_59524ad9.e)(w.dates)}</p>
			<p class="${"section-content svelte-1cs630c"}">${(0, import_index_59524ad9.e)(w.description)}</p>
		</div>`;
  })}</div>
</div>`;
});
