// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poldokhtar","repository":"asia","path":"iran/lorestan-province/poldokhtar","depth":3,"parent":"iran/lorestan-province","children":["shahrak-e-sazmani","shahrak-e-tang-ali"]});
export const childModules = Object.freeze({"shahrak-e-sazmani":"./shahrak-e-sazmani/shahrak-e-sazmani.js","shahrak-e-tang-ali":"./shahrak-e-tang-ali/shahrak-e-tang-ali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
