import { Appbar } from '../pages/Appbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import {Works} from './Works';
import SuccessStories from './SuccessStory/SuccessStories';
import {Fund} from './Fund';

export function AppLayout(){
    return (
        <div>
            <Appbar />
            <Fund/>
            <Outlet />
            <Works/>
            <SuccessStories/>
            <Footer />
        </div>
    );
} 