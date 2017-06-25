/**
 * Created by escaf on 21/06/2017.
 */
/**
 * Created by USRDEL on 19/6/17.
 */
var hola= hola
module.exports = {
    welcome: function (req, res) {
        sails.log.info(req.method);
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("Error");
        }
    },
    bienvenido: function (req, res) {
        //PUT
        return res.send("Hola");
    },

  ////req.host----The hostname of this request, without the port number, as specified by its "Host" header.
  reqHost: function (req, res){
    sails.log.info(req.headers.host)
  },

  reqParam:function(req, res) {

  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');
  req.param('sku');

  res.send(user_id + ' ' + token + ' ' + geo);
},
  //req.get() Returns the specified HTTP request header field (case-insensitive match). The Referrer and Referer fields are interchangeable.
  reqGet:function(req, res) {
    sails.log.info(req.get('Something'))
  },
  //req.accepts () Comprueba si la lista indicada de esta solicitud de "aceptado" tipos de medios incluye el especificado type. Devuelve verdadero o falso.
  reqAccepts: function(req, res) {
    sails.log.info(req.accepts('application/json'))
    sails.log.info(req.accepts('json'))
  },
  //req.protocol The protocol used to send this request (req).
  reqProtocol:function(req, res) {
    sails.log.info(req.protocol)
  },
  //req.acceptedCharsetsThis property is an array that contains the acceptable charsets specified by the user agent in the request.

  acceptedCharsets: function (req, res) {
    sails.log.info(req.acceptedCharsets, ['utf-8', 'utf-7', 'iso-8859-1']);
    if (req.acceptedCharsets =='utf-8' ){
      return res.send("Hola");
    }
    else {
      return res.send("Error");
    }
    if (req.acceptedCharsets =='utf-7' ){
      return res.send("utf-7");
    }
  },
 // req.acceptedLanguages Una matriz que contiene los idiomas de respuesta "aceptables" especificados por el agente de usuario en el " Accept-Language cabecera" de esta solicitud ( req).

  acceptedLanguages:function (req, res) {
    sails.log.info(req.acceptedLanguages)
    return res.send('es-ES es');
  },

  allParamm: function (req, res) {

    sails.log.info(req.all)

  },

};


