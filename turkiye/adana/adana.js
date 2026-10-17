// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adana","repository":"asia","path":"turkiye/adana","depth":2,"parent":"turkiye","children":["ceyhan","imamoglu","kirecocag","kozan","yesilova","yumurtal-k"]});
export const childModules = Object.freeze({"ceyhan":"./ceyhan/ceyhan.js","imamoglu":"./imamoglu/imamoglu.js","kirecocag":"./kirecocag/kirecocag.js","kozan":"./kozan/kozan.js","yesilova":"./yesilova/yesilova.js","yumurtal-k":"./yumurtal-k/yumurtal-k.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
