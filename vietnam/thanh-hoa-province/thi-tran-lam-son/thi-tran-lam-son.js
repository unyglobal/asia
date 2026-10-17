// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thi-tran-lam-son","repository":"asia","path":"vietnam/thanh-hoa-province/thi-tran-lam-son","depth":3,"parent":"vietnam/thanh-hoa-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
