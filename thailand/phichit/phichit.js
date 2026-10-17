// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phichit","repository":"asia","path":"thailand/phichit","depth":2,"parent":"thailand","children":["bang-mun-nak","taphan-hin","thap-khlo"]});
export const childModules = Object.freeze({"bang-mun-nak":"./bang-mun-nak/bang-mun-nak.js","taphan-hin":"./taphan-hin/taphan-hin.js","thap-khlo":"./thap-khlo/thap-khlo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
