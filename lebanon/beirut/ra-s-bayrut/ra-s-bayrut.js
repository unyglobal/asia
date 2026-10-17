// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ra-s-bayrut","repository":"asia","path":"lebanon/beirut/ra-s-bayrut","depth":3,"parent":"lebanon/beirut","children":["ain-el-mraisse","ayn-al-muraysa","el-cabbouchiye","el-izaa","el-ouardiye","es-snoubra","habs-el-qalaa","jounblat","ras-beyrouth"]});
export const childModules = Object.freeze({"ain-el-mraisse":"./ain-el-mraisse/ain-el-mraisse.js","ayn-al-muraysa":"./ayn-al-muraysa/ayn-al-muraysa.js","el-cabbouchiye":"./el-cabbouchiye/el-cabbouchiye.js","el-izaa":"./el-izaa/el-izaa.js","el-ouardiye":"./el-ouardiye/el-ouardiye.js","es-snoubra":"./es-snoubra/es-snoubra.js","habs-el-qalaa":"./habs-el-qalaa/habs-el-qalaa.js","jounblat":"./jounblat/jounblat.js","ras-beyrouth":"./ras-beyrouth/ras-beyrouth.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
