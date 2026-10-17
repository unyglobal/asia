// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muhafazat-hadramaout","repository":"asia","path":"yemen/muhafazat-hadramaout","depth":2,"parent":"yemen","children":["ghayl-ba-wazir","mukalla"]});
export const childModules = Object.freeze({"ghayl-ba-wazir":"./ghayl-ba-wazir/ghayl-ba-wazir.js","mukalla":"./mukalla/mukalla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
