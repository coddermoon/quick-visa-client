import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import {useNavigate,useLocation} from 'react-router-dom'
import { FaGithub, FaGoogle, } from 'react-icons/fa';
import { AuthContext } from '../../Assets/contexts/AuthProvider';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {socialSignin,setLoading} = useContext(AuthContext)
   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()

    const handleSignin = (provider)=>{
        socialSignin(provider)
        .then(result=>{
            toast.success("login successfull")
            navigate(from, {replace: true});
        })
        .catch(err=>toast.errror(err.message))
        .finally(() => {
            setLoading(false);
        })


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