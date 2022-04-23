const arr = [100, "22", 44] as const
// arr = [200]
// arr[0] = 1000

function add(arr: readonly any[]) {
    arr[0] = 100
}
add(arr)


console.log(arr);
export { }