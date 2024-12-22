import { useNavigate } from "react-router-dom";
import azure from '../assets/Azure-DevOps.svg' ;
import gitlab from '../assets/gitlab.svg' ;
import github from '../assets/github.svg' ;
import bitbucket from '../assets/bitbucket.svg' ;


const LayoutSaaS = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/repo');
  }

  return (
    <div className="w-[70%] h-full space-y-4 text-sm font-medium ">
      <button onClick={handleClick} className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-black text-md rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
       <img src={github} className="w-5 h-5" alt="" />
        Sign in with GitHub
      </button>
      <button onClick={handleClick} className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-black text-md rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
  <img src={bitbucket} className="w-5 h-5" alt="" />
        Sign in with BitBucket
      </button>
      <button onClick={handleClick} className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-black text-md rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
       
        <img src={azure} className="w-5 h-5" alt="" />
        Sign in with Azure Devops
      </button>
      <button onClick={handleClick} className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-black text-md rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
        <img src={gitlab} className="w-5 h-5" alt="" />

        Sign in with GitLab
      </button>
    </div>
  )
}

export default LayoutSaaS




