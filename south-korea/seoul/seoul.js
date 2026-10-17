// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seoul","repository":"asia","path":"south-korea/seoul","depth":2,"parent":"south-korea","children":["siheungdong"]});
export const childModules = Object.freeze({"siheungdong":"./siheungdong/siheungdong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
