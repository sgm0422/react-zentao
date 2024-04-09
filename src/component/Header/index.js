import './index.css';
import MyIcons from '../Icon/icon';
import Logo from './logo.png';
import Nav from '../Nav';

function Header() {
  return (
    <div id="Header">
        <div id='HeaderNav'>
            <div className='Content'>
                <div id='Contact'>
                    <div id='mobile'>
                        <MyIcons type='icon-mobile1' className='icon'/>
                        4006-8899-23
                     </div>
                    <div id='phone'>
                        <MyIcons type='icon-phone' className='icon'/>
                        0532-86893032
                    </div>
                    <div id='qq'>
                        <MyIcons type='icon-QQ-square-fill' className='icon'/>
                        2845263372
                    </div>
                </div>
                <div id='UserBar'>
                    <div id='Login'>
                        登录/注册
                    </div>
                    <div>|</div>
                    <div id='Lang'>
                        <MyIcons type='icon-earth' className='icon'/>
                        English
                    </div>
                </div>
            </div>
        </div>
        <div id='HeaderTitle'>
            <div className='Content'>
                <div id='Logo'>
                    <img src={Logo} alt='logo'/>
                </div>
                <div id='NavBar'>
                    <Nav />
                </div>
                <div id='SearchBar'>
                    <input type='text' placeholder='全站搜索'/>
                    <MyIcons type='icon-search' className='icon'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
