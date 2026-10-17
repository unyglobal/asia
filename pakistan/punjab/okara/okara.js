// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okara","repository":"asia","path":"pakistan/punjab/okara","depth":3,"parent":"pakistan/punjab","children":["amir-colony","peoples-colony","samadpura","waris-colony"]});
export const childModules = Object.freeze({"amir-colony":"./amir-colony/amir-colony.js","peoples-colony":"./peoples-colony/peoples-colony.js","samadpura":"./samadpura/samadpura.js","waris-colony":"./waris-colony/waris-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
