function abcOrder(str1, str2, charIndex = 0) {
  //returns true if str1 comes before str2 in abc order
  //returns false if str2 comes before str1 in abc order
  //if strings are identical, return true
  if (str1 === str2) {
    return true;
  }
  if (
    str1.toLowerCase().charCodeAt([charIndex]) <
    str2.toLowerCase().charCodeAt([charIndex])
  ) {
    return true;
  } else if (
    str1.toLowerCase().charCodeAt([charIndex]) >
    str2.toLowerCase().charCodeAt([charIndex])
  ) {
    return false;
  } else {
    return abcOrder(str1, str2, charIndex + 1);
  }
}

//do a slightly modified merge sort on the array
//to account for the difference in input type

function mSortStrings(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSortStrings(left);
  right = mSortStrings(right);
  return mergeStringArr(left, right, arr);
}

function mergeStringArr(left, right, arr) {
  let leftI = 0;
  let rightI = 0;
  let outputI = 0;
  while (leftI < left.length && rightI < right.length) {
    if (abcOrder(left[leftI], right[rightI])) {
      arr[outputI++] = left[leftI++];
    } else {
      arr[outputI++] = right[rightI++];
    }
  }
  for (let i = leftI; i < left.length; i++) {
    arr[outputI++] = left[i];
  }
  for (let i = rightI; i < right.length; i++) {
    arr[outputI++] = right[i];
  }
  return arr;
}

function main() {
  const DATA = [
    "A Tale of Two Cities",
    "Fellowship of the Ring",
    "The Two Towers",
    "Return of the King",
    "Game of Thrones",
    "Crown of Swords",
    "Clash of Kings",
    "Feast For Crows",
    "Storm of Swords",
    "A Dance With Dragons",
    "Artemis Fowl",
    "The Davinci Code",
    "Red Badge of Courage",
    "There is a monster at the end of this book",
    "Twilight",
    "Shadowmancer",
    "The Coulour of Magic",
    "Guards! Guards!",
    "Mort",
    "Reaper Man",
  ];
  mSortStrings(DATA);
  console.log(DATA);
}
main();
