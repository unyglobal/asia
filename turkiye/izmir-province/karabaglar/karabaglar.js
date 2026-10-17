// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karabaglar","repository":"asia","path":"turkiye/izmir-province/karabaglar","depth":3,"parent":"turkiye/izmir-province","children":["cennetoglu","sar-yer","selvilli","ugur-mumcu"]});
export const childModules = Object.freeze({"cennetoglu":"./cennetoglu/cennetoglu.js","sar-yer":"./sar-yer/sar-yer.js","selvilli":"./selvilli/selvilli.js","ugur-mumcu":"./ugur-mumcu/ugur-mumcu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
