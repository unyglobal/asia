// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kamigyo-ku","repository":"asia","path":"japan/kyoto/kamigyo-ku","depth":3,"parent":"japan/kyoto","children":["nishijin"]});
export const childModules = Object.freeze({"nishijin":"./nishijin/nishijin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
