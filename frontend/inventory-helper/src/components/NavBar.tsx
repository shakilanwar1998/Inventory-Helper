function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Inventory
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addProduct">
                Add Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listings">
                Listings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/inbound/showAll">
                Inbound
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orders/showAll">
                Orders
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
