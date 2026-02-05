type FooterLink = {
  title: string;
  url: string;
};

type FooterProps = {
  links?: FooterLink[];
};

export default function Footer({ links = [] }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="border-t border-zinc-500/5 bg-white py-8 w-full">
      <div className="mx-auto px-24 max-w-screen flex items-center justify-between">
        <ul className="flex gap-4">
          {links.map((link, index) => (
            <li data-testid={`footerLink${index}`} key={index}>
              <a href={link.url} className="text-zinc-800 hover:text-teal-500">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <p data-testid="footerContent" className="text-zinc-600">
          © {year} Team 1. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
