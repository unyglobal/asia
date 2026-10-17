// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mamatid","repository":"asia","path":"philippines/calabarzon/mamatid","depth":3,"parent":"philippines/calabarzon","children":["kapayapaan-village","saint-joseph-village","saint-joseph-village-third"]});
export const childModules = Object.freeze({"kapayapaan-village":"./kapayapaan-village/kapayapaan-village.js","saint-joseph-village":"./saint-joseph-village/saint-joseph-village.js","saint-joseph-village-third":"./saint-joseph-village-third/saint-joseph-village-third.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
