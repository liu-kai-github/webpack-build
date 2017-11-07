import _ from 'lodash';
import Icon from './icon.jpg';
import Data from './data.xml';

function component3() {
    const element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['加载常用资源', '正常'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.style = 'width: 100px';
    +element.appendChild(myIcon);

    console.log(Data);

    return element;
}

export default component3;