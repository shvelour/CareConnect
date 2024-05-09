import { Outlet } from 'react-router-dom';
import Navbar from './components/Header';
import GlobalStyle from './components/GlobalStyle';


export default function Root() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </div>
  );
}