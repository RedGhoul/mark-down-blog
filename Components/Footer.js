import Link from 'next/link';

export default function Footer() {
    return (
        <header className="topnav" style={{
            marginBottom:'0px',
            marginTop:'40px'
        }}>
            <Link href='/'>
                <a>Somethings Blog</a>
            </Link>
            <div className="topnav-right">
                <a>Made By With Love</a>
            </div>
        </header>
    )
}
