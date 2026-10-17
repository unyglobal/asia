// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"simin-shahr","repository":"asia","path":"iran/golestan/simin-shahr","depth":3,"parent":"iran/golestan","children":["bonavar"]});
export const childModules = Object.freeze({"bonavar":"./bonavar/bonavar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
