// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karanjia","repository":"asia","path":"india/odisha/karanjia","depth":3,"parent":"india/odisha","children":["ankura-garhsai","girima","nimti","niuti","palasia","rajabandhsai"]});
export const childModules = Object.freeze({"ankura-garhsai":"./ankura-garhsai/ankura-garhsai.js","girima":"./girima/girima.js","nimti":"./nimti/nimti.js","niuti":"./niuti/niuti.js","palasia":"./palasia/palasia.js","rajabandhsai":"./rajabandhsai/rajabandhsai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
