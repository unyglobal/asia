// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batu-kurau","repository":"asia","path":"malaysia/perak/batu-kurau","depth":3,"parent":"malaysia/perak","children":["kampong-changkat-semambu"]});
export const childModules = Object.freeze({"kampong-changkat-semambu":"./kampong-changkat-semambu/kampong-changkat-semambu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
