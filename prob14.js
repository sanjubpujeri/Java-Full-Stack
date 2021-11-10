//Program to print fiboancci serie up to a given number//
const number=17;
let n1=0, n2=1, nextTerm;
console.log('fibonacci series :');
for(i=1; i<=number;  i++){
    console.log(n1);
    nextTerm= n1+n2;
    n1=n2;
    n2=nextTerm;
}
