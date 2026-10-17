// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mary-mount-village","repository":"asia","path":"philippines/calabarzon/los-banos/mary-mount-village","depth":4,"parent":"philippines/calabarzon/los-banos","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
