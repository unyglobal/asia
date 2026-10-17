// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diyarbakir-province","repository":"asia","path":"turkiye/diyarbakir-province","depth":2,"parent":"turkiye","children":["bismil","cermik","diyarbak-r","ergani","kulp","lice","silvan"]});
export const childModules = Object.freeze({"bismil":"./bismil/bismil.js","cermik":"./cermik/cermik.js","diyarbak-r":"./diyarbak-r/diyarbak-r.js","ergani":"./ergani/ergani.js","kulp":"./kulp/kulp.js","lice":"./lice/lice.js","silvan":"./silvan/silvan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
