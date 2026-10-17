// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imereti","repository":"asia","path":"georgia/imereti","depth":2,"parent":"georgia","children":["kutaisi","samtredia","zestaponi"]});
export const childModules = Object.freeze({"kutaisi":"./kutaisi/kutaisi.js","samtredia":"./samtredia/samtredia.js","zestaponi":"./zestaponi/zestaponi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
