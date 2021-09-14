// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  if(num1>num2)
  {
    return num1;
  }
  else
  {
   return num2;
  }
}

// Progression #2: The lengthy word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words)
{
  if(words.length==0){
    return null;
  }
  else if(words.length==1)
  {
    return words[0];
  }
  else if(words.length==2)
  {
    if(words[0].length==words[1].length || words[0].length>words[1].length)
      return words[0];
    else if(words[0].length<words[1].length)
      return words[1];
  }
  else if(words.length>2)
  {
    for(let i=0;i<words.length;i++)
    {
      if(words[0].length<words[i].length)
        words[0]=words[i];
    }
    return words[0];
  }
}
  // Progression #3: Net Price
// const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// function netPrice(numbers)
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers)
{
  let sum=0;
  if(numbers.length == 0)
    return 0;
  else if(numbers.length >= 1)
  {
    for(let i=0;i<numbers.length;i++)
    {
      if(numbers[i]==0)
        sum=0;
      else
        sum=sum+numbers[i];
    }
    return sum;
  }
}
//Progression #3.1 (Bonus): A generic sum() function
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr)
{
  let sum=0;
  let count=0;
  if(mixedArr.length==0)
    return 0;

  else
  {
    for(let i=0;i<mixedArr.length;i++)
    {
        if(typeof(mixedArr[i])=="string")
        {
          sum=sum+mixedArr[i].length;
        }
        else if(typeof(mixedArr[i])=="boolean")
        {
          if(mixedArr[i]==true)
            sum=sum+1;
          else if(mixedArr[i]==false)
            sum=sum+0;
        }
        else if(mixedArr[i]>0)
        {
          sum=sum+mixedArr[i];
        }
        else if(mixedArr[i]==0)
        {
          count++;
          if(count==mixedArr.length)
            sum=0;
        }
        else throw Error("Unsupported data type sir or ma'am");
    }
    return sum;
  }
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg)
{
  var sum=0;
  var average;
  if(numbersAvg.length==0)
    return null;
  else if(numbersAvg.length>0)
  {
    for(let i=0;i<numbersAvg.length;i++)
    {
      sum=sum+numbersAvg[i];
    }
    average = sum/numbersAvg.length;
    return average;
  }
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr)
{
  let wordsLength=0;
  if(wordsArr.length==0)
    return null;
  else
  {
    for(let i=0;i<wordsArr.length;i++)
    {
      wordsLength=wordsLength+wordsArr[i].length;
    }
    return wordsLength/wordsArr.length;
  }
}


// Progression 4.3: Average of Mixed Array

const arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(arr)
{
  let sum=0;
  if(arr.length==0)
    return null;

  else
  {
    for(let i=0;i<arr.length;i++)
    {
        if(typeof(arr[i])=="string")
        {
          sum=sum+arr[i].length;
        }
        else if(typeof(arr[i])=="boolean")
        {
          if(arr[i]==true)
            sum=sum+1;
          else if(arr[i]==false)
            sum=sum+0;
        }
        else if(arr[i]>0)
        {
          sum=sum+arr[i];
        }
    }
    return parseFloat((sum/arr.length).toFixed(2));
  }
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix)
{
  let sum=0;
  for(let i=0;i<matrix.length;i++)
  {
    for(let j=0;j<matrix[i].length;j++)
    {
      let newMatrix=matrix[i];
      sum = sum+newMatrix[j];
    }
  }
  let lengthMatrix=matrix.length*matrix.length;
  if(sum==lengthMatrix)
    return 1;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique)
{
  let arrayUnique = [];
  if(wordsUnique.length==0)
    return null;
  else
  {   
    for(let i = 0; i < wordsUnique.length; i++) 
    {
      if(!arrayUnique.includes(wordsUnique[i]))
          arrayUnique.push(wordsUnique[i]);
    }
    return arrayUnique;
  }
}


// Progression #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind, findWord)
{
  let flag=0;
  if(wordsFind.length==0)
    return null;
  else
  {
    for(let i=0;i<wordsFind.length;i++)
    {
      if(wordsFind[i]==findWord)
        flag=1;
    }
    if(flag==1)
      return true;
    else
      return false;
  }
}


// Progression #7: Count repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsCount, countWord)
{
  let count=0;
  for(let i=0;i<wordsCount.length;i++)
  {
    if(countWord==wordsCount[i])
      count++;
  }
  return count;
}



    