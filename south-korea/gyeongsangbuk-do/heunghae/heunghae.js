// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heunghae","repository":"asia","path":"south-korea/gyeongsangbuk-do/heunghae","depth":3,"parent":"south-korea/gyeongsangbuk-do","children":["hakseong","hwangseongni","mangcheon","mangsanmit"]});
export const childModules = Object.freeze({"hakseong":"./hakseong/hakseong.js","hwangseongni":"./hwangseongni/hwangseongni.js","mangcheon":"./mangcheon/mangcheon.js","mangsanmit":"./mangsanmit/mangsanmit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
