let InputBx = document.querySelector('#InputBx');
let list = document.querySelector('#list');

InputBx.addEventListener('keyup', function (event) {
   if (event.key == "Enter") {
      addItem(this.value)
      this.value = ""
   }
})
let addItem = (InputBx) => {
   let listItem = document.createElement("li");
   listItem.innerHTML = `${InputBx}<i><i>`;

      listItem.addEventListener("click", function () {
         this.classList.toggle('done');
   })

   listItem.querySelector("i").addEventListener("click", function(){
         listItem.remove()
      })

      list.appendChild(listItem);
}



