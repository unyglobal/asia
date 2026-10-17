// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mianwali","repository":"asia","path":"pakistan/punjab/mianwali","depth":3,"parent":"pakistan/punjab","children":["ghundwali-wandi"]});
export const childModules = Object.freeze({"ghundwali-wandi":"./ghundwali-wandi/ghundwali-wandi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
