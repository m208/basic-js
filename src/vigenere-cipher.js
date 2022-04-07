const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(direct = true) {
    this.directType = direct;
  }

  encrypt(message, keyWord) {
    if (message && keyWord)
      return this.doCryptJob(message, keyWord, 'encrypt');
    throw new Error('Incorrect arguments!');
  }

  decrypt(message, keyWord) {
    if (message && keyWord)
      return this.doCryptJob(message, keyWord, 'decrypt');
    throw new Error('Incorrect arguments!');
  }

  doCryptJob(message, keyWord, job) {

    const keyPhrase = this.getPassPhrase(keyWord, message);
    let resultMessage = '';

    for (let i = 0; i < message.length; i++) {
      resultMessage += this.getCryptoChar(message[i], keyPhrase[i], job);
    }

    return (this.directType) ? resultMessage : resultMessage.split('').reverse().join('');
  }

  getCryptoChar(text, key, job) {

    const keyIndex = this.alphabet.indexOf(key.toUpperCase());
    const textIndex = this.alphabet.indexOf(text.toUpperCase());

    if (textIndex == -1) return text;

    let index;
    if (job === 'encrypt') index = keyIndex + textIndex;
    else if (job === 'decrypt') index = 26 - keyIndex + textIndex;

    if (index >= 26) index = index - 26;

    return this.alphabet[index];
  }

  getPassPhrase(keyWord, message) {

    let keyPhrase = keyWord;

    while (keyPhrase.length < message.length) {
      keyPhrase = keyPhrase.repeat(2);
    }
    keyPhrase = keyPhrase.split('');

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i].toUpperCase())) {
        keyPhrase.splice(i, 0, ' ');
      }
    }

    keyPhrase.length = message.length;

    return keyPhrase.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
