// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batubulan","repository":"asia","path":"indonesia/bali/batubulan","depth":3,"parent":"indonesia/bali","children":["banjar-dajanrurung","banjar-kalah","banjar-kapal","banjar-tegehe"]});
export const childModules = Object.freeze({"banjar-dajanrurung":"./banjar-dajanrurung/banjar-dajanrurung.js","banjar-kalah":"./banjar-kalah/banjar-kalah.js","banjar-kapal":"./banjar-kapal/banjar-kapal.js","banjar-tegehe":"./banjar-tegehe/banjar-tegehe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
