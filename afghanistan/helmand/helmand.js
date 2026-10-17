// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"helmand","repository":"asia","path":"afghanistan/helmand","depth":2,"parent":"afghanistan","children":["gereshk","khan-neshin","lashkar-gah"]});
export const childModules = Object.freeze({"gereshk":"./gereshk/gereshk.js","khan-neshin":"./khan-neshin/khan-neshin.js","lashkar-gah":"./lashkar-gah/lashkar-gah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
