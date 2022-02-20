document.write('I am From First JS File');

const blogs= document.getElementsByTagName('p');

for(const blog of blogs){
    // console.log(blog);
    blog.style.borderBlock = '3px solid tomato';
    blog.style.borderRadius='10px';
    blog.style.padding='10px';
}



const list=document.getElementById('blog-list');
const item= document.createElement('li');
item.innerText='Added New List By JS';
list.appendChild(item);

const title= document.getElementById('new');
title.innerText="Updated By Js";
