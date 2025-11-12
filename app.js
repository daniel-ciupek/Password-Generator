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

      this.generateButton.addEventListener("click", this.generatePassword);

      this.updateOptions();
  }

  updateOptions = () => {
    const optionMethods = [];
    if(this.uppercaseCheckbox.checked)
         optionMethods.push(this.getRandomUppercase);

    if(this.lowercaseCheckbox.checked)
        optionMethods.push(this.getRandomLowercase);

    if(this.numbersCheckbox.checked)
        optionMethods.push(this.getRandomNumber);

    if(this.symbolsCheckbox.checked)
        optionMethods.push(this.getRandomSymbol);

    this.optionMethods = optionMethods;

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
  generatePassword = () => {
    
  }
}
const passwordGenerator = new PasswordGenerator();
