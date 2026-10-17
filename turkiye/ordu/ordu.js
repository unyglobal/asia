// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ordu","repository":"asia","path":"turkiye/ordu","depth":2,"parent":"turkiye","children":["fatsa","gurgentepe","korgan","kumru","unye"]});
export const childModules = Object.freeze({"fatsa":"./fatsa/fatsa.js","gurgentepe":"./gurgentepe/gurgentepe.js","korgan":"./korgan/korgan.js","kumru":"./kumru/kumru.js","unye":"./unye/unye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
