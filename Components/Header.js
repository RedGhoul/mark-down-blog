import Link from 'next/link';

export default function Header() {
    return (
        <header className="topnav">
                <Link href='/'>
                    <a>Somethings Blog</a>
                </Link>
                <div className="topnav-right">
                    <a href="#search">Github</a>
                    <a href="#about">Portfolio</a>
                </div>
        </header>
    )
}
