// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kakogawacho-honmachi","repository":"asia","path":"japan/hyogo/kakogawacho-honmachi","depth":3,"parent":"japan/hyogo","children":["yonedacho-sendo"]});
export const childModules = Object.freeze({"yonedacho-sendo":"./yonedacho-sendo/yonedacho-sendo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
