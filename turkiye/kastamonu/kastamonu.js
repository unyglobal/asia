// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kastamonu","repository":"asia","path":"turkiye/kastamonu","depth":2,"parent":"turkiye","children":["taskopru","tosya"]});
export const childModules = Object.freeze({"taskopru":"./taskopru/taskopru.js","tosya":"./tosya/tosya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
