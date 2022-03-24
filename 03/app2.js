// console.log('03')

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// // 참조 reference
// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b); 

// function byValue(count) {
//     count = count + 2;
//   }
//   var count = 3;
//   byValue(count);
//   console.log(count); //3

//   function byReference(count) {
//     count.push('2');
//   }
//   var count = ['1'];
//   byReference(count);
//   console.log(count); // ["1","2"]

//   var isMan = true;
//   var gender = '';
//   if(isMan){
//       console.log('남자'); 
//   } else{
//       console.log('여자');
//   }

//   var gender = isMan ? '남자' : '여자';

//   function log(str){
//       console.log(str);
//   }

//   var result = log('hello');

//   console.log(result);

//   var isDelete = confirm('삭제하시겠습니까?');
//   if (isDelete){
//   }
//   if (confirm('삭제하시겠습니까?')){
//   }

//   function test() {
//     console.log('test()');
//   }
//   var id = setTimeout(test, 1000);

//   function a(){
//       console.log('a');
//       function b(){}
//   }

//   (function(){
//       var a = 1;
//       console.log(a);
//   })();

// function sum(x, y) {
//     if (!y) y = 1;
//     console.log(x + y);
//   }
//   sum(3);

//  fuction 

var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

(function(){
    var todos = 1;
    console.log(todos);
})();
