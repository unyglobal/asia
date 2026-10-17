// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qiryat-hayovel","repository":"asia","path":"israel/jerusalem/qiryat-hayovel","depth":3,"parent":"israel/jerusalem","children":["en-kerem","qiryat-menahem"]});
export const childModules = Object.freeze({"en-kerem":"./en-kerem/en-kerem.js","qiryat-menahem":"./qiryat-menahem/qiryat-menahem.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
