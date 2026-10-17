// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mandalay-region","repository":"asia","path":"myanmar/mandalay-region","depth":2,"parent":"myanmar","children":["amarapura","kyaukpadaung","kyaukse","madaya","mandalay","meiktila","mogok","myingyan","nyaung-u","pyawbwe","pyin-oo-lwin","wundwin","yamethin"]});
export const childModules = Object.freeze({"amarapura":"./amarapura/amarapura.js","kyaukpadaung":"./kyaukpadaung/kyaukpadaung.js","kyaukse":"./kyaukse/kyaukse.js","madaya":"./madaya/madaya.js","mandalay":"./mandalay/mandalay.js","meiktila":"./meiktila/meiktila.js","mogok":"./mogok/mogok.js","myingyan":"./myingyan/myingyan.js","nyaung-u":"./nyaung-u/nyaung-u.js","pyawbwe":"./pyawbwe/pyawbwe.js","pyin-oo-lwin":"./pyin-oo-lwin/pyin-oo-lwin.js","wundwin":"./wundwin/wundwin.js","yamethin":"./yamethin/yamethin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
