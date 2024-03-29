'use client';

import { ReactNode, useState } from 'react';
import { Header, Navbar } from '..';

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col md:flex-row relative">
      <Navbar opened={opened} setOpened={setOpened} />
      <Header setOpened={setOpened} />
      <main className="max-w-[1600px] md:pl-[300px] w-full min-h-screen mx-auto">{children}</main>
    </div>
  );
}
