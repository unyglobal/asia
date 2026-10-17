// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hama","repository":"asia","path":"syria/hama","depth":2,"parent":"syria","children":["as-salamiyah","halfaya","hamah","kafr-zayta","maharda","masyaf","suran","tayyibat-al-imam"]});
export const childModules = Object.freeze({"as-salamiyah":"./as-salamiyah/as-salamiyah.js","halfaya":"./halfaya/halfaya.js","hamah":"./hamah/hamah.js","kafr-zayta":"./kafr-zayta/kafr-zayta.js","maharda":"./maharda/maharda.js","masyaf":"./masyaf/masyaf.js","suran":"./suran/suran.js","tayyibat-al-imam":"./tayyibat-al-imam/tayyibat-al-imam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
