const characters = [];
const list = document.getElementById("list")
const search = document.querySelector("input")


fetch('https://www.swapi.co/api/people')
    .then(response => response.json())
    .then(response => characters.push(...response.results))

    function render() {
        const html = characters.map(val => `<li>${val.name}</li>`).join('')

        if (filtered.length) {
            render(filtered)
        }
    }
    
    function render(array) {
        const html = array.join('');
        list.innerHTML = html;
    }
    
    search.addEventListener('keyup', filterText)