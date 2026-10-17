// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eastern-visayas","repository":"asia","path":"philippines/eastern-visayas","depth":2,"parent":"philippines","children":["abuyog","baybay","borongan","burauen","calbayog-city","carigara","catarman","catbalogan","inopacan","laoang","maasin","ormoc","palo","panalanoy","tacloban","zumarraga"]});
export const childModules = Object.freeze({"abuyog":"./abuyog/abuyog.js","baybay":"./baybay/baybay.js","borongan":"./borongan/borongan.js","burauen":"./burauen/burauen.js","calbayog-city":"./calbayog-city/calbayog-city.js","carigara":"./carigara/carigara.js","catarman":"./catarman/catarman.js","catbalogan":"./catbalogan/catbalogan.js","inopacan":"./inopacan/inopacan.js","laoang":"./laoang/laoang.js","maasin":"./maasin/maasin.js","ormoc":"./ormoc/ormoc.js","palo":"./palo/palo.js","panalanoy":"./panalanoy/panalanoy.js","tacloban":"./tacloban/tacloban.js","zumarraga":"./zumarraga/zumarraga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
