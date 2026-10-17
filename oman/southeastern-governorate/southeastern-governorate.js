// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southeastern-governorate","repository":"asia","path":"oman/southeastern-governorate","depth":2,"parent":"oman","children":["masirah","sur"]});
export const childModules = Object.freeze({"masirah":"./masirah/masirah.js","sur":"./sur/sur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
