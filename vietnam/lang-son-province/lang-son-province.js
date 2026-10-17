// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lang-son-province","repository":"asia","path":"vietnam/lang-son-province","depth":2,"parent":"vietnam","children":["lang-son","thi-tran-na-duong","thi-tran-that-khe"]});
export const childModules = Object.freeze({"lang-son":"./lang-son/lang-son.js","thi-tran-na-duong":"./thi-tran-na-duong/thi-tran-na-duong.js","thi-tran-that-khe":"./thi-tran-that-khe/thi-tran-that-khe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
