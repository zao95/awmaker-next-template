export function getComplementaryColor(hex) {
    // hex 코드에서 '#'을 제거
    if (hex.charAt(0) === '#') {
        hex = hex.slice(1)
    }

    // hex 코드를 숫자로 변환
    const num = parseInt(hex, 16)

    // 보색을 구하기 위해 비트 연산 수행
    const compNum = 0xffffff ^ num

    // 보색을 다시 hex 코드로 변환
    let compHex = compNum.toString(16)

    // 필요한 경우 앞에 0을 추가
    while (compHex.length < 6) {
        compHex = '0' + compHex
    }

    return '#' + compHex
}
