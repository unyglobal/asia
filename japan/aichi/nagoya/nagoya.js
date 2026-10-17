// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nagoya","repository":"asia","path":"japan/aichi/nagoya","depth":3,"parent":"japan/aichi","children":["marunochi","osugi","sannomaru","shirakabe","yanagihara"]});
export const childModules = Object.freeze({"marunochi":"./marunochi/marunochi.js","osugi":"./osugi/osugi.js","sannomaru":"./sannomaru/sannomaru.js","shirakabe":"./shirakabe/shirakabe.js","yanagihara":"./yanagihara/yanagihara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
