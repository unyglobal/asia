// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chikushino-shi","repository":"asia","path":"japan/fukuoka/chikushino-shi","depth":3,"parent":"japan/fukuoka","children":["futsukaichinishi","tonoharuhigashi","tonoharunishi","yumachi"]});
export const childModules = Object.freeze({"futsukaichinishi":"./futsukaichinishi/futsukaichinishi.js","tonoharuhigashi":"./tonoharuhigashi/tonoharuhigashi.js","tonoharunishi":"./tonoharunishi/tonoharunishi.js","yumachi":"./yumachi/yumachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
