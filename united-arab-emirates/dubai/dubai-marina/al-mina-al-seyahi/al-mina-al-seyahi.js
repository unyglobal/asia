// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-mina-al-seyahi","repository":"asia","path":"united-arab-emirates/dubai/dubai-marina/al-mina-al-seyahi","depth":4,"parent":"united-arab-emirates/dubai/dubai-marina","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
