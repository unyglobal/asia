// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jinan-gun","repository":"asia","path":"south-korea/jeollabuk-do/jinan-gun","depth":3,"parent":"south-korea/jeollabuk-do","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
