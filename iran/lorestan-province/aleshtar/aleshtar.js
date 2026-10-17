// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aleshtar","repository":"asia","path":"iran/lorestan-province/aleshtar","depth":3,"parent":"iran/lorestan-province","children":["aliabad"]});
export const childModules = Object.freeze({"aliabad":"./aliabad/aliabad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
