import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Blog = () => {

    const { theme , toggleTheme } = useContext(ThemeContext)

    const style = {
        background: theme === 'dark' ? '#333' : '#EEE',
        color: theme === 'dark' ? 'white' : 'black',
        padding: '20px',
        textAlign: 'center',
    };

    return(
        <div className="page" style={style}>
            <h2>Blog</h2>
            <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
        </div>
    )
}

export default Blog;