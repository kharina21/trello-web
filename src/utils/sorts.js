// Sort columns
//copy mảng gốc sang một mảng khác, sau đó sắp xếp mảng đã copy dựa vào một mảng cho trước.
//ví dụ: 
//mảng gốc: 1,2,3,4,5
// sau đó copy mảng này sang một mảng mới để tránh làm thay đổi mảng gốc (ví dụ như ở trong database sẽ không bị thay đổi.)
//mảng ordered: 2,3,1,5,4
//sử dụng thuật toán bến dưới => mảng copy sẽ được sắp xếp lại các phần tử dựa vào mảng ordered
export function sortByOrderedArr(originalArr, orderedArr, key) {
    if (!originalArr || !orderedArr || !key) return []
    return [...originalArr].sort((a, b) => orderedArr.indexOf(a[key]) - orderedArr.indexOf(b[key]))
}