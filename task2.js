function deepEquals(array1, array2) {
  for (var arrays = [], objects = {}, element = 0; element < array1.length; element++) objects[array1[element]]? objects[array1[element]]++:objects[array1[element]]=1 ;
3
    for (element = 0; element < array2.length; element++) objects[array2[element]] && arrays.push(array2[element]) && objects[array2[element]]--;
4
    return arrays.length == array1.length && array2.length == array1.length

}