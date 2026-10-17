// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miki","repository":"asia","path":"japan/hyogo/miki","depth":3,"parent":"japan/hyogo","children":["fukui","hommachi","shibamachi"]});
export const childModules = Object.freeze({"fukui":"./fukui/fukui.js","hommachi":"./hommachi/hommachi.js","shibamachi":"./shibamachi/shibamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
