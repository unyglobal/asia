// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lumbini-province","repository":"asia","path":"nepal/lumbini-province","depth":2,"parent":"nepal","children":["butwal","gulariya","nepalgunj","siddharthanagar","tansen","tulsipur"]});
export const childModules = Object.freeze({"butwal":"./butwal/butwal.js","gulariya":"./gulariya/gulariya.js","nepalgunj":"./nepalgunj/nepalgunj.js","siddharthanagar":"./siddharthanagar/siddharthanagar.js","tansen":"./tansen/tansen.js","tulsipur":"./tulsipur/tulsipur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
