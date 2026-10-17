// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalaleh","repository":"asia","path":"iran/golestan/kalaleh","depth":3,"parent":"iran/golestan","children":["chareh-aqa"]});
export const childModules = Object.freeze({"chareh-aqa":"./chareh-aqa/chareh-aqa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
