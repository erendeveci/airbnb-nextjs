import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";

import RegisterModal from "./components/modals/RegisterModal";
import RentModal from "./components/modals/RentModal";
import LoginModal from "./components/modals/LoginModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import SearchModal from "./components/modals/SearchModal";

const font = Nunito({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <RentModal />
          <RegisterModal />
          <LoginModal />
          <SearchModal/>
        </ClientOnly>
        <main>
          <div className="pt-10 pb-20">{children}</div>
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
