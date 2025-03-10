import React from 'react';

interface NavMenuItem {
  label: string;
  href: string;
}

interface NavMenuProps {
  bg_color?: string;
  items: NavMenuItem[];
}

const NavMenu = ({ bg_color = "bg-[#203040]", items }: NavMenuProps) => {
  return (
    <nav className="flex justify-center py-4">
      <div className={`${bg_color} rounded-full px-6`}>
        <div className="flex items-center h-8 space-x-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-wider text-gray-200 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;