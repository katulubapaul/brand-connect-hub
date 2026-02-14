const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-primary-foreground">
          Pearl <span className="text-secondary">AI</span> Labs
        </p>
        <p className="text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Pearl AI Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
