import { Appbar } from '../pages/Appbar';
import { Outlet } from 'react-router-dom';

export function AppLayout(){
    return (
        <div>
            <Appbar />
            <Outlet />
        </div>
    );
} 