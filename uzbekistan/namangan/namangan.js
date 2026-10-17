// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"namangan","repository":"asia","path":"uzbekistan/namangan","depth":2,"parent":"uzbekistan","children":["chortoq","chust","haqqulobod","kosonsoy","pop","to-rqao-rg-on","toshbuloq","uchqurghon-shahri","uychi","yangiqo-rg-on"]});
export const childModules = Object.freeze({"chortoq":"./chortoq/chortoq.js","chust":"./chust/chust.js","haqqulobod":"./haqqulobod/haqqulobod.js","kosonsoy":"./kosonsoy/kosonsoy.js","pop":"./pop/pop.js","to-rqao-rg-on":"./to-rqao-rg-on/to-rqao-rg-on.js","toshbuloq":"./toshbuloq/toshbuloq.js","uchqurghon-shahri":"./uchqurghon-shahri/uchqurghon-shahri.js","uychi":"./uychi/uychi.js","yangiqo-rg-on":"./yangiqo-rg-on/yangiqo-rg-on.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
