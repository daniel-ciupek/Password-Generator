class PasswordGenerator {
  constructor() {
    this.resultPassword = document.querySelector("#result");

    this.clipboardButton = document.querySelector("#clipboard");

    this.length = document.querySelector("#length");

    this.uppercaseCheckbox = document.querySelector("#uppercase");

    this.lowercaseCheckbox = document.querySelector("#lowercase");

    this.numbersCheckbox= document.querySelector("#numbers");

    this.symbolsCheckbox = document.querySelector("#symbols");

    this.generateButton = document.querySelector("#generate-password");

    this.init();
  }

  init() {
    document.querySelectorAll(".options input [type='checkbox']");
  }

}
const passwordGenerator = new PasswordGenerator();
