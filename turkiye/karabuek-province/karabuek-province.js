// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karabuek-province","repository":"asia","path":"turkiye/karabuek-province","depth":2,"parent":"turkiye","children":["karabuk","safranbolu"]});
export const childModules = Object.freeze({"karabuk":"./karabuk/karabuk.js","safranbolu":"./safranbolu/safranbolu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
