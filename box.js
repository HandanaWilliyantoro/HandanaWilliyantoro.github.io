const addButton = document.querySelector('.tambah');
var input = document.querySelector('.input');
const container = document.querySelector('.tasks');

class item{
    constructor(temp){
        this.createDiv(temp)
    }

    createDiv(temp){

        // Input tasks

        let input = document.createElement('input');
        input.value = temp;
        input.classList.add('isi');

        // Section

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        // Tombol remove

        let remove = document.createElement("button");
        remove.innerHTML = "x"
        remove.classList.add('remove');

        // Tombol checkbox

        let finish = document.createElement("input");
        finish.classList.add('finish');
        finish.type = 'checkbox'

        // Struktur section

        container.appendChild(itemBox);
        itemBox.appendChild(finish)
        itemBox.appendChild(input);
        itemBox.appendChild(remove);

        // Tombol remove: Ketika diclick

        remove.addEventListener( 'click', () => this.remove(itemBox))
    }

    remove(item){
        container.removeChild(item)
    }

}

function check(){
    if(input.value != ""){
        new item(input.value)
        input.value = ""
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (a) => {
    if(a.which === 13){
        check();
    }
} 
)
