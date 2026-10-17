// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"terengganu","repository":"asia","path":"malaysia/terengganu","depth":2,"parent":"malaysia","children":["cukai","dungun","kertih","kuala-nerus","kuala-terengganu","marang","paka"]});
export const childModules = Object.freeze({"cukai":"./cukai/cukai.js","dungun":"./dungun/dungun.js","kertih":"./kertih/kertih.js","kuala-nerus":"./kuala-nerus/kuala-nerus.js","kuala-terengganu":"./kuala-terengganu/kuala-terengganu.js","marang":"./marang/marang.js","paka":"./paka/paka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
