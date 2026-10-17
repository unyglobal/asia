// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nevsehir-province","repository":"asia","path":"turkiye/nevsehir-province","depth":2,"parent":"turkiye","children":["nevsehir","urgup"]});
export const childModules = Object.freeze({"nevsehir":"./nevsehir/nevsehir.js","urgup":"./urgup/urgup.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
