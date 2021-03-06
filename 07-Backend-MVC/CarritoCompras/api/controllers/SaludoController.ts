/**
 * Created by escaf on 21/06/2017.
 */
/**
 * Created by USRDEL on 19/6/17.
 */

declare var module;
declare var sails;
declare var usuario;

module.exports = {

  welcome:(req,res)=>{

    sails.log.info(req.method);

    if(req.method=="POST"){
      return res.json({saludo:"hola"})
    }else{
      return res.send("Error")
    }



  },
  bienvenido:(req,res)=>{

    //PUT

    return res.send("Hola")

  },

  crearUsuarioQuemado:(req,res)=>{

    let parametros = req.allParams();

    let nuevoUsuario = {
      nombres:parametros.nombres,
      apellidos:parametros.apellidos,
      password:parametros.password,
      correo:parametros.correo,
      fechaNacimiento:parametros.fechaNacimiento
    };

    // 1 - Query Parameters ?nombre=Adrian&apellidos=Eguez

    // 2 - Forms Parameters


    /*let nuevoUsuario = {
     nombre:"Adrian",
     apellidos:"Eguez",
     password:"1234",
     correo:"1@1.com",
     fechaNacimiento:new Date()
     };
     */

    // NombreModelo.metodo(parametros).exec((err,registros)=>{})

    usuario.create(nuevoUsuario)
      .exec(
        (error,usuarioCreado)=>{
          if(error){
            return res.serverError(error);
          }else{
            return res.ok(usuarioCreado);
          }
        }
      )



  }


};
