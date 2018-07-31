
var myinput = document.querySelector('#textInput');
var btn = document.querySelector('.btn');
var list = document.querySelector('ul');
var count = 0;

btn.addEventListener('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    
    if(myinput.value) {
        let val = myinput.value;
        let li = document.createElement('li');
        let p = document.createElement('p');

        p.textContent = val;
        li.appendChild(p);


        let del = document.createElement('button');
        del.setAttribute("type","delete");
        del.innerText = "delete";
        
        li.appendChild(del);
        list.appendChild(li);

        //console.log(li);
        myinput.value = '';
        count +=1;
    } else {
        alert("Don't leave it empty");
    }
    
    
})

list.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(event.target.parentNode);
    list.removeChild(event.target.parentNode);

    myinput.focus();
    
    
})