// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-jerusalem","repository":"asia","path":"palestine/west-bank/east-jerusalem","depth":3,"parent":"palestine/west-bank","children":["al-haram-ash-sharif"]});
export const childModules = Object.freeze({"al-haram-ash-sharif":"./al-haram-ash-sharif/al-haram-ash-sharif.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
