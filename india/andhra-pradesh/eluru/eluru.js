// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eluru","repository":"asia","path":"india/andhra-pradesh/eluru","depth":3,"parent":"india/andhra-pradesh","children":["narasimharaopet","powerpet","tangellamudi"]});
export const childModules = Object.freeze({"narasimharaopet":"./narasimharaopet/narasimharaopet.js","powerpet":"./powerpet/powerpet.js","tangellamudi":"./tangellamudi/tangellamudi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
