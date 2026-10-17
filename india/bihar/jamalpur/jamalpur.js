// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jamalpur","repository":"asia","path":"india/bihar/jamalpur","depth":3,"parent":"india/bihar","children":["alipur","keshopur"]});
export const childModules = Object.freeze({"alipur":"./alipur/alipur.js","keshopur":"./keshopur/keshopur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
