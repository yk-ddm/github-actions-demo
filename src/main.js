//js入口文件
import $ from 'jquery';
// import './css/index.css';
// import './css/index.less';
import './css/index.scss';
// import React from 'react';
// import ReactDOM from 'react-dom';

$(function () {
    $('li:odd').css('backgroundColor', 'blue');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'd97634';
    });
    // var myH1 = React.createElement('h1', {}, '这是一个h1');
    // var myH1 = React.createElement('h1', null, '这是一个h1');
    // var mydiv = React.createElement('div', {title: 'div的title属性----div', id: 'mydiv'}, '这是一个div', myH1);
    // ReactDOM.render(mydiv, document.getElementsByClassName('info')[0]);
    // ReactDOM.render(mydiv, document.getElementById('info'));
});

class Person {
    static info = {name: 'zs'}
}
console.log(Person.info);