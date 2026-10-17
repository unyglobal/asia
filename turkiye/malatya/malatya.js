// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malatya","repository":"asia","path":"turkiye/malatya","depth":2,"parent":"turkiye","children":["darende","yak-nca"]});
export const childModules = Object.freeze({"darende":"./darende/darende.js","yak-nca":"./yak-nca/yak-nca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
