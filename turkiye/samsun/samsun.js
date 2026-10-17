// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samsun","repository":"asia","path":"turkiye/samsun","depth":2,"parent":"turkiye","children":["bafra","carsamba","havza","tekkekoy","terme","vezirkopru"]});
export const childModules = Object.freeze({"bafra":"./bafra/bafra.js","carsamba":"./carsamba/carsamba.js","havza":"./havza/havza.js","tekkekoy":"./tekkekoy/tekkekoy.js","terme":"./terme/terme.js","vezirkopru":"./vezirkopru/vezirkopru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
