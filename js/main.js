const elText = document.querySelector('.text');

let count = 0;

function increaseCount() {
    elText.innerHTML = count++;
}

function decreaseCount() {
    elText.innerHTML = count--;
}

const stopCount = () => {
    if (elText.textContent < 1) {
        return elText.textContent = 0;
    }
}

stopCount();