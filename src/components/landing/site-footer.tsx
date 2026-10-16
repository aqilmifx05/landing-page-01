import Image from "next/image";

import certKomdigi from "@/assets/images/cert-komdigi.png";
import certIso from "@/assets/images/cert-iso27001.png";
import certKan from "@/assets/images/cert-kan.png";
import { footer, links } from "@/content/forex";
import { trackingIds } from "@/content/tracking-ids";
import { socialIcons } from "./social-icons";

const heading = "text-sm leading-5 font-semibold text-white tablet:text-base tablet:leading-6";
const linkText = "text-sm leading-5 font-medium text-ink-500 transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 pt-12 pb-10 tablet:pt-[60px]">
      <div className="mx-auto w-full max-w-[1200px] px-[30px] tablet:px-8 desktop:px-0">
        <div className="grid gap-10 tablet:grid-cols-[267px_268px_1fr] tablet:gap-0">
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className={heading}>{col.title}</p>
              <ul className="mt-4 space-y-4 tablet:mt-5">
                {col.links.map((l) => (
                  <li key={l.href} className="text-sm leading-5">
                    <a href={l.href} className={linkText}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className={heading}>{footer.legal.title}</p>
            <ul className="mt-4 space-y-2 tablet:mt-5">
              {footer.legal.items.map((item) => (
                <li key={item} className="text-sm leading-5 font-medium text-ink-500">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <Image src={certKomdigi} alt="Terdaftar di KOMDIGI" sizes="56px" className="h-10 w-auto" />
              <Image src={certIso} alt="Bersertifikat ISO 27001" sizes="107px" className="h-10 w-auto" />
              <Image
                src={certKan}
                alt="Komite Akreditasi Nasional (KAN)"
                sizes="55px"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-10 tablet:mt-[50px] tablet:flex-row tablet:items-start tablet:justify-between">
          <div>
            <p className={heading}>{footer.social.title}</p>
            <ul className="mt-4 flex items-center gap-4">
              {footer.social.links.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.href}>
                    <a
                      id={trackingIds.footer.social(s.icon)}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`MIFX di ${s.label}`}
                      className="block text-ink-500 transition-colors hover:text-white"
                    >
                      <Icon className="pointer-events-none size-6" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className={heading}>{footer.appTitle}</p>
            <div className="mt-4 flex items-center gap-3">
              <a id={trackingIds.footer.appStore} href={links.appDownload} aria-label="Download di App Store">
                <Image
                  src="/images/badge-app-store.svg"
                  alt=""
                  width={120}
                  height={40}
                  unoptimized
                  className="pointer-events-none"
                />
              </a>
              <a
                id={trackingIds.footer.googlePlay}
                href={links.appDownload}
                aria-label="Dapatkan di Google Play"
              >
                <Image
                  src="/images/badge-google-play.svg"
                  alt=""
                  width={135}
                  height={40}
                  unoptimized
                  className="pointer-events-none"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="mt-10 border-ink-500/40" />
        <p className="mt-5 text-sm leading-5 font-medium text-ink-500 tablet:text-center">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
