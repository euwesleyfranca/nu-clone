import { cn } from '@/lib/utils';
import {
  IconCoin,
  IconGraph,
  IconMessage,
  IconSettings,
  IconUserCircle,
  IconX,
} from '@tabler/icons-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserCard } from '..';
import { NavItem } from './NavItem';

type NavbarProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

const navBarData = [
  {
    text: 'Dashboard',
    icon: <IconGraph />,
    link: '/',
  },
  {
    text: 'Conta',
    icon: <IconUserCircle />,
    link: '/account',
  },
  {
    text: 'Transações',
    icon: <IconCoin />,
    link: '/transactions',
  },
  {
    text: 'Chat online',
    icon: <IconMessage />,
    link: '/chat',
  },
  {
    text: 'Configurações',
    icon: <IconSettings />,
    link: '/settings',
  },
];

export function Navbar({ opened, setOpened }: NavbarProps) {
  const path = usePathname();

  return (
    <nav
      className={cn([
        'flex flex-col shadow-md justify-between bg-primary w-[300px] py-20 fixed md:static h-screen text-white z-50',
        opened ? 'left-[0]' : 'left-[-300px]',
      ])}
    >
      <div>
        <IconX
          height={30}
          width={30}
          className="md:hidden absolute top-4 left-8"
          cursor="pointer"
          onClick={() => setOpened(false)}
        />
        <div className="mb-28">
          <UserCard />
        </div>
        <div>
          {navBarData.map((navItem) => (
            <NavItem
              key={navItem.link}
              icon={navItem.icon}
              text={navItem.text}
              link={navItem.link}
              active={path}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-sm">
        <Image
          width={70}
          height={70}
          src="/icons/nubank_logo.svg"
          alt="Logo Nubank"
          className="mb-4"
        />
        <div className="flex flex-col items-center">
          <span>&#169; 2023 Nubank Hcode</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </nav>
  );
}
