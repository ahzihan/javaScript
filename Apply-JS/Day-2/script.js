//Red Button
function makeRed(){
    document.body.style.backgroundColor='red';
}

//Yellow Button
        const yellowBtn=document.getElementById('yellow');
        yellowBtn.onclick=makeYellow;
        function makeYellow(){
            document.body.style.backgroundColor='yellow';
        }

//Blue Button
        const blueBtn=document.getElementById('blue');
        blueBtn.onclick=function(){
            document.body.style.backgroundColor='lightblue';
        } 
        
//Golden Button
        const goldenBtn=document.getElementById('golden');
        goldenBtn.addEventListener('click', makeGolden);
        function makeGolden(){
            document.body.style.backgroundColor='goldenrod';
        }

//Pink Button
        const pinkBtn=document.getElementById('hot-pink');
        pinkBtn.addEventListener('click', function(){
            document.body.style.backgroundColor='hotpink';
        } )
        
//Direct Function
        document.getElementById('tomato').addEventListener('click', function(){
            document.body.style.backgroundColor='tomato';
        })