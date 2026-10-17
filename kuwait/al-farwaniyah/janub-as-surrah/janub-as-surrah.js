// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"janub-as-surrah","repository":"asia","path":"kuwait/al-farwaniyah/janub-as-surrah","depth":3,"parent":"kuwait/al-farwaniyah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
