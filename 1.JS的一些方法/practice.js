//======================================================================================
/**
 * 问题：判断回文串
 * @param str : 输入的字符串
 * @return true/false
 */

function checkPalindrom(str) {
     return str === str.split('').reverse().join('');
}

checkPalindrom('aabbccddccbbaa'); //true

//======================================================================================
/**
 * 问题：去除整数数组中重复的值
 * @param arr：要去重的数组
 * @return：去重后的数组
 */

function unique(arr) {
     var hashTable = {};
     var data = [];
     for(var i = 0, len = arr.length; i < len; i++){
          if(!hashTable[arr[i]]){
               hashTable[arr[i]] = true;
               data.push(arr[i]); 
          }
     }
     return data;
}

unique([7,1,2,3,5,3,4,5,6,2,3,1]); //[7,1,2,3,5,4,6]

//======================================================================================
/**
 * 问题：统计一个字符串出现最多的字母
 * @param str：输入一个字符串
 * @return ：出现最多次的字母
 */
function findMaxDuplicateChar(str) {
     if(str.length === 1){
          return str;
     }
     var charObj = {};
     for(var i = 0, len = str.length; i < len; i++){
          if(!charObj[str.charAt(i)]){
               charObj[str.charAt(i)] = 1;
          } else {
               charObj[str.charAt(i)]++;
          }
     }
     var maxChar = '',
        maxValue = 1;
        for(var k in charObj){
             if(charObj[k] > maxValue){
                  maxValue = charObj[k];
                  maxChar = k;
             }
        }
     return "出现最多次的字符：" + maxChar + "，出现了：" + maxValue + "次";
}

findMaxDuplicateChar('fasdfhjkasdhfiulwerasdfadaaaa');//出现最多次的字符：a，出现了：8次

//正则的做法
function findMaxDuplicateChar1(str) {
     var arr = str.split("");
     arr.sort(); //让相同的字符挨在一起
     str = arr.join("");
     var regExp = /(\w)\1+/g; //匹配相同的字符字串
     var maxChar = '',
         maxValue = 0;
     str.replace(regExp, function($0, $1){ 
       if(maxValue < $0.length){
         maxValue = $0.length;
         maxChar = $1;
       }
     })
     return "出现最多次的字符：" + maxChar + "，出现了：" + maxValue + "次";
   }
   
   findMaxDuplicateChar1('fasdfhjkasdhfiulwerasdfadaaaa');

//======================================================================================
/**
 * 问题：排序算法
 * @param arr：输入需要排序的数组
 * @return :排完序后的数组
 */

function bubbleSort(arr) {
  var temp;
  if(arr.length === 1){
       return arr[0];
  }
  for(var i = 0, len = arr.length; i < len; i++){
       for( var j = i; j < len; j++){
            if(arr[i] > arr[j]){
                 temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
            }
       }
  }
  return arr;
}

bubbleSort([5,2,3,6,4,9]); //[2,3,4,5,6,9]


function quickSort(arr) {
  if(arr.length <= 1){
       return arr;
  }
  let leftArr = [];
  let rightArr = [];
  let q = arr[0];
  for(let i = 1, len = arr.length; i < len; i++){
       if(arr[i] > q){
            rightArr.push(arr[i]);
       }else{
            leftArr.push(arr[i]);
       }
  } 
  return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}

quickSort([1,2423,45,2342,3,23456345,2342,34,345,34,5,234,23,4,345,234,654,6,537,38]);
//[1, 3, 4, 5, 6, 23, 34, 34, 38, 45, 234, 234, 345, 345, 537, 654, 2342, 2342, 2423, 23456345]

//======================================================================================
/**
 * 问题：斐波那契数列
 * @param n：需要计算的项数
 * @return 包含n项的斐波那契数列
 */

function getFibonacci(n) {
  var fibArr = [],
      i = 0;
      while(i < n) {
           if(i <= 1){
                fibArr.push(1);
           } else {
                fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
           }
           i++;
      }
 return fibArr;
}

getFibonacci(7);//[1, 1, 2, 3, 5, 8, 13]

//======================================================================================
/**
 * 问题：找出正数组的最大差值
 * @param arr：输入的数组
 * @return maxProfit：最大的差值
 */

