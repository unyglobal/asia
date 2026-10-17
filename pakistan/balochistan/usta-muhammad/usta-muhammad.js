// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"usta-muhammad","repository":"asia","path":"pakistan/balochistan/usta-muhammad","depth":3,"parent":"pakistan/balochistan","children":["haq-baho"]});
export const childModules = Object.freeze({"haq-baho":"./haq-baho/haq-baho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
