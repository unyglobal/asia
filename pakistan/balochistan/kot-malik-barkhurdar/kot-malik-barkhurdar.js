// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kot-malik-barkhurdar","repository":"asia","path":"pakistan/balochistan/kot-malik-barkhurdar","depth":3,"parent":"pakistan/balochistan","children":["darbar-nur-ahmad-jan","deba-kili","hudda","kili-arbab-muhammad-afzul","kili-arbaban","kili-husaini","kili-mengal-baranzai","kili-new-nichari","kili-sherani"]});
export const childModules = Object.freeze({"darbar-nur-ahmad-jan":"./darbar-nur-ahmad-jan/darbar-nur-ahmad-jan.js","deba-kili":"./deba-kili/deba-kili.js","hudda":"./hudda/hudda.js","kili-arbab-muhammad-afzul":"./kili-arbab-muhammad-afzul/kili-arbab-muhammad-afzul.js","kili-arbaban":"./kili-arbaban/kili-arbaban.js","kili-husaini":"./kili-husaini/kili-husaini.js","kili-mengal-baranzai":"./kili-mengal-baranzai/kili-mengal-baranzai.js","kili-new-nichari":"./kili-new-nichari/kili-new-nichari.js","kili-sherani":"./kili-sherani/kili-sherani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
