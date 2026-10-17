// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bur-dubai","repository":"asia","path":"united-arab-emirates/dubai/bur-dubai","depth":3,"parent":"united-arab-emirates/dubai","children":["al-musalla"]});
export const childModules = Object.freeze({"al-musalla":"./al-musalla/al-musalla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
