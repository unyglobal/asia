// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"masaurhi-buzurg","repository":"asia","path":"india/bihar/masaurhi-buzurg","depth":3,"parent":"india/bihar","children":["lakhi-bagh","malikana","rahmatganj","taregna"]});
export const childModules = Object.freeze({"lakhi-bagh":"./lakhi-bagh/lakhi-bagh.js","malikana":"./malikana/malikana.js","rahmatganj":"./rahmatganj/rahmatganj.js","taregna":"./taregna/taregna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
