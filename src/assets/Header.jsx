export default function Header() {
  return (
    <>
      <div className="head">
        <div className="logo">
        <img src="https://i.imgur.com/eBW6zrX.jpeg" alt="Logo"/>
          <p>Kazuto</p>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
