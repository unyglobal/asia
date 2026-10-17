// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seonghwan","repository":"asia","path":"south-korea/chungcheongnam-do/seonghwan","depth":3,"parent":"south-korea/chungcheongnam-do","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
