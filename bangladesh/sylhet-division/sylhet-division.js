// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sylhet-division","repository":"asia","path":"bangladesh/sylhet-division","depth":2,"parent":"bangladesh","children":["baniachang","chhatak","habiganj","maulavi-bazar","srimangal","sunamganj","sylhet"]});
export const childModules = Object.freeze({"baniachang":"./baniachang/baniachang.js","chhatak":"./chhatak/chhatak.js","habiganj":"./habiganj/habiganj.js","maulavi-bazar":"./maulavi-bazar/maulavi-bazar.js","srimangal":"./srimangal/srimangal.js","sunamganj":"./sunamganj/sunamganj.js","sylhet":"./sylhet/sylhet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
