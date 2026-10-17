// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asan","repository":"asia","path":"south-korea/chungcheongnam-do/asan","depth":3,"parent":"south-korea/chungcheongnam-do","children":["onyangonch-oni-dong","onyangonch-onil-tong"]});
export const childModules = Object.freeze({"onyangonch-oni-dong":"./onyangonch-oni-dong/onyangonch-oni-dong.js","onyangonch-onil-tong":"./onyangonch-onil-tong/onyangonch-onil-tong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
