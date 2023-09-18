import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="footer-main-div">
            <p className="Home-para">
                <Link to="/">Home</Link>
            </p>
        <footer>
            <p>Copyright &copy; NeoFinTech Bank</p>
        </footer>
        </div>
    )
}
export default Footer;