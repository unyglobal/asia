// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fukui-shi","repository":"asia","path":"japan/fukui/fukui-shi","depth":3,"parent":"japan/fukui","children":["ohtemachi"]});
export const childModules = Object.freeze({"ohtemachi":"./ohtemachi/ohtemachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
