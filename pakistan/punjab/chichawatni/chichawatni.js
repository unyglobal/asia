// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chichawatni","repository":"asia","path":"pakistan/punjab/chichawatni","depth":3,"parent":"pakistan/punjab","children":["darweshpara"]});
export const childModules = Object.freeze({"darweshpara":"./darweshpara/darweshpara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
