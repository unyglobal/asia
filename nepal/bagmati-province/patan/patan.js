// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"patan","repository":"asia","path":"nepal/bagmati-province/patan","depth":3,"parent":"nepal/bagmati-province","children":["jawalakhel"]});
export const childModules = Object.freeze({"jawalakhel":"./jawalakhel/jawalakhel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
