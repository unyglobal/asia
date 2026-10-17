// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tekirdag","repository":"asia","path":"turkiye/tekirdag","depth":2,"parent":"turkiye","children":["cerkezkoy","corlu","hayrabolu","malkara"]});
export const childModules = Object.freeze({"cerkezkoy":"./cerkezkoy/cerkezkoy.js","corlu":"./corlu/corlu.js","hayrabolu":"./hayrabolu/hayrabolu.js","malkara":"./malkara/malkara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
