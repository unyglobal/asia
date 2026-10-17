// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-farwaniyah","repository":"asia","path":"kuwait/al-farwaniyah","depth":2,"parent":"kuwait","children":["janub-as-surrah"]});
export const childModules = Object.freeze({"janub-as-surrah":"./janub-as-surrah/janub-as-surrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
