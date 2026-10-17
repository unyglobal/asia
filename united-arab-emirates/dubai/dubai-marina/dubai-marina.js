// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dubai-marina","repository":"asia","path":"united-arab-emirates/dubai/dubai-marina","depth":3,"parent":"united-arab-emirates/dubai","children":["al-mina-al-seyahi"]});
export const childModules = Object.freeze({"al-mina-al-seyahi":"./al-mina-al-seyahi/al-mina-al-seyahi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
