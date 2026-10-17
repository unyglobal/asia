// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ar-rifa","repository":"asia","path":"bahrain/southern-governorate/ar-rifa","depth":3,"parent":"bahrain/southern-governorate","children":["ar-rifa-ash-shamali"]});
export const childModules = Object.freeze({"ar-rifa-ash-shamali":"./ar-rifa-ash-shamali/ar-rifa-ash-shamali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
