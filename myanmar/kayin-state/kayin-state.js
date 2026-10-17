// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kayin-state","repository":"asia","path":"myanmar/kayin-state","depth":2,"parent":"myanmar","children":["hpa-an","kawkareik","myawaddy","payathonzu"]});
export const childModules = Object.freeze({"hpa-an":"./hpa-an/hpa-an.js","kawkareik":"./kawkareik/kawkareik.js","myawaddy":"./myawaddy/myawaddy.js","payathonzu":"./payathonzu/payathonzu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
