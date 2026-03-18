const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="heading-hero text-2xl">
            <span className="copper-text">REZIDANS</span>
            <span className="text-foreground"> AI</span>
          </p>
        </div>
        <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase">
          © 2026 TÜM HAKLARI SAKLIDIR
        </p>
      </div>
    </footer>
  );
};

export default Footer;
