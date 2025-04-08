
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <h1>Youdemy</h1>
            <nav>
                <ul>
                    <li><a href="#">Courses</a></li>
                    <li><Link to="/categories">Categories</Link></li>
                    <li><Link to="/tags">Tags</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header 

