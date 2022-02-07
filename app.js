var list = document.getElementById("list");
function addtodo(){
    var todoitem = document.getElementById("todoitem");
    var li = document.createElement("li");
    li.setAttribute("class" , "lists")
    var litext = document.createTextNode(todoitem.value);
    list.appendChild(li);
  todoitem.value = "";

  var delbtn = document.createElement("button");
  delbtn.setAttribute("onclick" , "delbt(this)"); delbtn.setAttribute("class" , "delete");
     var deltext = document.createTextNode("delete")
    delbtn.appendChild(deltext);
    li.appendChild(litext);
    li.appendChild(delbtn);

  var editbtn = document.createElement("button");
  var edittext = document.createTextNode("Edit");
  editbtn.appendChild(edittext);
  editbtn.setAttribute("onclick" , "editbt(this)");
  editbtn.setAttribute("class" , "edit")
  li.appendChild(editbtn);


}
function delbt(e){
    e.parentNode.remove();
}
  function deleteall(){
     list.innerHTML = "";
  }
  function editbt(e){
      var editext = prompt("Enter Edit text" , e.parentNode.firstChild.nodeValue,)
      e.parentNode.firstChild.nodeValue = editext;

  }