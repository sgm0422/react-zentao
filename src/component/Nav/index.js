import React, { useState } from 'react';
import './index.css';

const navItems = [
    {class: 'nav-item', text: '首页'},
    {
        class: 'nav-item',
        text: '演示',
        items: [
            {
                class: 'nav-item',
                text: '18版本',
                items: [
                    {class: 'nav-item', text: '开源版'},
                    {class: 'nav-item', text: '企业版'}
                ]
            },
            {
                class: 'nav-item', 
                text: '12版本',
                items: [
                    {class: 'nav-item', text: '开源版'},
                    {class: 'nav-item', text: '企业版'}
                ]
            },
            {class: 'nav-item', text: '旗舰版'},
            {class: 'nav-item', text: 'SAFe版'},
            {class: 'nav-item', text: 'IPD版'},
        ]
    },
    {class: 'nav-item', text: '下载'},
    {class: 'nav-item', text: '动态'},
    {class: 'nav-item', text: '购买'},
    {class: 'nav-item', text: '帮助'},
    {class: 'nav-item', text: '支持'},
    {class: 'nav-item', text: '插件'},
    {class: 'nav-item', text: '社区'}
];

const NavItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleDropdown = () => {
       setIsOpen(!isOpen);
    };
   
    return (
       <li className={item.class} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
         <a>
            {item.text}
            {item.items && <b className="caret"></b>}
         </a>
         {item.items && (
           <ul className={`dropdown ${isOpen ? "show" : ""}`}>
             {item.items.map((subItem, index) => (
               <NavItem key={index} item={subItem} />
             ))}
           </ul>
         )}
       </li>
    );
};
   
const Nav = () => {
    return (
       <nav>
         <ul>
           {navItems.map((item, index) => (
             <NavItem key={index} item={item} />
           ))}
         </ul>
       </nav>
    );
};
   
export default Nav;