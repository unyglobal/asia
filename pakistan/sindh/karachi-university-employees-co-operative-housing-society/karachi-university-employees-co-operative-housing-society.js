// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karachi-university-employees-co-operative-housing-society","repository":"asia","path":"pakistan/sindh/karachi-university-employees-co-operative-housing-society","depth":3,"parent":"pakistan/sindh","children":["malik-property-services-society","pili-bhait-housing-scheme","quetta-town","rafi-rose-petal-town","rahim-view","rufi-bunglows-and-apartments","songal"]});
export const childModules = Object.freeze({"malik-property-services-society":"./malik-property-services-society/malik-property-services-society.js","pili-bhait-housing-scheme":"./pili-bhait-housing-scheme/pili-bhait-housing-scheme.js","quetta-town":"./quetta-town/quetta-town.js","rafi-rose-petal-town":"./rafi-rose-petal-town/rafi-rose-petal-town.js","rahim-view":"./rahim-view/rahim-view.js","rufi-bunglows-and-apartments":"./rufi-bunglows-and-apartments/rufi-bunglows-and-apartments.js","songal":"./songal/songal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
