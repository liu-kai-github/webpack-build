import _ from 'lodash';

function component2() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = '点击按钮，查看console和network';
    element.innerHTML = _.join(['异步加载资源', '正常'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    //异步加载模块
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;

        print();
    });

    return element;
}

export default component2;

// document.body.appendChild(component());