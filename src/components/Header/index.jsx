import ThemeToggle from "../Toggle_DarkMode"
import LanguageToggle from "../Toggle_Language"

const Header = () => {
    return (
        <header className="header">
            <LanguageToggle />
            <nav className="nav">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    )
}

export default Header