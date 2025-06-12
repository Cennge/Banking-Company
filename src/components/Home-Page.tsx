import BGObjects from './BG-Objects';
import './Home-Page.css'
import {Journey} from './Journey'

export function Home() {
    return (
        <div>
            <div className='sec'>
                <Journey/>
            </div>

            <div className='sec'>

            </div>

            <div className='BGObj-1 '>
                <BGObjects />          
            </div>
        </div>
    );
} 


