// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sudurpashchim-pradesh","repository":"asia","path":"nepal/sudurpashchim-pradesh","depth":2,"parent":"nepal","children":["amargadhi","bhimdatta","darchula","dhangadhi","dipayal","tikapur"]});
export const childModules = Object.freeze({"amargadhi":"./amargadhi/amargadhi.js","bhimdatta":"./bhimdatta/bhimdatta.js","darchula":"./darchula/darchula.js","dhangadhi":"./dhangadhi/dhangadhi.js","dipayal":"./dipayal/dipayal.js","tikapur":"./tikapur/tikapur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
