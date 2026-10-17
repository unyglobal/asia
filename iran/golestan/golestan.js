// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"golestan","repository":"asia","path":"iran/golestan","depth":2,"parent":"iran","children":["gomishan","gonbad-e-kavus","gorgan","kalaleh","kord-kuy","minudasht","simin-shahr"]});
export const childModules = Object.freeze({"gomishan":"./gomishan/gomishan.js","gonbad-e-kavus":"./gonbad-e-kavus/gonbad-e-kavus.js","gorgan":"./gorgan/gorgan.js","kalaleh":"./kalaleh/kalaleh.js","kord-kuy":"./kord-kuy/kord-kuy.js","minudasht":"./minudasht/minudasht.js","simin-shahr":"./simin-shahr/simin-shahr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
