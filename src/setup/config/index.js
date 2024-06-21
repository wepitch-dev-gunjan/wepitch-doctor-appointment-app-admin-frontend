import { IoAnalyticsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiDoctorFace } from "react-icons/gi";

let configPromise;

if (process.env.NODE_ENV === 'production') {
  configPromise = import('./config.prod.json').then(module => module.default);
} else {
  configPromise = import('./config.dev.json').then(module => module.default);
}

const config = await configPromise; // This will wait for the promise to resolve

export default config;


export const sidebarElements = [
  {
    text: "Dashboard",
    icon: <MdDashboard />,
    onClick: function (navigate) {
      navigate('/dashboard')
    }
  },
  {
    text: "Admins",
    icon: <IoAnalyticsSharp />,
    onClick: function (navigate) {
      navigate('/admins')
    }
  },
  {
    text: "analytics",
    icon: <IoAnalyticsSharp />,
    onClick: function (navigate) {
      navigate('/analytics')
    }
  },
  {
    text: "Appointments",
    icon: <AiOutlineSchedule />,
    onClick: function (navigate) {
      navigate('/appointments')
    }
  },
  {
    text: "Doctors",
    icon: <GiDoctorFace />,
    onClick: function (navigate) {
      navigate('/doctors')
    }
  },
]

export const navbarElements = [
  {
    text: 'Home',
    onClick: function (navigate) {
      navigate('/dashboard')
    }
  },
  {
    text: 'Profile',
    onClick: function (navigate) {
      navigate('/profile')
    }
  }
]