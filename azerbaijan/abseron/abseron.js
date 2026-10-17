// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abseron","repository":"asia","path":"azerbaijan/abseron","depth":2,"parent":"azerbaijan","children":["gobu","hokmali","khirdalan","mehdiabad","saray"]});
export const childModules = Object.freeze({"gobu":"./gobu/gobu.js","hokmali":"./hokmali/hokmali.js","khirdalan":"./khirdalan/khirdalan.js","mehdiabad":"./mehdiabad/mehdiabad.js","saray":"./saray/saray.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
