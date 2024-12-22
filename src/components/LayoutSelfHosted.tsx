
import { useNavigate } from 'react-router-dom'
import gitlab from '../assets/gitlab.svg' ;
import key from '../assets/key.svg' ;

const LayoutSelfHosted = () => {
  const navigate = useNavigate() ;

  const handleClick =()=>{
    navigate('/repo') ;   
  }
  
  return (
    <div className="w-[70%] h-full space-y-4 text-sm font-medium ">
      
      <button onClick={handleClick} className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-black text-md rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
        <img src={gitlab} className="w-5 h-5" alt="" />

        Self Hosted GitLab
      </button>
      <button  onClick={handleClick} className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-black text-md rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
        <img src={key} className='w-5 h-5' alt="" />
        Sign in with SSO
      </button>
    </div>
  )
}

export default LayoutSelfHosted