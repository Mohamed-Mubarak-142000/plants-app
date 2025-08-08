import { Languages, ROUTES } from "@/lib/types";
import { Locale } from "@/i18n.config";
import getTrans from "@/lib/translation";

import Header from "../_components/header";
import Footer from "../_components/footer";

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const locale = (await params).locale;
  const { navbar } = await getTrans(locale);
  const links = [
    { id: 1, title: navbar.home, url: ROUTES.HOME },
    { id: 2, title: navbar.plants, url: ROUTES.PLANTS },
    { id: 3, title: navbar.stands, url: ROUTES.STANDS },
    { id: 4, title: navbar.categories, url: ROUTES.CATEGORIES },
    { id: 5, title: navbar.contact, url: ROUTES.CONTACT },
  ];
  return (
    <div>
      <Header links={links} />
      <main className="min-h-screen-90 mt-28">{children}</main>
      <Footer />
    </div>
  );
}
