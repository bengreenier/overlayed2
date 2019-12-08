/**
 * Checks (using shallow-equals, e.g. ===) if each property on source
 * exists in other, and has the same value
 * @param source source object
 * @param other other object
 * @param checkOwnProperty determines if we should enforce other property ownership
 */
export function sourcePropertiesEqual(
  source: any,
  other: any,
  checkOwnProperty: boolean = true
) {
  const keys = Object.keys(source)
  return keys.every(key => {
    let doCompare = true
    if (checkOwnProperty) {
      doCompare = Object.prototype.hasOwnProperty.call(other, key)
    }

    if (doCompare) {
      return source[key] === other[key]
    } else {
      return false
    }
  })
}
