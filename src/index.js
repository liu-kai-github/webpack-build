import component1 from './component1/component1';
import component2 from './component2/component2';
import component3 from './component3/component3';
import './common.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}


document.body.appendChild(component1());
document.body.appendChild(component2());
document.body.appendChild(component3());