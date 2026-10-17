// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phu-tho","repository":"asia","path":"vietnam/phu-tho","depth":2,"parent":"vietnam","children":["bo","hoa-binh","phuc-yen","viet-tri","vinh-yen"]});
export const childModules = Object.freeze({"bo":"./bo/bo.js","hoa-binh":"./hoa-binh/hoa-binh.js","phuc-yen":"./phuc-yen/phuc-yen.js","viet-tri":"./viet-tri/viet-tri.js","vinh-yen":"./vinh-yen/vinh-yen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
