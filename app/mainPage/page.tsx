import Avatar from "@/components/Avatar";
import "@/styles/mainPage.css";

export default function MainPage() {
    return (
        <main>
            <span>
                <h1 className="MainTitle">PORTFOLIO</h1>
                <button className="SettingsButton"></button>
            </span>
            <div id="mainPageContainer">
                <Avatar />
                <p id="description"></p>
                <ul id="mainPageList">
                    <li className="listSkillItem">List of Dev Skills</li>
                    <li className="listSkillItem">Contact</li>
                    <li className="listSkillItem">Quit Game</li>
                </ul>
            </div>
        </main>
    );
}