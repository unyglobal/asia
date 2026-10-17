// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fereydun-kenar","repository":"asia","path":"iran/mazandaran/fereydun-kenar","depth":3,"parent":"iran/mazandaran","children":["shahrak-e-asadi"]});
export const childModules = Object.freeze({"shahrak-e-asadi":"./shahrak-e-asadi/shahrak-e-asadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
