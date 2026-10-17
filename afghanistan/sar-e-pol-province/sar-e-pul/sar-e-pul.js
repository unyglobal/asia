// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sar-e-pul","repository":"asia","path":"afghanistan/sar-e-pol-province/sar-e-pul","depth":3,"parent":"afghanistan/sar-e-pol-province","children":["sar-e-asyab","shahr-e-kuhnah","shahr-e-now"]});
export const childModules = Object.freeze({"sar-e-asyab":"./sar-e-asyab/sar-e-asyab.js","shahr-e-kuhnah":"./shahr-e-kuhnah/shahr-e-kuhnah.js","shahr-e-now":"./shahr-e-now/shahr-e-now.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
