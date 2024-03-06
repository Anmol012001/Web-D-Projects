const displays = document.getElementById("display");
const userinput = document.getElementById('text');
const sub = document.getElementById('submit');


sub.addEventListener('click',function(e){
    if(userinput.value === '')
    {
        alert('Please fill the task you want to add');
    }
    else
    {
        const v = document.createElement("li");
        v.innerHTML = `${userinput.value}`;
        displays.appendChild(v);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        v.appendChild(span);
    }
    userinput.value="";
    savedata();
})

displays.addEventListener('click',function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
})

function savedata(){
    localStorage.setItem("data", displays.innerHTML);
}

function show(){
    displays.innerHTML = localStorage.getItem("data");
}
show();



