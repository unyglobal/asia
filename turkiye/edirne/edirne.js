// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"edirne","repository":"asia","path":"turkiye/edirne","depth":2,"parent":"turkiye","children":["kesan","uzunkopru"]});
export const childModules = Object.freeze({"kesan":"./kesan/kesan.js","uzunkopru":"./uzunkopru/uzunkopru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
