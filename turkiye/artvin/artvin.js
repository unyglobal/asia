// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"artvin","repository":"asia","path":"turkiye/artvin","depth":2,"parent":"turkiye","children":["arhavi","hopa"]});
export const childModules = Object.freeze({"arhavi":"./arhavi/arhavi.js","hopa":"./hopa/hopa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
