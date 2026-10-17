// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jeollabuk-do","repository":"asia","path":"south-korea/jeollabuk-do","depth":2,"parent":"south-korea","children":["buan","changsu","gunsan","iksan","imsil","jeongeup","jeonju","jinan-gun","kimje","koch-ang","namsa","nangen","wanju"]});
export const childModules = Object.freeze({"buan":"./buan/buan.js","changsu":"./changsu/changsu.js","gunsan":"./gunsan/gunsan.js","iksan":"./iksan/iksan.js","imsil":"./imsil/imsil.js","jeongeup":"./jeongeup/jeongeup.js","jeonju":"./jeonju/jeonju.js","jinan-gun":"./jinan-gun/jinan-gun.js","kimje":"./kimje/kimje.js","koch-ang":"./koch-ang/koch-ang.js","namsa":"./namsa/namsa.js","nangen":"./nangen/nangen.js","wanju":"./wanju/wanju.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
