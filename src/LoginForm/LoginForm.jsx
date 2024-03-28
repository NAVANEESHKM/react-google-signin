import GoogleLogin, { GoogleLogout } from "react-google-login";

const clinetId="895318556149-o3jop46ajn7u0655b3dt03rsjuam2284.apps.googleusercontent.com"

function LoginForm(){
      const onSuccess=(res)=>{
        console.log("Login Sucess ",res.profileObj);
      }
      const onFailure=(res)=>{
        console.log("Login Failed ,",res);
      }
      const Logoutsuccess=()=>{
        console.log("Logout is success")
      }
      return(
        <div>
            <GoogleLogin
                   clientId={clinetId}
                   buttonText="Login"
                   onSuccess={onSuccess}
                   onFailure={onFailure}
                   cookiePolicy={'single_host_origin'}
                   isSignedIn={true}
                   />
            <GoogleLogout
                  clinetId={clinetId}
                  buttonText="Logout"
                  onLogoutSuccess={Logoutsuccess}
            />
        </div>
      )
}

export default LoginForm