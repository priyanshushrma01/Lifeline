import {Fund} from '../components/Fund';
import {Works} from '../components/Works';
import SuccessStories from '../components/SuccessStory/SuccessStories';
import MultipleCards from '../components/Card';


export function Landingpage () {
    return <div className="bg-gray-800">
    <Fund/>
    <MultipleCards/>
    <SuccessStories/>
    <Works/>
    </div>
}