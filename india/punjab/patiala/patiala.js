// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"patiala","repository":"asia","path":"india/punjab/patiala","depth":3,"parent":"india/punjab","children":["bara-dari"]});
export const childModules = Object.freeze({"bara-dari":"./bara-dari/bara-dari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
