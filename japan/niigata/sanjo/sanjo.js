// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanjo","repository":"asia","path":"japan/niigata/sanjo","depth":3,"parent":"japan/niigata","children":["minamiyokkamachi","nishihonjoji","nishiyokkamachi"]});
export const childModules = Object.freeze({"minamiyokkamachi":"./minamiyokkamachi/minamiyokkamachi.js","nishihonjoji":"./nishihonjoji/nishihonjoji.js","nishiyokkamachi":"./nishiyokkamachi/nishiyokkamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
