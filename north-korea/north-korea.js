// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-korea","repository":"asia","path":"north-korea","depth":1,"parent":"","children":["chagang","kaesong","kangwon-do","nampo","north-hamgyong","north-hwanghae","p-yongan-bukto","pyongyang","rason","south-hamgyong","south-hwanghae","south-pyongan","sungho-tong","yanggang-do"]});
export const childModules = Object.freeze({"chagang":"./chagang/chagang.js","kaesong":"./kaesong/kaesong.js","kangwon-do":"./kangwon-do/kangwon-do.js","nampo":"./nampo/nampo.js","north-hamgyong":"./north-hamgyong/north-hamgyong.js","north-hwanghae":"./north-hwanghae/north-hwanghae.js","p-yongan-bukto":"./p-yongan-bukto/p-yongan-bukto.js","pyongyang":"./pyongyang/pyongyang.js","rason":"./rason/rason.js","south-hamgyong":"./south-hamgyong/south-hamgyong.js","south-hwanghae":"./south-hwanghae/south-hwanghae.js","south-pyongan":"./south-pyongan/south-pyongan.js","sungho-tong":"./sungho-tong/sungho-tong.js","yanggang-do":"./yanggang-do/yanggang-do.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
