// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amlapura-city","repository":"asia","path":"indonesia/bali/amlapura-city","depth":3,"parent":"indonesia/bali","children":["banjar-galiran-kaler"]});
export const childModules = Object.freeze({"banjar-galiran-kaler":"./banjar-galiran-kaler/banjar-galiran-kaler.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
