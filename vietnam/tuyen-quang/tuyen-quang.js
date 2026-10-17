// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuyen-quang","repository":"asia","path":"vietnam/tuyen-quang","depth":2,"parent":"vietnam","children":["bac-quang","ha-giang","thi-tran-viet-quang"]});
export const childModules = Object.freeze({"bac-quang":"./bac-quang/bac-quang.js","ha-giang":"./ha-giang/ha-giang.js","thi-tran-viet-quang":"./thi-tran-viet-quang/thi-tran-viet-quang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
