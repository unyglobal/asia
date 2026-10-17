// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pedro","repository":"asia","path":"philippines/calabarzon/san-pedro","depth":3,"parent":"philippines/calabarzon","children":["adelina-one-a-subdivision","el-vinda-village","holiday-homes","olivarez-subdivision-phase-sexto"]});
export const childModules = Object.freeze({"adelina-one-a-subdivision":"./adelina-one-a-subdivision/adelina-one-a-subdivision.js","el-vinda-village":"./el-vinda-village/el-vinda-village.js","holiday-homes":"./holiday-homes/holiday-homes.js","olivarez-subdivision-phase-sexto":"./olivarez-subdivision-phase-sexto/olivarez-subdivision-phase-sexto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
