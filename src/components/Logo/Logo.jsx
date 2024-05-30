import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="inline-block w-24">
            <img src="/logo.png" alt="logo" className="w-full" />
        </Link>
    );
};

export default Logo;
