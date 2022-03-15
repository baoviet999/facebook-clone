export function Upper(label: string) {
    const firstLetter = label[0].toUpperCase();
    const restLetter = label.slice(1)
    return `${firstLetter}${restLetter}`
}