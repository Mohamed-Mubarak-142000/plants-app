"use client";

import { Button } from "@/components/ui/button";
import { Languages } from "@/lib/types";
import { useParams, usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const pathname = usePathname();
  const { locale } = useParams();

  const switchLanguage = (newLocale: string) => {
    // استبدل بداية الـ pathname بـ locale الجديد
    let newPath = pathname;

    if (locale && pathname.startsWith(`/${locale}`)) {
      newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }

    // إعادة تحميل الصفحة مع المسار الجديد
    window.location.href = newPath;
  };

  return (
    <div className="flex">
      {locale === Languages.ARABIC ? (
        <Button
          variant="outline"
          onClick={() => switchLanguage(Languages.ENGLISH)}
        >
          English
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => switchLanguage(Languages.ARABIC)}
        >
          العربية
        </Button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
