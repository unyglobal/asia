// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-asimah","repository":"asia","path":"kuwait/al-asimah","depth":2,"parent":"kuwait","children":["ad-dasmah","ar-rabiyah","kuwait-city"]});
export const childModules = Object.freeze({"ad-dasmah":"./ad-dasmah/ad-dasmah.js","ar-rabiyah":"./ar-rabiyah/ar-rabiyah.js","kuwait-city":"./kuwait-city/kuwait-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
