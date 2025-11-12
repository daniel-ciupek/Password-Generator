class PasswordGenerator {
  constructor() {
    this.resultPassword = document.querySelector("#result");

    this.clipboardButton = document.querySelector("#clipboard");

    this.length = document.querySelector("#length");

    this.uppercaseCheckbox = document.querySelector("#uppercase");

    this.lowercaseCheckbox = document.querySelector("#lowercase");

    this.numbersCheckbox = document.querySelector("#numbers");

    this.symbolsCheckbox = document.querySelector("#symbols");

    this.generateButton = document.querySelector("#generate-password");

    this.init();
  }

  init() {
    document
      .querySelectorAll(".options input [type='checkbox']")
      .forEach((cb) => cb.addEventListener("click", this.updateOptions));
  }

  updateOptions = () => {
    
  };

  getRandomUppercase() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  getRandomLowercase() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  getRandomSymbol() {
    const symbols = `!@#$%^&*()_+-=[]{}|;:'",.<>/?~|`;
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}
const passwordGenerator = new PasswordGenerator();
