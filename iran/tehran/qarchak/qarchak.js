// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qarchak","repository":"asia","path":"iran/tehran/qarchak","depth":3,"parent":"iran/tehran","children":["shahrak-e-al-mahdi","shahrak-e-emam-khomeyni","shahrak-e-vali-asr","shahrak-e-zibashahr"]});
export const childModules = Object.freeze({"shahrak-e-al-mahdi":"./shahrak-e-al-mahdi/shahrak-e-al-mahdi.js","shahrak-e-emam-khomeyni":"./shahrak-e-emam-khomeyni/shahrak-e-emam-khomeyni.js","shahrak-e-vali-asr":"./shahrak-e-vali-asr/shahrak-e-vali-asr.js","shahrak-e-zibashahr":"./shahrak-e-zibashahr/shahrak-e-zibashahr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
