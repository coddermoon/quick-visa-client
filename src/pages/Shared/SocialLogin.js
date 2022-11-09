import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../../Assets/contexts/AuthProvider';

const SocialLogin = () => {
    const {socialSignin} = useContext(AuthContext)
   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()

    const handleSignin = (provider)=>{
        socialSignin(provider)
        .then(result=>{
            toast.success("login successfull")
        })
        .catch(err=>toast.errror(err.message))


    }



    return (
        <div className='mb-5'>
            <div className='mx-5'>
            
            <button  onClick={()=>handleSignin(googleProvider)} className="iconBtn">
              <FaGoogle className='socialIcon'/>
            </button>
            <button   onClick={()=>handleSignin(githubProvider)} className="iconBtn">
             <FaGithub className='socialIcon'/>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;