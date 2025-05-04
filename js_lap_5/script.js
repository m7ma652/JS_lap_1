class Engine {
    static #count = 0;
    constructor(source) {
        if (new.target === Engine) {
            throw new Error("Cannot instantiate Engine directly");
        }
        this.source = source;
        Engine.#count++;
    }

    static getCount() {
        return Engine.#count;
    }
}

class Car extends Engine {
    #movingInterval = null;
    #speed = 5;
    constructor(top, left, source) {
        super(source);
        this.top = top;
        this.left = left;
        this.element = document.createElement('img');
        this.initElement();
    }
    initElement() {
        this.element.src = this.source;
        this.element.style.position = 'absolute';
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.width = '250px';
        document.body.appendChild(this.element);
    }
    set Top(value) {
        this.top = value;
        this.element.style.top = `${value}px`;
    }

    set Left(value) {
        this.left = value;
        this.element.style.left = `${value}px`;
    }

    get Top() {
        return this.top;
    }

    get Left() {
        return this.left;
    }

    moveLeft() {
        this.stopMoving();
        this.#movingInterval = setInterval(() => {
            this.Left = Math.max(0, this.Left - this.#speed);
        }, 16);
    }

    moveRight() {
        this.stopMoving();
        this.#movingInterval = setInterval(() => {
            this.Left = Math.min(
                window.innerWidth - this.element.offsetWidth,
                this.Left + this.#speed
            );
        }, 16);
    }

    stopMoving() {
        clearInterval(this.#movingInterval);
        this.#movingInterval = null;
    }

    changeStyle(styles) {
        Object.entries(styles).forEach(([property, value]) => {
            this.element.style[property] = value;
        });
    }

    moveCar(direction) {
        direction === 'left' ? this.moveLeft() : this.moveRight();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let myCar = new Car(100, 100, 'images/caar.jpeg');

    document.getElementById('left').addEventListener('click', () => myCar.moveCar('left'));
    document.getElementById('right').addEventListener('click', () => myCar.moveCar('right'));
    document.getElementById('stop').addEventListener('click', () => myCar.stopMoving());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') myCar.moveCar('left');
        if (e.key === 'ArrowRight') myCar.moveCar('right');
    });
    document.addEventListener('keyup', () => myCar.stopMoving());
});