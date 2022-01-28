class LoginPage
{
    get userName()
    {
        return  $('#username')
    }
     get password()
    {
        return  $('#password')
    }
     get signInButton()
    {
        return  $("#signInBtn")
    }
    

    Login = async(UserName, Password)=>
   {
       await this.userName.setValue(UserName)
       await this.password.setValue(Password)
       await this.signInButton.click()
   }

}
module.exports = new LoginPage()