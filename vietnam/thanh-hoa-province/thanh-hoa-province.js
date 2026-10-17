// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thanh-hoa-province","repository":"asia","path":"vietnam/thanh-hoa-province","depth":2,"parent":"vietnam","children":["bim-son","nga-son","nghi-son","sam-son","thanh-hoa","thi-tran-lam-son","thi-tran-sao-vang","thi-tran-van-du"]});
export const childModules = Object.freeze({"bim-son":"./bim-son/bim-son.js","nga-son":"./nga-son/nga-son.js","nghi-son":"./nghi-son/nghi-son.js","sam-son":"./sam-son/sam-son.js","thanh-hoa":"./thanh-hoa/thanh-hoa.js","thi-tran-lam-son":"./thi-tran-lam-son/thi-tran-lam-son.js","thi-tran-sao-vang":"./thi-tran-sao-vang/thi-tran-sao-vang.js","thi-tran-van-du":"./thi-tran-van-du/thi-tran-van-du.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
