const arr1 = [1,2,3,4];

// map 메소드를 for 배열문으로 만들기
// map이란 매개변수를 콜백 함수로 받으며, 새로운 배열로서 내보낸다.

const arr2 = arr1.map(x =>x * 3); // 3,6,9,12
const arr3 = arr1.map(x =>{x * 3}); // undefined *4
// 화살표 함수는 {} 한 문장일 때 중괄호 생략, 매개변수가 하나일 땐 생략해도 되고 안해도 된다.

const mapFunc = (Array, callback)=>{
  let newArr = [];
  if(typeof(Array)==="object"){
    // console.log('조건식 참')
    for(let i=0; i<Array.length; i++ ){
      newArr[i] = callback(Array[i]);
    }
  }
  console.log(newArr);
}

mapFunc(arr1, (x)=>x+4);
// mapFunc(arr1);



