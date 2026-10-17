// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-safa","repository":"asia","path":"united-arab-emirates/dubai/al-safa","depth":3,"parent":"united-arab-emirates/dubai","children":["al-saffa-first"]});
export const childModules = Object.freeze({"al-saffa-first":"./al-saffa-first/al-saffa-first.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
