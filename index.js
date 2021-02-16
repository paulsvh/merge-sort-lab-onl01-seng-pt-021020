function findMinAndRemoveSorted(array){
///finds and removes the smallest element in a sorted array
    return array.shift()
}

function merge(array1, array2){
///combine two sorted arrays into one larger array
    let sorted = [];
    while(array1.length != 0 && array2.length != 0){
        if(array1[0] < array2[0]){
            sorted.push(findMinAndRemoveSorted(array1))
        } else {
            sorted.push(findMinAndRemoveSorted(array2))
        }
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
///use two previous functions to merge sort
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted; 

    if(array.length < 2){
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}