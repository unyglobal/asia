// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nangli-sakrawat","repository":"asia","path":"india/delhi/nangli-sakrawat","depth":3,"parent":"india/delhi","children":["shiv-enclave-block-b"]});
export const childModules = Object.freeze({"shiv-enclave-block-b":"./shiv-enclave-block-b/shiv-enclave-block-b.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
