// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nankana-sahib","repository":"asia","path":"pakistan/punjab/nankana-sahib","depth":3,"parent":"pakistan/punjab","children":["kaneda-colony"]});
export const childModules = Object.freeze({"kaneda-colony":"./kaneda-colony/kaneda-colony.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
