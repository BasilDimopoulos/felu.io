import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="nav border-solid">
      <Link href="/" passHref>
        <h2 className="pointer">Kara</h2>
      </Link>
      <Link href="/bio" passHref>
        <p className="ms-5 pointer lead my-auto">Bio</p>
      </Link>
    </nav>
  )
}
export default Nav