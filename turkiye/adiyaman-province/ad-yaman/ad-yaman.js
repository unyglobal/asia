// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ad-yaman","repository":"asia","path":"turkiye/adiyaman-province/ad-yaman","depth":3,"parent":"turkiye/adiyaman-province","children":["malazgirt"]});
export const childModules = Object.freeze({"malazgirt":"./malazgirt/malazgirt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
