const Register = require("../models/Register")
const Nexmo = require('nexmo');

class RegisterController{
async create(req, res){

    const nexmo = new Nexmo({
        apiKey: '3606f578',
        apiSecret: 'Dke74CBTevSuLjEG'
      });
      
      const from = '1399634822'; // Deve estar em formato 'Nexmo' (por exemplo, '1234567890')
      const to = '13996552469'; // Número para o qual você deseja enviar o SMS
      const mensagem = 'Mensagem de teste do Caique';
      
      nexmo.message.sendSms(from, to, mensagem, (err, responseData) => {
        if (err) {
          console.error('Erro ao enviar SMS:', err);
        } else {
          console.log('SMS enviado com sucesso:', responseData);
        }
      });

      res.status(200)


}
}

module.exports = new RegisterController()