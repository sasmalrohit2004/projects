const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-md-4">
            <h6>ECOWEAR</h6>
            <p>Sustainable fashion for everyone 🌱</p>
          </div>

          {/* Categories */}
          <div className="col-md-4">
            <h6>Categories</h6>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Eco Accessories</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h6>Follow Us</h6>
            <ul className="list-unstyled d-flex gap-2">
              <li>🌐</li>
              <li>📸</li>
              <li>👍</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} ECOWEAR
        </p>
      </div>
    </footer>
  );
};

export default Footer;