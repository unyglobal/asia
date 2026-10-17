// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-khorasan","repository":"asia","path":"iran/north-khorasan","depth":2,"parent":"iran","children":["ashkhaneh","bojnurd","esfarayen","jajarm","shirvan"]});
export const childModules = Object.freeze({"ashkhaneh":"./ashkhaneh/ashkhaneh.js","bojnurd":"./bojnurd/bojnurd.js","esfarayen":"./esfarayen/esfarayen.js","jajarm":"./jajarm/jajarm.js","shirvan":"./shirvan/shirvan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
