module.exports = {
    register : (req,res) => {
        return res.render('users/register',{
            title : "Registro de usuario"
        })
    },
    login : (req,res) => {
        return res.render('users/login',{
            title : "Loguearse"
        })
    },
    profile : (req,res) => {
        return res.render('users/profile',{
            title : "Perfil de usuario"
        })
    }
}