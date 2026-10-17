// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gongju","repository":"asia","path":"south-korea/chungcheongnam-do/gongju","depth":3,"parent":"south-korea/chungcheongnam-do","children":["chunghak-tong"]});
export const childModules = Object.freeze({"chunghak-tong":"./chunghak-tong/chunghak-tong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
