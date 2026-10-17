// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"umm-al-quwain","repository":"asia","path":"united-arab-emirates/umm-al-quwain","depth":2,"parent":"united-arab-emirates","children":["umm-al-quwain-city"]});
export const childModules = Object.freeze({"umm-al-quwain-city":"./umm-al-quwain-city/umm-al-quwain-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
