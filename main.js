const btnClick = document.getElementById('btnClick');
const btnBuyClick = document.getElementById('btnBuyClick');
const scoreText = document.getElementById('scoreText');
const btnBuyClickText = document.getElementById('btnBuyClickText');

class Game {
    clickPoint = 1;
    score = 90;
    basePrice = 100;
    price = this.basePrice;

    isMouseUp = false;

    language = 'ru'; //todo: добавить локализацию re,en,tr

    buyClickPoint = () => {
        if (this.score >= this.price && this.isMouseUp) {
            this.isMouseUp = false;
            this.clickPoint++;
            this.score -= this.price;
            this.price = this.upToPrice();
            this.updateText();
        }
    }

    addPointToScore = () => {
        if (this.isMouseUp) {
            this.isMouseUp = false;
            Math.round(this.score += this.clickPoint);
            this.updateText();
        }
    }

    getPointScore = () => {
        return this.score;
    }

    getClickPoint = () => {
        return this.clickPoint;
    }

    updateText = () => {
        btnClick.innerText = "+" + Clicker.getClickPoint();
        scoreText.innerText = Clicker.getPointScore();
        btnBuyClickText.innerText = Clicker.price;
    }

    upToPrice = () => {
        return Math.round(this.basePrice * Math.pow(1.3, this.clickPoint));
    }
}

const Clicker = new Game();

window.addEventListener('load', () => {
    Clicker.updateText();
});

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key == 'Enter' && document.activeElement.id == 'btnClick') {
        Clicker.addPointToScore();
        console.log(document.activeElement.id);
    }
    else if (event.key == 'Enter' && document.activeElement.id == 'btnBuyClick') {
        Clicker.buyClickPoint();
    }
    else if (event.key === 'Tab') {
        event.preventDefault(); // Предотвращаем стандартное поведение браузера по умолчанию
        if (document.activeElement.id === 'btnClick') {
            document.getElementById('btnBuyClick').focus();
        } else if (document.activeElement.id === 'btnBuyClick') {
            document.getElementById('btnClick').focus();
        }
        else {
            document.getElementById('btnClick').focus();
        }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); // Предотвращаем стандартное поведение браузера по умолчанию
        if (document.activeElement.id === 'btnClick') {
            // Переключение фокуса между btnClick и btnBuyClick
            document.getElementById('btnBuyClick').focus();
        } else if (document.activeElement.id === 'btnBuyClick') {
            // Переключение фокуса между btnBuyClick и btnClick
            document.getElementById('btnClick').focus();
        }
        else {
            document.getElementById('btnClick').focus();
        }
    }
    else {
        document.getElementById('btnClick').focus();
    }
});

document.addEventListener('keyup', (event) => {
    console.log(event.key);
    if (event.key == 'Enter') {
        Clicker.isMouseUp = true;
    }
});

btnClick.addEventListener('mousedown', (event) => {
    Clicker.addPointToScore();
});

btnBuyClick.addEventListener('mousedown', (event) => {
    Clicker.buyClickPoint();
});

btnClick.addEventListener('mousedown', (event) => {
    Clicker.isMouseUp = true;
});

btnBuyClick.addEventListener('mousedown', (event) => {
    Clicker.isMouseUp = true;
});

