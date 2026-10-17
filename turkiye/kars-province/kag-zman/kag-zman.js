// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kag-zman","repository":"asia","path":"turkiye/kars-province/kag-zman","depth":3,"parent":"turkiye/kars-province","children":["zuvar"]});
export const childModules = Object.freeze({"zuvar":"./zuvar/zuvar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
