// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tibet","repository":"asia","path":"china/tibet","depth":2,"parent":"china","children":["bayi","chengguan-qu","dagze","damxung","deqen","doilungdeqen","gar","lhasa","lhoka","lhunzhub","luobuqiongzi","maizhokunggar","nagqu","nyemo","nyingchi","qamdo","quxu","rikaze"]});
export const childModules = Object.freeze({"bayi":"./bayi/bayi.js","chengguan-qu":"./chengguan-qu/chengguan-qu.js","dagze":"./dagze/dagze.js","damxung":"./damxung/damxung.js","deqen":"./deqen/deqen.js","doilungdeqen":"./doilungdeqen/doilungdeqen.js","gar":"./gar/gar.js","lhasa":"./lhasa/lhasa.js","lhoka":"./lhoka/lhoka.js","lhunzhub":"./lhunzhub/lhunzhub.js","luobuqiongzi":"./luobuqiongzi/luobuqiongzi.js","maizhokunggar":"./maizhokunggar/maizhokunggar.js","nagqu":"./nagqu/nagqu.js","nyemo":"./nyemo/nyemo.js","nyingchi":"./nyingchi/nyingchi.js","qamdo":"./qamdo/qamdo.js","quxu":"./quxu/quxu.js","rikaze":"./rikaze/rikaze.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
