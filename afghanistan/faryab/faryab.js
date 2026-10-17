// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"faryab","repository":"asia","path":"afghanistan/faryab","depth":2,"parent":"afghanistan","children":["andkhoy","maymana"]});
export const childModules = Object.freeze({"andkhoy":"./andkhoy/andkhoy.js","maymana":"./maymana/maymana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
