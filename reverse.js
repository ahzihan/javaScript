function reverseString(text){
    let reverse='';
    for(let value of text){
        reverse=value+reverse;
    }
    return reverse;
}
const message='Hello, how are you?';
const result=reverseString(message);
console.log(result);