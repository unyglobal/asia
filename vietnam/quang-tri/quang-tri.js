// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"quang-tri","repository":"asia","path":"vietnam/quang-tri","depth":2,"parent":"vietnam","children":["ba-on","cam-lo","hoan-lao","ong-ha","ong-hoi","quan-hau","thi-xa-quang-tri"]});
export const childModules = Object.freeze({"ba-on":"./ba-on/ba-on.js","cam-lo":"./cam-lo/cam-lo.js","hoan-lao":"./hoan-lao/hoan-lao.js","ong-ha":"./ong-ha/ong-ha.js","ong-hoi":"./ong-hoi/ong-hoi.js","quan-hau":"./quan-hau/quan-hau.js","thi-xa-quang-tri":"./thi-xa-quang-tri/thi-xa-quang-tri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
