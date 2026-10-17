// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nanjangud","repository":"asia","path":"india/karnataka/nanjangud","depth":3,"parent":"india/karnataka","children":["kumbhahalli"]});
export const childModules = Object.freeze({"kumbhahalli":"./kumbhahalli/kumbhahalli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
