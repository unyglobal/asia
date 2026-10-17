// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seosan","repository":"asia","path":"south-korea/chungcheongnam-do/seosan","depth":3,"parent":"south-korea/chungcheongnam-do","children":["hwalsong-dong"]});
export const childModules = Object.freeze({"hwalsong-dong":"./hwalsong-dong/hwalsong-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
