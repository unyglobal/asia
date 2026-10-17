// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eminonu","repository":"asia","path":"turkiye/istanbul/eminonu","depth":3,"parent":"turkiye/istanbul","children":["cagaloglu"]});
export const childModules = Object.freeze({"cagaloglu":"./cagaloglu/cagaloglu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
