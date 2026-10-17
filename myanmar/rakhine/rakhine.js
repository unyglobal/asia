// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rakhine","repository":"asia","path":"myanmar/rakhine","depth":2,"parent":"myanmar","children":["ann","buthidaung-town","gwa","kyaukpyu","kyauktaw","kyeintali","manaung","mrauk-u","sittwe","taungup","thandwe"]});
export const childModules = Object.freeze({"ann":"./ann/ann.js","buthidaung-town":"./buthidaung-town/buthidaung-town.js","gwa":"./gwa/gwa.js","kyaukpyu":"./kyaukpyu/kyaukpyu.js","kyauktaw":"./kyauktaw/kyauktaw.js","kyeintali":"./kyeintali/kyeintali.js","manaung":"./manaung/manaung.js","mrauk-u":"./mrauk-u/mrauk-u.js","sittwe":"./sittwe/sittwe.js","taungup":"./taungup/taungup.js","thandwe":"./thandwe/thandwe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
