import {cube} from './math.js';
import './app1.css';

function component1() {
    const element = document.createElement('pre');

    element.innerHTML = [
        '打包时，会把没有引用的资源过滤掉，并且压缩',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

export default component1;