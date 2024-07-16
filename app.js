const addbtn = document.querySelector("#addBtn")
const main = document.querySelector('#main')


const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea")


    const data = []






    notes.forEach((r) => {


        data.push(r.value)


    })

    if (data.length === 0) {
        localStorage.removeItem('vaibhavnotes')
    } else {

        localStorage.setItem("vaibhavnotes", JSON.stringify(data))
    }
}





addbtn.addEventListener(
    "click", () => {
        addNote()
    }
)

const addNote = (text = "") => {
    const jai = document.createElement('div')
    jai.classList.add('note')
    jai.innerHTML = `<div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`

    jai.querySelector('.trash').addEventListener('click', () => {
        jai.remove()
        saveNotes()
    })

    jai.querySelector('.save').addEventListener("click", () => {
        saveNotes()
    })
    jai.querySelector('textarea').addEventListener("focusout", () => {
        saveNotes()
    })
    main.appendChild(jai)
}


(function () {
    const lsno = JSON.parse(localStorage.getItem('vaibhavnotes'))

    if (lsno === null) {
        addNote()
    } else {
        lsno.forEach((lsno) => {
            addNote(lsno)

        })
    }



}
)()
