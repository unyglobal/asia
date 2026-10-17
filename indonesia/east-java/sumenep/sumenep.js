// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sumenep","repository":"asia","path":"indonesia/east-java/sumenep","depth":3,"parent":"indonesia/east-java","children":["bangselok-timur","kolor-barat","kolor-timur"]});
export const childModules = Object.freeze({"bangselok-timur":"./bangselok-timur/bangselok-timur.js","kolor-barat":"./kolor-barat/kolor-barat.js","kolor-timur":"./kolor-timur/kolor-timur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
