function wallpaper(l, w, h) {
    //вычисляем площадь комнаты для покрытия обоями
    let S = h * l * 2 + h * w * 2
    //вычисляем площадь одного руллона обоев
    let widthRoll = 0.53
    let lenthRoll = 10
    let sRoll = widthRoll * lenthRoll
    //делим площадь комнаты на площадь обоев
    let ilRoll = Math.ceil((S / sRoll) * 1.15)
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
    let res = numbers[ilRoll]
    if (l === 0 || w === 0 || h === 0) {
        return numbers[0]
    } else if (ilRoll > 20) {
        return ilRoll
    } else {
        return res
    }
}
console.log(wallpaper(6, 8, 5))