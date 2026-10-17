// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"turkmenistan","repository":"asia","path":"turkmenistan","depth":1,"parent":"","children":["ahal","ashgabat","balkan","dasoguz","lebap","mary"]});
export const childModules = Object.freeze({"ahal":"./ahal/ahal.js","ashgabat":"./ashgabat/ashgabat.js","balkan":"./balkan/balkan.js","dasoguz":"./dasoguz/dasoguz.js","lebap":"./lebap/lebap.js","mary":"./mary/mary.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
