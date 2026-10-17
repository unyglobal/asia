// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ar-rumaylah","repository":"asia","path":"united-arab-emirates/ajman/ar-rumaylah","depth":3,"parent":"united-arab-emirates/ajman","children":["al-nakhil","al-rumailah","as-sawan"]});
export const childModules = Object.freeze({"al-nakhil":"./al-nakhil/al-nakhil.js","al-rumailah":"./al-rumailah/al-rumailah.js","as-sawan":"./as-sawan/as-sawan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
