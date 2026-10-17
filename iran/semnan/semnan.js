// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"semnan","repository":"asia","path":"iran/semnan","depth":2,"parent":"iran","children":["damghan","garmsar","istgah-e-rah-ahan-e-garmsar","mahdishahr","shahrud"]});
export const childModules = Object.freeze({"damghan":"./damghan/damghan.js","garmsar":"./garmsar/garmsar.js","istgah-e-rah-ahan-e-garmsar":"./istgah-e-rah-ahan-e-garmsar/istgah-e-rah-ahan-e-garmsar.js","mahdishahr":"./mahdishahr/mahdishahr.js","shahrud":"./shahrud/shahrud.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
