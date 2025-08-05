const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded"></div>
              <span className="text-xl font-bold">Approvia Search</span>
            </div>
            <p className="text-footer-foreground/80 mb-4">
              Find answers hidden inside your company docs in seconds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">
                🐦
              </a>
              <a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">
                💼
              </a>
              <a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">
                📧
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Features</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Integrations</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">API</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">About</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Blog</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Careers</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Help Center</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Documentation</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Status</a></li>
              <li><a href="#" className="text-footer-foreground/80 hover:text-footer-foreground">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-footer-foreground/20 mt-8 pt-8 text-center">
          <p className="text-footer-foreground/80">
            © 2024 Approvia Search. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;