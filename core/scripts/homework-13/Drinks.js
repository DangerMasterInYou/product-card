export class Drink {
  #temperature;
  static _preparedTemp = 78;
  constructor(name, size, price, temperature = 0) {
    if (new.target === Drink) {
      throw new Error("Абстрактный класс Drink!");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getDrinkInfo() {
    return {
      name: this.name,
      size: this.size,
      price: this.price,
      temperature: this.getTemperature(),
    };
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(num) {
    this.#temperature = num;
  }

  #prepare() {
    this.setTemperature(this.constructor._preparedTemp);
  }

  give() {
    this.#prepare();
    console.log(`Подать ${this.constructor.name}`);
  }
}

export class Coffee extends Drink {
  constructor(name, size, price, typeGrain = "Arabica") {
    super(name, size, price);
    this.typeGrain = typeGrain;
  }

  getCoffeeInfo() {
    return {
      ...super.getDrinkInfo(),
      typeGrain: this.typeGrain,
    };
  }
}

export class Tea extends Drink {
  static _preparedTemp = 100;
  constructor(name, size, price, typeHerb) {
    super(name, size, price);
    this.typeHerb = typeHerb;
  }

  getTeaInfo() {
    return {
      ...super.getDrinkInfo(),
      typeHerb: this.typeHerb,
    };
  }
}

export class NoTea extends Drink {
  static _preparedTemp = 96;
  constructor(name, size, price, typeBerry) {
    super(name, size, price);
    this.typeBerry = typeBerry;
  }

  getNoTeaInfo() {
    return {
      ...super.getDrinkInfo(),
      typeBerry: this.typeBerry,
    };
  }
}
