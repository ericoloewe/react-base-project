/**
 * Object Util
 */
export class ObjectUtil {
  static getNullSafe(callback, args = null, defaultValue = null) {
      let obj = defaultValue;

      try {
          obj = callback.apply(this, args);
      } catch (error) {}

      return obj;
  }
}