import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import './index.css';
import React, { useState, useEffect } from 'react';

const imgs = [img1, img2, img3, img4, img5];
const buttons = [
    { href: 'https://www.zentao.net/dynamic/20.0.beta2-83490.html', class: 'btn btn-lg btn-danger', text: '开源版20.0.beta2' },
    { href: 'https://www.zentao.net/download/zentaopms18.12-83589.html', class: 'btn btn-lg btn-info', text: '开源版18.12' },
    { href: 'https://www.zentao.net/download/biz8.12-83590.html', class: 'btn btn-lg btn-warning', text: '企业版8.12' },
    { href: 'https://www.zentao.net/download/max4.12-83591.html', class: 'btn btn-lg btn-primary', text: '旗舰版4.12' },
    { href: 'https://www.zentao.net/download/ipd1.4-83592.html', class: 'btn btn-lg btn-info', text: 'IPD版1.4' },
    { href: '/download/82870.html', class: 'btn btn-lg btn-info', text: 'DevOps平台' },
    { href: '/download/80038.html', class: 'btn btn-lg btn-primary', text: '客户端' }
];
const captions = [
    {
        title: '禅道是专业的研发项目管理软件',
        content: [
            '细分需求、任务、缺陷和用例',
            '完整覆盖研发项目核心流程',
            '完整软件生命周期管理'
        ],
        buttons: buttons
    },
    {
        title: '禅道是通用的项目管理软件',
        content: [
            '完整支持敏捷项目模型、瀑布项目模型、看板模型',
            '内置项目集、产品、项目和执行四个管理框架',
            '支持CMMI标准的落地实施'
        ],
        buttons: buttons
    },
    {
        title: '禅道是灵活的项目管理软件',
        content: [
            '适用不同的管理场景，如软件公司，互联网企业等',
            '功能可组合使用，可只做缺陷管理、需求管理或任务管理',
            '可私有部署，也可以选择云计算方案'
        ],
        buttons: buttons
    },
    {
        title: '禅道是开源免费的项目管理软件',
        content: [
            '基于ZPL协议发布',
            '源代码开放，不限商用',
            '强大扩展机制，丰富插件'
        ],
        buttons: buttons
    },
    {
        title: '禅道是有保障的项目管理软件',
        content: [
            '禅道开发团队从04年从事开源，坚持到现在',
            '已为数以万计的公司提供即时有力的支持',
            '已为数以万计的公司提供即时有力的支持'
        ],
        buttons: buttons
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [imgs.length]);

    return (
        <div className="carousel">
            {imgs.map((img, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={img} alt="" />
                    <div className="carousel-caption">
                        <h2>{captions[index].title}</h2>
                        <ul>
                            {captions[index].content.map((content, contentIndex) => (
                                <li key={contentIndex}>{content}</li>
                            ))}
                        </ul>
                        <div className="carousel-buttons">
                            {captions[index].buttons.map((button, buttonIndex) => (
                                <a
                                    key={buttonIndex}
                                    href={button.href}
                                    className={button.class}
                                >
                                    {button.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="carousel-indicators">
                {imgs.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;