// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hue","repository":"asia","path":"vietnam/thua-thien-hue-province/hue","depth":3,"parent":"vietnam/thua-thien-hue-province","children":["phu-hoi","phu-nhuan"]});
export const childModules = Object.freeze({"phu-hoi":"./phu-hoi/phu-hoi.js","phu-nhuan":"./phu-nhuan/phu-nhuan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
