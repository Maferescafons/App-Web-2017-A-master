/**
 * Created by escaf on 21/06/2017.
 */
/**
 * Created by USRDEL on 19/6/17.
 */
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
      sails.log.info(req.method);
      if (req.method == "PUT") {
        return res.send("Hola");
      }
      else {
        return res.send("Error");
      }

    },
  ///// req.acceptedCharsets--------------------
  acceptedCharsets: function (req, res) {
    sails.log.info(req.acceptedCharsets, ['utf-8', 'utf-7', 'iso-8859-1']);
    if (req.acceptedCharsets =='utf-8' ){
      return res.send("Hola");
    }
    else {
      return res.send("Error");
    }
  },
  /////req.fresh--Una bandera que indica el envío de esta solicitud de agente de usuario ( req) quiere datos "frescos" (como se indica por el " si-no-match ", " Cache-Control " y / o " If-Modified-ya " los encabezados de solicitud.)

  //Si la solicitud quiere datos "frescos", por lo general usted querrá .find()datos frescos de sus modelos y la envían de vuelta al cliente.

};
