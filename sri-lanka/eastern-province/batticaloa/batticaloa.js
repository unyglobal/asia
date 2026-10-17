// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batticaloa","repository":"asia","path":"sri-lanka/eastern-province/batticaloa","depth":3,"parent":"sri-lanka/eastern-province","children":["sallipiddi","sinhalavadi"]});
export const childModules = Object.freeze({"sallipiddi":"./sallipiddi/sallipiddi.js","sinhalavadi":"./sinhalavadi/sinhalavadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
