import logoChefGastro from '../assets/chef-icon.png';

export default function Header() {
    return (
        <header>
            <img src={logoChefGastro} alt="Ícone de robô chefe" />
            <h1>Chef Gastrô</h1>
        </header>
    );
}