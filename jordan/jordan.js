// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jordan","repository":"asia","path":"jordan","depth":1,"parent":"","children":["ajloun","amman","aqaba","balqa","irbid","jerash","karak","ma-an","madaba","mafraq","tafielah","zarqa"]});
export const childModules = Object.freeze({"ajloun":"./ajloun/ajloun.js","amman":"./amman/amman.js","aqaba":"./aqaba/aqaba.js","balqa":"./balqa/balqa.js","irbid":"./irbid/irbid.js","jerash":"./jerash/jerash.js","karak":"./karak/karak.js","ma-an":"./ma-an/ma-an.js","madaba":"./madaba/madaba.js","mafraq":"./mafraq/mafraq.js","tafielah":"./tafielah/tafielah.js","zarqa":"./zarqa/zarqa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
