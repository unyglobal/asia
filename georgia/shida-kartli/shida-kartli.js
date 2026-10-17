// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shida-kartli","repository":"asia","path":"georgia/shida-kartli","depth":2,"parent":"georgia","children":["gori","khashuri","ts-khinvali"]});
export const childModules = Object.freeze({"gori":"./gori/gori.js","khashuri":"./khashuri/khashuri.js","ts-khinvali":"./ts-khinvali/ts-khinvali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
