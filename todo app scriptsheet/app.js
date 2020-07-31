
let inputText = document.getElementById('txt')
let add = document.getElementById('add')
let itemHolder = document.querySelector('.list')
tab = []
let Alert = document.getElementById('p')


//addItem
add.addEventListener('click',addItems);
function addItems(){
    
    let input = inputText.value;
    document.getElementById('txt').value = " "
    //validation
    if(input==''){
        Alert.style.display = 'block';
    setInterval(function(){
        Alert.style.display = 'none';
       },2000)
     
    }else{
        createTodo(input).style.display= 'none'
    }
    
}

function createTodo(input){
    //create element
    let divtag = document.createElement('div');
    let spantag = document.createElement('span')
    let editbutton = document.createElement('button')
    let deletebutton = document.createElement('button')

// create className
editbutton.className = 'editbtn  mr-auto'
deletebutton.className = 'deletebtn mr-auto'
divtag.className = 'listItem'

    //create textnode 
deletenode=document.createTextNode('delete')
divnode= document.createTextNode(input)
editbuttonNode = document.createTextNode('edit')

//append items
divtag.append(divnode)
editbutton.append(editbuttonNode)
deletebutton.append(deletenode)
divtag.appendChild(editbutton)
divtag.appendChild(deletebutton)
// if(document.getElementById('txt').value==" "){
    // itemHolder.style.display="none"
// }else{
    itemHolder.appendChild(divtag)
// }

}

window.onclick = function(e){
if(e.target.classList.contains('deletebtn')){
    let parentItem =e.target.parentNode;
    parentItem.remove();
     }
 if(e.target.classList.contains('editbtn')){
        let itemList = document.querySelectorAll('.listItem')

        let eventvalue = e.target.parentNode.childNodes[0]

        for(let i = 0; i<itemList.length; i++){
           let itemValue = itemList[i].childNodes[0]
            if(eventvalue==itemValue){
                itemValue.textContent = prompt()
            //    cont.style.display ='block'


            }
        }
    }

}

//fiter through each element

let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterItem)

function filterItem(){
    let filtervalue = document.getElementById('filterInput').value;
    let item = document.querySelectorAll('.listItem')

    for(let i = 0; i < item.length; i++){
        let Value = item[i].childNodes[0].textContent
        if(Value.indexOf( filtervalue ) > -1){
item[i].style.display = ''
        }else{
            item[i].style.display = 'none'
        }
    } 
}