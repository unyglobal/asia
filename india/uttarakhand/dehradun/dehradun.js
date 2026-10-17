// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dehradun","repository":"asia","path":"india/uttarakhand/dehradun","depth":3,"parent":"india/uttarakhand","children":["bakralwala","chukkhuwala","gurudwara","idgah","saiyadwala","yamuna-colony"]});
export const childModules = Object.freeze({"bakralwala":"./bakralwala/bakralwala.js","chukkhuwala":"./chukkhuwala/chukkhuwala.js","gurudwara":"./gurudwara/gurudwara.js","idgah":"./idgah/idgah.js","saiyadwala":"./saiyadwala/saiyadwala.js","yamuna-colony":"./yamuna-colony/yamuna-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
