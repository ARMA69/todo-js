

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.length === 0){
        alert('Please Enter a Task')
    }else{
        // add Task
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span class="taskname">
                ${document.querySelector('#newTask input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;  

        // remove Task
        const currentTaskDelite = document.querySelectorAll('.delete')
         for(let i=0; i<currentTaskDelite.length;i++){
            currentTaskDelite[i].onclick = function(){
                this.parentNode.remove();
                }
         }   

    



    }
}