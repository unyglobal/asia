// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"golestan","repository":"asia","path":"iran/tehran/golestan","depth":3,"parent":"iran/tehran","children":["ali-abad-e-katul","aq-qala","azadshahr","bandar-e-gaz","bandar-e-torkaman","fazelabad","galikesh"]});
export const childModules = Object.freeze({"ali-abad-e-katul":"./ali-abad-e-katul/ali-abad-e-katul.js","aq-qala":"./aq-qala/aq-qala.js","azadshahr":"./azadshahr/azadshahr.js","bandar-e-gaz":"./bandar-e-gaz/bandar-e-gaz.js","bandar-e-torkaman":"./bandar-e-torkaman/bandar-e-torkaman.js","fazelabad":"./fazelabad/fazelabad.js","galikesh":"./galikesh/galikesh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
