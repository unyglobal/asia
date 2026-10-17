// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ilam-province","repository":"asia","path":"iran/ilam-province","depth":2,"parent":"iran","children":["abdanan","darreh-shahr","dehloran","eyvan","ilam"]});
export const childModules = Object.freeze({"abdanan":"./abdanan/abdanan.js","darreh-shahr":"./darreh-shahr/darreh-shahr.js","dehloran":"./dehloran/dehloran.js","eyvan":"./eyvan/eyvan.js","ilam":"./ilam/ilam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
