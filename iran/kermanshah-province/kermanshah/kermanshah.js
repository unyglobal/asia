// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kermanshah","repository":"asia","path":"iran/kermanshah-province/kermanshah","depth":3,"parent":"iran/kermanshah-province","children":["rashidi"]});
export const childModules = Object.freeze({"rashidi":"./rashidi/rashidi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
