import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import './ThemeManager.scss';

export default function ThemeManager() {
    function setDark() {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };

    function setLight() {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

    if (defaultDark) {
        setDark();
    }

    function toggleTheme(event) {
        if (event.target.checked) {
            setDark();
        } else {
            setLight();
        }
    };

    return (
        <div className="container_theme_wrapper">
            <label className="toggle_theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
                <div className="slider round">
                    <span><BsFillSunFill /></span>
                    <span><BsFillMoonFill /></span>
                </div>
            </label>
        </div>
    )
}