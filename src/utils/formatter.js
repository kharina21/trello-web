export function UpperCaseFirstLetter(string) {
    if (String === '') return ''
    else return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}