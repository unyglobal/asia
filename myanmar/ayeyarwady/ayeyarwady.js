// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ayeyarwady","repository":"asia","path":"myanmar/ayeyarwady","depth":2,"parent":"myanmar","children":["bogale","dawbon","hinthada","ingabu","kyaiklat","kyonpyaw","labutta","maubin","mawlamyinegyunn","myanaung","myaungmya","nyaungdon","pathein","pyapon","wakema","zalun"]});
export const childModules = Object.freeze({"bogale":"./bogale/bogale.js","dawbon":"./dawbon/dawbon.js","hinthada":"./hinthada/hinthada.js","ingabu":"./ingabu/ingabu.js","kyaiklat":"./kyaiklat/kyaiklat.js","kyonpyaw":"./kyonpyaw/kyonpyaw.js","labutta":"./labutta/labutta.js","maubin":"./maubin/maubin.js","mawlamyinegyunn":"./mawlamyinegyunn/mawlamyinegyunn.js","myanaung":"./myanaung/myanaung.js","myaungmya":"./myaungmya/myaungmya.js","nyaungdon":"./nyaungdon/nyaungdon.js","pathein":"./pathein/pathein.js","pyapon":"./pyapon/pyapon.js","wakema":"./wakema/wakema.js","zalun":"./zalun/zalun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
