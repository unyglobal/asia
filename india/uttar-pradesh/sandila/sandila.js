// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sandila","repository":"asia","path":"india/uttar-pradesh/sandila","depth":3,"parent":"india/uttar-pradesh","children":["hijran-sarai","taraf-ashraf-tola","taraf-mandai"]});
export const childModules = Object.freeze({"hijran-sarai":"./hijran-sarai/hijran-sarai.js","taraf-ashraf-tola":"./taraf-ashraf-tola/taraf-ashraf-tola.js","taraf-mandai":"./taraf-mandai/taraf-mandai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
