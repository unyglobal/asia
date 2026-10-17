// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mobarakeh","repository":"asia","path":"iran/isfahan/mobarakeh","depth":3,"parent":"iran/isfahan","children":["sheykhabad"]});
export const childModules = Object.freeze({"sheykhabad":"./sheykhabad/sheykhabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
