// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chintamani","repository":"asia","path":"india/karnataka/chintamani","depth":3,"parent":"india/karnataka","children":["malapalli","venkatagirikota"]});
export const childModules = Object.freeze({"malapalli":"./malapalli/malapalli.js","venkatagirikota":"./venkatagirikota/venkatagirikota.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
