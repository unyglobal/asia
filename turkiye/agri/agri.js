// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agri","repository":"asia","path":"turkiye/agri","depth":2,"parent":"turkiye","children":["agr","diyadin","dogubayaz-t","patnos"]});
export const childModules = Object.freeze({"agr":"./agr/agr.js","diyadin":"./diyadin/diyadin.js","dogubayaz-t":"./dogubayaz-t/dogubayaz-t.js","patnos":"./patnos/patnos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
