import { useNavigate } from "react-router-dom";

const SidebarElement = ({ icon, text, onClick }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => onClick(navigate)} className='SidebarElement-container'>
      <div className="sidebar-element-icon">
        {icon}
      </div>
      <div className="sidebar-element-text">
        {text}
      </div>
    </div>
  );
};

export default SidebarElement;