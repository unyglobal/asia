// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ladhewala-waraich","repository":"asia","path":"pakistan/punjab/ladhewala-waraich","depth":3,"parent":"pakistan/punjab","children":["arman-townshaikh-colony"]});
export const childModules = Object.freeze({"arman-townshaikh-colony":"./arman-townshaikh-colony/arman-townshaikh-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
