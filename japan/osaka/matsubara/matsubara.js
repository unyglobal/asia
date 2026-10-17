// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"matsubara","repository":"asia","path":"japan/osaka/matsubara","depth":3,"parent":"japan/osaka","children":["kawai","shibagaki","shindo","takaminosato"]});
export const childModules = Object.freeze({"kawai":"./kawai/kawai.js","shibagaki":"./shibagaki/shibagaki.js","shindo":"./shindo/shindo.js","takaminosato":"./takaminosato/takaminosato.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
