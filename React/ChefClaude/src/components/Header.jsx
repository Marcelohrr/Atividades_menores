import iconChefClaude from '../assets/chef-icon.png';

export default function Header() {
    return (
        <header>
            <img src={iconChefClaude} alt="Ícone de robô chefe" />
            <h1>Chef Claude</h1>
        </header>
    );
}