// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"takaoka","repository":"asia","path":"japan/toyama/takaoka","depth":3,"parent":"japan/toyama","children":["nakagawa","otsubomachi"]});
export const childModules = Object.freeze({"nakagawa":"./nakagawa/nakagawa.js","otsubomachi":"./otsubomachi/otsubomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
