import SidebarElement from './SidebarElement';
import './style.scss'
import { sidebarElements } from '../../../setup/config';

const Sidebar = () => {
  return (
    <div className='Sidebar-container'>
      {sidebarElements.map((el, i) => (
        <SidebarElement icon={el.icon} text={el.text} key={i} onClick={el.onClick} />
      ))}
    </div>
  );
};

export default Sidebar;