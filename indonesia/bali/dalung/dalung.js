// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dalung","repository":"asia","path":"indonesia/bali/dalung","depth":3,"parent":"indonesia/bali","children":["banjar-celuk","banjar-dama","banjar-padangbali","banjar-pendem"]});
export const childModules = Object.freeze({"banjar-celuk":"./banjar-celuk/banjar-celuk.js","banjar-dama":"./banjar-dama/banjar-dama.js","banjar-padangbali":"./banjar-padangbali/banjar-padangbali.js","banjar-pendem":"./banjar-pendem/banjar-pendem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
