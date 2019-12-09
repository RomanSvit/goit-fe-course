export function task5() {
  class Car {
    //  * Добавь статический метод `getSpecs(car)`,
    //  * который принимает объект-машину как параметр и выводит
    //  * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
    static getSpecs(car) {
      console.log(`maxSpeed: ${car.maxSpeed} , speed: ${car.speed} , isOn: ${car.isOn} ,distance: ${car.distance}, price: ${car.price}`);
    }
    //   Конструктор получает объект настроек.
    //  *
    //  * Добавь свойства будущеего экземпляра класса:
    //  *  speed - текущая скорость, изначально 0
    //  *  price - цена автомобиля
    //  *  maxSpeed - максимальная скорость
    //  *  isOn - заведен ли автомобиль, значения true или false. Изначально false
    //  *  distance - общий киллометраж, изначально 0
    //  */
    constructor(car) {
      this.speed = car.speed || 0;
      this.price = car.price || 0;
      this.maxSpeed = car.maxSpeed || 0;
      this.isOn = car.isOn || false;
      this.distance = car.distance || 0;
    }
    //   * Добавь геттер и сеттер для свойства price,
    //  * который будет работать с свойством цены автомобиля.
    // * Добавь код для того чтобы завести автомобиль
    // * Записывает в свойство isOn значение tru

    get price() {
      return this._price;
    }
    set price(price) {
      this._price = price;
    }
    turnOn() {
      this.isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
      this.isOn = false;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
      this.speed = this.speed + value < this.maxSpeed ? this.speed + value : false;
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
      this.speed = this.speed - value ? this.speed - value > 0 : false;
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
      this.distance = this.isOn === true ? hours * this.speed : false;
    }
  }
  const mustang = new Car({ maxSpeed: 200, price: 2000 });

  mustang.turnOn();
  mustang.accelerate(80);
  mustang.drive(2);
  console.log(mustang);
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();


  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000
}