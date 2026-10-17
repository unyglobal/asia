// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tendo","repository":"asia","path":"japan/yamagata/tendo","depth":3,"parent":"japan/yamagata","children":["higashihoncho","hitoichimachi","honcho","itsukamachi","kitame","koji","minamiobata","nakamachi"]});
export const childModules = Object.freeze({"higashihoncho":"./higashihoncho/higashihoncho.js","hitoichimachi":"./hitoichimachi/hitoichimachi.js","honcho":"./honcho/honcho.js","itsukamachi":"./itsukamachi/itsukamachi.js","kitame":"./kitame/kitame.js","koji":"./koji/koji.js","minamiobata":"./minamiobata/minamiobata.js","nakamachi":"./nakamachi/nakamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
