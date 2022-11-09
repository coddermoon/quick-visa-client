import React from 'react';
import { FaGithub, FaGoogle, } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className='mb-5'>
            <div className='mx-5'>
            
            <button  className="iconBtn">
              <FaGoogle className='socialIcon'/>
            </button>
            <button  className="iconBtn">
             <FaGithub className='socialIcon'/>
            </button>
        </div>
        </div>
    );
};

export default SocialLogin;