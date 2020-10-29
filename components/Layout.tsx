export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light mb-3" style={{ backgroundColor: '#e3f2fd' }}
      >
        <div className="container">
          <div className="mr-auto">
            <a href="#" className="navbar-brand">
              Navbar
            </a>
          </div>
          <form className="d-flex">
            <button className="btn btn-outline-primary" type="submit">Search
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
}
