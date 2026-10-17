// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gonbad-e-kavus","repository":"asia","path":"iran/golestan/gonbad-e-kavus","depth":3,"parent":"iran/golestan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
