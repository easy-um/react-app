export const validateString = (value, rules) => {
    let result = true

    if (!rules.isValidate) return true

    if (result && rules.min) {
        result = value.length >= rules.min
    }

    return result

}