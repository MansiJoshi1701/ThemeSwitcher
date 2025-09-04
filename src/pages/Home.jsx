import { useTheme } from "../context/ThemeContext";

const Home = () => {

    const { theme , toggleTheme } = useTheme();

    const style = {
        background: theme === 'dark' ? '#333' : '#EEE',
        color: theme === 'dark' ? 'white' : 'black',
        padding: '20px',
        textAlign: 'center',
    };

    return(
        <div className="page" style={style}>
            <h2>Home</h2>
            <p>Welcome to Home page</p>
            <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'} mode</button>
        </div>
    )
}

export default Home;