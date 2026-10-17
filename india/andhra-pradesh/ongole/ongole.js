// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ongole","repository":"asia","path":"india/andhra-pradesh/ongole","depth":3,"parent":"india/andhra-pradesh","children":["guddalaguntapalem"]});
export const childModules = Object.freeze({"guddalaguntapalem":"./guddalaguntapalem/guddalaguntapalem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
