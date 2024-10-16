import { Appbar } from '../pages/Appbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';

export function AppLayout(){
    return (
        <div>
            <Appbar />
            <Outlet />
            <Footer />
        </div>
    );
} 