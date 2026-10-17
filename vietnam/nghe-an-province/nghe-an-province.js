// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nghe-an-province","repository":"asia","path":"vietnam/nghe-an-province","depth":2,"parent":"vietnam","children":["ban-na-hy","ben-thuy","dien-thanh","hoang-mai","kim-lien","thai-hoa","vinh","yen-vinh"]});
export const childModules = Object.freeze({"ban-na-hy":"./ban-na-hy/ban-na-hy.js","ben-thuy":"./ben-thuy/ben-thuy.js","dien-thanh":"./dien-thanh/dien-thanh.js","hoang-mai":"./hoang-mai/hoang-mai.js","kim-lien":"./kim-lien/kim-lien.js","thai-hoa":"./thai-hoa/thai-hoa.js","vinh":"./vinh/vinh.js","yen-vinh":"./yen-vinh/yen-vinh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
