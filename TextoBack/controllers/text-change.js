const { response, text } = require('express');

const getTexto =  (req, res = response ) => {
    try {
        let texto = req.param('texto');

        if( !texto || 0 === texto.length ){
            return res.status(400).json({
                ok:false,
                error : 'No texto',
                msg : 'No se puede convertir..!'
            })
        } 
        let txtCambio = '';
        var c = texto.length;
        for( i = (texto.length - 1) ;  -1 < i ; i--){
            txtCambio = txtCambio + texto.substring(i,c);
            c--;
        }

        return res.status(200).json({
            ok: true,        
            msg:'Ok',
            texto: txtCambio
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador' + error
        });
    }
}


const getTest =  (req, res = response ) => {

    return res.status(200).json({
        ok: true,        
        msg:'Ok',
    })

}



module.exports = {
    getTexto, getTest
}