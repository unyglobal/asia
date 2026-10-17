// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northern-province","repository":"asia","path":"sri-lanka/northern-province","depth":2,"parent":"sri-lanka","children":["jaffna","mannar","mullaittivu","point-pedro","valvedditturai","vavuniya"]});
export const childModules = Object.freeze({"jaffna":"./jaffna/jaffna.js","mannar":"./mannar/mannar.js","mullaittivu":"./mullaittivu/mullaittivu.js","point-pedro":"./point-pedro/point-pedro.js","valvedditturai":"./valvedditturai/valvedditturai.js","vavuniya":"./vavuniya/vavuniya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
