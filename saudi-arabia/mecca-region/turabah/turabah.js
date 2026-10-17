// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turabah","repository":"asia","path":"saudi-arabia/mecca-region/turabah","depth":3,"parent":"saudi-arabia/mecca-region","children":["as-salam"]});
export const childModules = Object.freeze({"as-salam":"./as-salam/as-salam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
