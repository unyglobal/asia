// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kocaeli","repository":"asia","path":"turkiye/kocaeli","depth":2,"parent":"turkiye","children":["derince","gebze","golcuk","izmit","kand-ra","karamursel","korfez"]});
export const childModules = Object.freeze({"derince":"./derince/derince.js","gebze":"./gebze/gebze.js","golcuk":"./golcuk/golcuk.js","izmit":"./izmit/izmit.js","kand-ra":"./kand-ra/kand-ra.js","karamursel":"./karamursel/karamursel.js","korfez":"./korfez/korfez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
