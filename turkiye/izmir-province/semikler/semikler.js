// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"semikler","repository":"asia","path":"turkiye/izmir-province/semikler","depth":3,"parent":"turkiye/izmir-province","children":["cumhuriyet"]});
export const childModules = Object.freeze({"cumhuriyet":"./cumhuriyet/cumhuriyet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
