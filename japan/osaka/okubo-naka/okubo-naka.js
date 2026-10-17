// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okubo-naka","repository":"asia","path":"japan/osaka/okubo-naka","depth":3,"parent":"japan/osaka","children":["aobadai","konya","okubokita","sakuragaoka"]});
export const childModules = Object.freeze({"aobadai":"./aobadai/aobadai.js","konya":"./konya/konya.js","okubokita":"./okubokita/okubokita.js","sakuragaoka":"./sakuragaoka/sakuragaoka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
