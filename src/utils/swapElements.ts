export function swapElements(index1: number, index2: number, array: any[]) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
