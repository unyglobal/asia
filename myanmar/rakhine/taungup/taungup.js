// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taungup","repository":"asia","path":"myanmar/rakhine/taungup","depth":3,"parent":"myanmar/rakhine","children":["auk-kaing-shey"]});
export const childModules = Object.freeze({"auk-kaing-shey":"./auk-kaing-shey/auk-kaing-shey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
