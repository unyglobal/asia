// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"juybar","repository":"asia","path":"iran/mazandaran/juybar","depth":3,"parent":"iran/mazandaran","children":["javan-mahalleh","kord-mahalleh","shahrak-e-sepah"]});
export const childModules = Object.freeze({"javan-mahalleh":"./javan-mahalleh/javan-mahalleh.js","kord-mahalleh":"./kord-mahalleh/kord-mahalleh.js","shahrak-e-sepah":"./shahrak-e-sepah/shahrak-e-sepah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
