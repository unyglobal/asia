// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rudehen","repository":"asia","path":"iran/tehran/rudehen","depth":3,"parent":"iran/tehran","children":["shahrak-e-baharan","shahrak-e-elahiyeh"]});
export const childModules = Object.freeze({"shahrak-e-baharan":"./shahrak-e-baharan/shahrak-e-baharan.js","shahrak-e-elahiyeh":"./shahrak-e-elahiyeh/shahrak-e-elahiyeh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
