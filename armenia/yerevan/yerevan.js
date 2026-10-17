// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yerevan","repository":"asia","path":"armenia/yerevan","depth":2,"parent":"armenia","children":["ajapnyak","arabkir","avan","davtashen","erebuni","kanaker-zeytun","kentron","malatia-sebastia","nor-nork","shengavit"]});
export const childModules = Object.freeze({"ajapnyak":"./ajapnyak/ajapnyak.js","arabkir":"./arabkir/arabkir.js","avan":"./avan/avan.js","davtashen":"./davtashen/davtashen.js","erebuni":"./erebuni/erebuni.js","kanaker-zeytun":"./kanaker-zeytun/kanaker-zeytun.js","kentron":"./kentron/kentron.js","malatia-sebastia":"./malatia-sebastia/malatia-sebastia.js","nor-nork":"./nor-nork/nor-nork.js","shengavit":"./shengavit/shengavit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
