// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaizuka","repository":"asia","path":"japan/osaka/kaizuka","depth":3,"parent":"japan/osaka","children":["hori","umizuka","wakihama"]});
export const childModules = Object.freeze({"hori":"./hori/hori.js","umizuka":"./umizuka/umizuka.js","wakihama":"./wakihama/wakihama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
