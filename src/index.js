document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');
  let tasks = document.getElementById('tasks');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let input = document.getElementById('new-task-description').value;
    let entry = document.createElement('li');
    // let button = document.createElement("button");
    // button.innerHTML = '\u00D7';
    // button.className = 'close';
    entry.appendChild(document.createTextNode(input));
    // entry.appendChild(button);
    tasks.appendChild(entry);
    document.getElementById('new-task-description').value = "";
  })

  // let listItems = document.getElementsByTagName('li');
  // let i;
  // for (i = 0; i < listItems.length; i++) {
  //   let span = document.createElement('span');
  //   let x = document.createTextNode('\u00D7');
  //   span.className = 'close';
  //   span.appendChild(x);
  //   listItems[i].appendChild(span);
  // }


  let close = document.getElementsByClassName('close');

  close.addEventListener('x', function (e) {
    let div = this.parentElement;
    div.style.display = 'none';
  })
});