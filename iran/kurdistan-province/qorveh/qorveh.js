// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qorveh","repository":"asia","path":"iran/kurdistan-province/qorveh","depth":3,"parent":"iran/kurdistan-province","children":["shahrak-e-farhangian"]});
export const childModules = Object.freeze({"shahrak-e-farhangian":"./shahrak-e-farhangian/shahrak-e-farhangian.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
