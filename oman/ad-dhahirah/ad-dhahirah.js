// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ad-dhahirah","repository":"asia","path":"oman/ad-dhahirah","depth":2,"parent":"oman","children":["ibri","yanqul"]});
export const childModules = Object.freeze({"ibri":"./ibri/ibri.js","yanqul":"./yanqul/yanqul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
