// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pyongyang","repository":"asia","path":"north-korea/pyongyang","depth":2,"parent":"north-korea","children":["chunghwa","kangdong-up","man-gyongdae-ri","sunan"]});
export const childModules = Object.freeze({"chunghwa":"./chunghwa/chunghwa.js","kangdong-up":"./kangdong-up/kangdong-up.js","man-gyongdae-ri":"./man-gyongdae-ri/man-gyongdae-ri.js","sunan":"./sunan/sunan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