function getMaxProfit(arr) {
  var minPrice = arr[0];
  var maxProfit = 0;
  for(var i = 0, len = arr.length; i < len; i++){
       var currentPrice = arr[i];
       minPrice = Math.min(minPrice, currentPrice);
       var potentialProfit = currentPrice - minPrice;
       maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
}

getMaxProfit([23,45,21,6,34,23,654]);//648


function myGetMaxProfit(arr) {
  var maxValue = arr[0],
      minValue = arr[0];
 for(var i = 0, len = arr.length; i < len; i ++){
      if(maxValue < arr[i]){
           maxValue = arr[i];
      }
      if(minValue > arr[i]){
           minValue = arr[i];
      }
 }
 return maxValue - minValue;
}

myGetMaxProfit([23,45,21,6,34,23,654]);//648

//======================================================================================
/**
 * 问题：随机生成指定长度的字符串
 * @param n:生成字符串的长度
 * @return ：生成的字符串
 */

function getRandomStr(n) {
  var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ9876543210';
  var randomStr = '';
  while(n > 0){
       randomStr += str.charAt(Math.floor(Math.random()*62));
       n--;
  }
  return randomStr;
}

//======================================================================================
/**
 * 问题：实现类似getElementsByClassName的功能
 * @param node：
 * @param name：查找的名字
 * @return： 所有class为name的节点
 */

function queryClassName(node, name) {
  var starts = '(^|[\n\r\t\f])',
       ends = '([\n\r\t\f]|$)';
  var array = [],
       regExp = new RegExp(starts + name + ends),
       elements = node.getElementsByTagName('*'),
       len = elements.length,
       i = 0,
       element;
  while(i < len){
       element = elements[i];
       if(regExp.test(element.ClassName)){
            array.push(element);
       }
       i++;
  }
  return array;
}

//======================================================================================
/**
 * 问题：将以“-”连接的字符串改成驼峰写法
 * @param str：输入需要转化的字符串
 * @return： 返回转化后的字符串
 */
var str = "my-name-is-chen-cong"

//字符串和数组结合的方法
function changeToCamel1(str) {
  var arr = str.split("-"); //[my,name,is,chen,cong]
  for(var i = 1; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  } //[my,Name,Is,Chen,Cong]
  return arr.join(""); //"myNameIsChenCong"
}
console.log(changeToCamel1(str));//"myNameIsChenCong"

//正则表达式的方法
function changeToCamel2(str) {
  var regExp = /-(\w)/g;
  return str.replace(regExp, function($0, $1){
    return $1.toUpperCase();
  });
}
console.log(changeToCamel2(str));

//======================================================================================
/**
 * 问题：给字符串添加千分位符
 */

function splitNum1(str) {
  var iNum = str.length % 3; //可能的结果0,1,2
  var prev = '';
  var arr = [];
  var temp = '';
  var iNow = 0;
  if(iNum != 0){
    prev = str.substring(0, iNum);
    arr.push(prev);
  }
  str = str.substring(iNum);
  for(var i  = 0; i < str.length; i++){
    iNow++;
    temp += str[i];
    if(iNow === 3){
      arr.push(temp);
      iNow = 0;
      temp = '';
    }
  }
  return arr.join(',');
}
splitNum1("18868876837"); //"18,868,876,837"

//正则的方法
/*
(?=):前向声明
(?!):反前向声明
*/
function splitNum2(str){
  var regExp = /(?=(?!\b)(\d{3})+$)/g;
  return str.replace(regExp, ",");
}
splitNum2("18868876837"); //"18,868,876,837"

//======================================================================================
/**
 * 问题：a,b两个变量，不用第三个变量来交换两个变量 
 */

//针对数字有效，还可以用异或处理整数
function exchange1(a, b){
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("a=" + a + ",b=" + b);
}
exchange1(5,6); //a=6,b=5

function exchange2(a, b){
  a = [a, b];
  b = a[0];
  a = a[1];
  console.log("a=" + a + ",b=" + b);
}
exchange2('abc','def'); //a=def,b=abc

//======================================================================================
/**
 * 问题：有一个数n，不用for循环，怎么返回[1，2，3...n]这样一个数组
 */

 //利用递归
 function show1(n) {
  var arr = [];
  return (function(){
    arr.unshift(n);
    n--;
    if(n != 0){
      arguments.callee();
    }
    return arr;
  })();
}

show1(10); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//利用replace
function show2(n) {
  var arr = [];
  arr.length = n + 1;
  var str = arr.join('a');
  var arr2 = [];
  str.replace(/a/g, function(){
    arr2.unshift(n--);
  })
  return arr2;
}

show2(10); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/******************************** method end *********************************/
/*################################## function and test end ###################################*/


/******************************* method begin ********************************/
/**
 * 问题：一个数n，当n小于100就返回n，否则返回100
 */

 function showN(n) {

  // if...else
  if(n < 100){
    return n;
  }else{
    return 100
  }



  // ? :
  return n > 100 ? 100 : n;



  //switch
  switch(n>100){
    case true : return 100; break;
    case false : return n;break;
  }



  //Math.min(n,100);
  return Math.min(n,100);



  //利用数组的sort
  var arr = [n, 100];
  arr.sort(function(n1, n2){
    return n1 - n2;
  });
  return arr[0];



  //用循环for,while,do while
  var m = "" + n;
  for(var i = 2; i < m.length && n > 0; i++){
    return 100;
  }
  return n;




  //利用for in
  var obj = {name:"cc"};
  var m = n < 100 || obj;
  for(var attr in m){
    return 100;
  }
  return n;



  // 利用&&和||
  var  m = n >= 100 && 100;
  return m = m||n;

 }