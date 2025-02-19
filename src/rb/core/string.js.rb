import 'CryptoJS', 'crypto-js'

def decode_base64()
  CryptoJS.enc.Base64.parse(self).to_string(CryptoJS.enc.Utf8)
end
String.prototype.decode_base64 = decode_base64
