// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"irbid","repository":"asia","path":"jordan/irbid","depth":2,"parent":"jordan","children":["ar-ramtha","aydun","judita","kurayyimah"]});
export const childModules = Object.freeze({"ar-ramtha":"./ar-ramtha/ar-ramtha.js","aydun":"./aydun/aydun.js","judita":"./judita/judita.js","kurayyimah":"./kurayyimah/kurayyimah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
