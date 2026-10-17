// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atyrau-oblisi","repository":"asia","path":"kazakhstan/atyrau-oblisi","depth":2,"parent":"kazakhstan","children":["atyrau","balykshi","qulsary","shalkar"]});
export const childModules = Object.freeze({"atyrau":"./atyrau/atyrau.js","balykshi":"./balykshi/balykshi.js","qulsary":"./qulsary/qulsary.js","shalkar":"./shalkar/shalkar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
