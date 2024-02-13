// object
let person={
    name:'ravi',
    age:27
};
person.name='mani';
person['age']=30;
console.log(person.name,person['age']);
//array
let fruits=['apple','mango'];
fruits[3]=3;
console.log(fruits);
console.log(fruits[2]);
//function
function greet(name){
    console.log(name);

}
greet('ravi');
function fact(n){
    if(n<=1){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
console.log(fact(7));
//ternary operator
let a=1;
let b=8;
console.log(a>b?a+ ' is grater':b+' is greater');
let marks=80;
console.log(marks>35?'pass':'fail');
//logical operator
let goodcreditscore=true;
let highincome=false;
let loanapproved=goodcreditscore && highincome;
console.log('loan approved '+loanapproved);
let loanrejected=!loanapproved;
console.log('loan rejeceted'+loanrejected);
//swapping variable
let x=5;
let y=7;
x=x+y;
y=x-y;
x=x-y;
console.log(x,y);
//displaying mesage using if and else
let time=12;
if(6<=time && time<12){
    console.log('good mrng');
}
else if(12<=time && time<=18){
    console.log('good afternoon');
}
else{
    console.log('good evening');

}
//maxof two numbers using function
function max(x,y){
    //if(x>y) return x;
    //else return y;
    return x>y?x:y;

}
console.log(max(9,8));
//fizzbuzz
function fizzbuzz(n){
    if (typeof(n)!=='number') return 'not a number';
    else if ((n%3===0) && (n%5===0)) return 'fizzbuzz';
    else if(n%3===0) return 'fizz';
    else if (n%5===0) return 'buzz';
    else return 'not divisible by 3 or 5';

}
console.log(fizzbuzz('abc'));
// speed limit
function checkspeed(speed){
    if (typeof(speed)!=='number') return 'please enter a number';
    const kmperhour=3;
    const speedlimit=68;
    const speedlimitperhourchange=Math.floor(speedlimit/kmperhour);
    let num=Math.floor(speed/kmperhour);
    let points=num-speedlimitperhourchange;
    if (points<1) return 'ok';
    else if(points>=12) return 'license suspended';
    else  return 'points : '+points;
}
console.log(checkspeed(120));
//even or odd
function evenodd(numberlimit){
    for(let i=0;i<=numberlimit;i++){
        const message= (i%2===0)? "Even":"odd";
        console.log( i,message);
    }
        

}
evenodd(10);
//truthy
const array=[null,NaN,1,2,3];

function counttruthy(array){
    let count=0;
    for (item of array){
        if(item)
            count++;

        }return count;
    }
console.log(counttruthy(array));    
// objects
let address={
    street:'chaseoaks',
    city:'plano',
    zipcode:75025
};
function showAddress(){
    for (let key in address)
    console.log(key,address[key])

}
showAddress(address);
//factory function
function adres(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    };

}
console.log(adres('chaseoaks','plano',75025));
//constructor function
function CreateAddress(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;

}
console.log(new CreateAddress('abc','def',89));
//object creation
let blogpost={
    title : 'a',
    body : 'b',
    author : 'ravi',
    views : 20,
    comments:{
        author:'cauthor',
        body:'cbody'
    },
    isLive:true
    
};
console.log(blogpost);
//cnstructor blogpost
function BlogPost(title,body,author){
    this.title=title;
    this.body=body;
    this.author=author;
    this.veiws=0;
    this.comments={
    };
    this.isLive=false
}
console.log(new BlogPost('a','b','c'));
// price range objects
let pricearray=[
    {label:'$',tip:'low',minperperson:0,maxperperson:10},
    {label:'$$',tip:'medium',minperperson:11,maxperperson:20},
    {label:'$$$',tip:'high',minperperson:21,maxperperson:50}
]
for(let value of pricearray){
    for(let key in value){
        console.log(key,value[key]);
    }
}
//arrays add
const arrayexample=[3,4,1];
arrayexample.push(5,6); //ending
arrayexample.splice(1,2,2,1); //middle
arrayexample.unshift(1); //beginning
console.log(arrayexample);
console.log(arrayexample.includes(3));
console.log(arrayexample.indexOf(1,1));
console.log(arrayexample.lastIndexOf(1));
//
const courses=[
    {id:1,name:'a'},
    {id:2,name:'b'}
]
console.log(courses.find(function (course) {return course.name==='a';}));
console.log(courses.find(course => course.name==='a')); //arrow fuction
console.log(courses.findIndex(function (course) {return course.name==='a';}));
// arrow function
// function add(a,b){
//    return a+b;
// }
// console.log(add(1,2));
let add = (a,b) => a+b;
console.log(add(1,2));
//arrays delete
console.log(arrayexample);
console.log(arrayexample.pop());
console.log(arrayexample);
console.log(arrayexample.shift());
console.log(arrayexample);
console.log(arrayexample.splice(1,2,4,8));
console.log(arrayexample);
//console.log(arrayexample.length=0);
//arrayexample.length=0;
//console.log(arrayexample);
const aone=[1,2,3];
const atwo=[4,5,6];
const com=aone.concat(atwo);
const combined=[...aone,'a',...atwo];    //spread operator
console.log(com);
console.log(combined);
slicing=com.slice(3,5);
console.log(slicing)
//for(let number of combined){
    //console.log(number);
//}
combined.forEach((number,index) => console.log(index,number));
console.log(combined.join(','));
const message=('this is javascipt');
console.log(message);
const mess=message.split(' ');
console.log(mess);
console.log(mess.join('-'));
console.log(arrayexample.sort());
console.log(arrayexample.reverse());
const even=[2,4,6,9];
const issomeeven=even.some(function(value){
    return (value%2===0);
});
const everyvalueeven=even.every(value => value%2===0);
const filtered=even.filter(value => value%2===0);
console.log(everyvalueeven);
console.log(issomeeven);
console.log(filtered);
const itms=filtered.map(value => '<li>'+value+'</li>');
console.log(itms.join());
const itmes=filtered.map(value => ({val:value}));
console.log(itms);
console.log(itmes);
const chaining=even.filter(value => value%2===0).map(value => ({val:value}));
console.log(chaining);  // chaining is using filter() and map() methods by .
const sum=even.reduce((prvalue,crvalue) => prvalue+crvalue);
console.log(sum);
//array example

function arrayrange(min,max){
    const arraysample=[];
    for(let k = min; k <=max; k++)
        arraysample.push(k);
        
    return arraysample;
}
console.log(arrayrange(8,20));
// includes example
function includes(array,searchElement){
    if(!Array.isArray(array)){
        throw new Error('enter an array');
    }
    for (let element of array)
        if(element === searchElement)
            return true;
    return false;
}
try{
    const numbers=[1,2,3,4,5];
    console.log(includes(3));
}
catch(e){
    console.log(e.message);
}

//exluded
const numbernew=[1,2,3,1,4,5,1,1,7,6,8];
const exc=[1,2,3,4,5];
function excluded(array,exclude){
    const excludedarray=[];
    for(let z of array){
        if(!exclude.includes(z))
            excludedarray.push(z);   
    }return excludedarray;

}
console.log(excluded(numbernew,exc));
//move
const movarray=[1,2,3,4];
function move(array,index,offset){

}
console.log(move(movarray,2,1));
//count
function countocc(array,searche){
    let count=0;
   // for(let i of array)
   //     if(i === searche)
   //         count++;
   // return count;
   return array.reduce((a,c) => { 
    if(c === searche)
        a++;
    return a;},0);
}
console.log(countocc(numbernew,1));
//max
function getmax(array){
//    let maxel=array[0];
//    for(let ele of array)
//        if(ele > maxel)
//            maxel=ele;
//    return maxel;
    return array.reduce((a,c) => (a > c)? a:c);
}
console.log(getmax(numbernew));
// movies example
const movies=[
    {title:'a',year:2018,rating:4.5},
    {title:'b',year:2018,rating:4.7},
    {title:'c',year:2017,rating:3},
    {title:'d',year:2018,rating:4.9}
];
console.log(movies.filter(m => m.year===2018 && m.rating>4).
sort((a,b) => a.rating-b.rating).
reverse().
map(m => m.title));
//functions
function fsum(...items){  //rest operator
    return items.reduce((a,b) => a+b);

}
console.log(fsum(1,2,3,4));
// area of circle
const circle={
    radius : 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    },
    get peri(){
        return Math.PI * this.radius *2;
    }

};
console.log(circle.peri);
// error handling
function countoccc(array,searche){
    if(!Array.isArray(array)){
        throw new Error ('not an array.');
    }
    return array.reduce((a,c) => { 
    if(c === searche)
        a++;
    return a;},0);
}
try{
    const numbersnew=[1,2,3,1,3,1];
    console.log(countoccc(numbersnew,1));
}
catch(e){
    console.log(e.message);
}





