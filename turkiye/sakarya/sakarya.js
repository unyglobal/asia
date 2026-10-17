// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sakarya","repository":"asia","path":"turkiye/sakarya","depth":2,"parent":"turkiye","children":["adapazar","akyaz","ferizli","geyve","hendek","karasu","karasu-mahallesi","kocaali","sapanca"]});
export const childModules = Object.freeze({"adapazar":"./adapazar/adapazar.js","akyaz":"./akyaz/akyaz.js","ferizli":"./ferizli/ferizli.js","geyve":"./geyve/geyve.js","hendek":"./hendek/hendek.js","karasu":"./karasu/karasu.js","karasu-mahallesi":"./karasu-mahallesi/karasu-mahallesi.js","kocaali":"./kocaali/kocaali.js","sapanca":"./sapanca/sapanca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
