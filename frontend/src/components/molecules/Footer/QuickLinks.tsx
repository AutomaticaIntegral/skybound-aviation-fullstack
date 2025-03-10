import React from 'react';
import { FooterHeading, FooterLink } from '@/components/atoms/Footer';
import { Link } from 'react-router-dom';

interface LinkItem {
  href: string;
  text: string;
  isRouterLink?: boolean;
}

interface QuickLinksProps {
  title: string;
  links: LinkItem[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ title, links }) => {
  return (
    <div className="col-span-1 md:col-span-3">
      <FooterHeading text={title} />
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            {link.isRouterLink ? (
              <Link to={link.href} className="text-gray-300 hover:text-skyblue transition-colors flex items-center gap-2 group">
                <span className="h-[1px] w-0 bg-skyblue group-hover:w-4 transition-all duration-300"></span>
                {link.text}
              </Link>
            ) : (
              <FooterLink href={link.href} text={link.text} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks; 