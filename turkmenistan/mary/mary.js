// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mary","repository":"asia","path":"turkmenistan/mary","depth":2,"parent":"turkmenistan","children":["bayramaly","casgyn","seydi","turkmengala","yoloten"]});
export const childModules = Object.freeze({"bayramaly":"./bayramaly/bayramaly.js","casgyn":"./casgyn/casgyn.js","seydi":"./seydi/seydi.js","turkmengala":"./turkmengala/turkmengala.js","yoloten":"./yoloten/yoloten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
