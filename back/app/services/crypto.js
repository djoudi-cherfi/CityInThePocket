const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const { ENCRYPTION_KEY } = process.env; // Must be 256 bits (32 characters)
const ivLength = 16; // For AES, this is always 16

const encrypt = (text) => {
  const iv = crypto.randomBytes(ivLength);

  const cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv);

  let encrypted = cipher.update(text);

  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

const decrypt = (text) => {
  const textParts = text.split(':');

  const iv = Buffer.from(textParts.shift(), 'hex');

  const encryptedText = Buffer.from(textParts.join(':'), 'hex');

  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY), iv);

  let decrypted = decipher.update(encryptedText);

  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};

module.exports = { decrypt, encrypt };
