// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"navoiy-region","repository":"asia","path":"uzbekistan/navoiy-region","depth":2,"parent":"uzbekistan","children":["navoiy","nurota","yangirabot"]});
export const childModules = Object.freeze({"navoiy":"./navoiy/navoiy.js","nurota":"./nurota/nurota.js","yangirabot":"./yangirabot/yangirabot.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
