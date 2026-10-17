// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mysuru","repository":"asia","path":"india/karnataka/mysuru","depth":3,"parent":"india/karnataka","children":["chamarajapura","kannegaudana-koppal"]});
export const childModules = Object.freeze({"chamarajapura":"./chamarajapura/chamarajapura.js","kannegaudana-koppal":"./kannegaudana-koppal/kannegaudana-koppal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
