// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"himachal-pradesh","repository":"asia","path":"india/himachal-pradesh","depth":2,"parent":"india","children":["baddi","chamba","dharamsala","kalka","kulu","mandi","nahan","paonta-sahib","shimla","solan","sundarnagar"]});
export const childModules = Object.freeze({"baddi":"./baddi/baddi.js","chamba":"./chamba/chamba.js","dharamsala":"./dharamsala/dharamsala.js","kalka":"./kalka/kalka.js","kulu":"./kulu/kulu.js","mandi":"./mandi/mandi.js","nahan":"./nahan/nahan.js","paonta-sahib":"./paonta-sahib/paonta-sahib.js","shimla":"./shimla/shimla.js","solan":"./solan/solan.js","sundarnagar":"./sundarnagar/sundarnagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
