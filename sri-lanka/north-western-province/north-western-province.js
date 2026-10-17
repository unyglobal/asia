// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-western-province","repository":"asia","path":"sri-lanka/north-western-province","depth":2,"parent":"sri-lanka","children":["chilaw","kurunegala","puttalam"]});
export const childModules = Object.freeze({"chilaw":"./chilaw/chilaw.js","kurunegala":"./kurunegala/kurunegala.js","puttalam":"./puttalam/puttalam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
