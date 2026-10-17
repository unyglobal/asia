// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hit","repository":"asia","path":"iraq/anbar/hit","depth":3,"parent":"iraq/anbar","children":["ad-duwarah","al-buhatri","al-itfa","al-khadra","al-qadisiyah","al-qal-ah","al-ummal"]});
export const childModules = Object.freeze({"ad-duwarah":"./ad-duwarah/ad-duwarah.js","al-buhatri":"./al-buhatri/al-buhatri.js","al-itfa":"./al-itfa/al-itfa.js","al-khadra":"./al-khadra/al-khadra.js","al-qadisiyah":"./al-qadisiyah/al-qadisiyah.js","al-qal-ah":"./al-qal-ah/al-qal-ah.js","al-ummal":"./al-ummal/al-ummal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
