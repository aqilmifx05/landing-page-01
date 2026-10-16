import Image from "next/image";

import { Button } from "@/components/ui/button";
import { links } from "@/content/forex";
import { trackingIds } from "@/content/tracking-ids";

export function SiteHeader() {
  return (
    <header className="header-scroll fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-4 tablet:h-20 tablet:px-8 desktop:px-0">
        <a href="https://mifx.com" aria-label="MIFX — beranda" className="pl-2">
          <Image
            src="/images/mifx-logo.svg"
            alt="MIFX"
            width={104}
            height={22}
            preload
            unoptimized
            className="h-[22px] w-auto"
          />
        </a>
        <nav aria-label="Akun" className="flex items-center gap-2.5">
          <Button
            asChild
            variant="secondary"
            size="nav"
            className="hidden text-brand-500 hover:bg-brand-800 tablet:inline-flex"
          >
            <a id={trackingIds.header.login} href={links.login}>
              Masuk
            </a>
          </Button>
          <Button asChild size="nav" className="hover:bg-brand-600">
            <a id={trackingIds.header.openAccount} href={links.openAccountHeader}>
              Buka Akun
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
