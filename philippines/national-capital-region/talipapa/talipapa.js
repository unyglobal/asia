// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"talipapa","repository":"asia","path":"philippines/national-capital-region/talipapa","depth":3,"parent":"philippines/national-capital-region","children":["la-trinidad-village"]});
export const childModules = Object.freeze({"la-trinidad-village":"./la-trinidad-village/la-trinidad-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
