// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jalal-abad-region","repository":"asia","path":"kyrgyzstan/jalal-abad-region","depth":2,"parent":"kyrgyzstan","children":["ala-buka","bazar-korgon","kara-kul","kochkor-ata","manas","massy","suzak","tash-kumyr","toktogul"]});
export const childModules = Object.freeze({"ala-buka":"./ala-buka/ala-buka.js","bazar-korgon":"./bazar-korgon/bazar-korgon.js","kara-kul":"./kara-kul/kara-kul.js","kochkor-ata":"./kochkor-ata/kochkor-ata.js","manas":"./manas/manas.js","massy":"./massy/massy.js","suzak":"./suzak/suzak.js","tash-kumyr":"./tash-kumyr/tash-kumyr.js","toktogul":"./toktogul/toktogul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
