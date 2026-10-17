// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trat","repository":"asia","path":"thailand/trat","depth":2,"parent":"thailand","children":["khao-saming","khlong-yai","laem-ngop"]});
export const childModules = Object.freeze({"khao-saming":"./khao-saming/khao-saming.js","khlong-yai":"./khlong-yai/khlong-yai.js","laem-ngop":"./laem-ngop/laem-ngop.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
