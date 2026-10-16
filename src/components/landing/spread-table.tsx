import Image from "next/image";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { spread, spreadColumns } from "@/content/forex";
import { trackingIds } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { InfoHint } from "./info-hint";
import { SectionHeading } from "./section-heading";

/** Framer shows only Produk + Target Spread on mobile. */
const hideOnMobile = (key: string) => key === "size" || key === "swap";

export function SpreadTable() {
  return (
    <section aria-labelledby="spread-title" className="bg-navy-950 pb-16 tablet:pb-20">
      <div aria-hidden className="divider-fade mx-auto mb-16 h-px w-full max-w-[680px] tablet:mb-20" />
      <div className="mx-auto w-full max-w-[1200px] px-4 tablet:px-8 desktop:px-0">
        <SectionHeading
          id="spread-title"
          title={spread.title}
          accent={spread.titleAccent}
          subtitle={spread.subtitle}
          className="max-w-[320px] tablet:max-w-[920px]"
        />

        <div className="reveal mx-auto mt-10 max-w-[1030px] px-3.5 tablet:mt-[60px] tablet:px-0">
          <Table className="text-sm tablet:text-base">
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent has-aria-expanded:bg-transparent">
                {spreadColumns.map((col) => (
                  <TableHead
                    key={col.key}
                    scope="col"
                    className={cn(
                      "h-14 px-2 text-sm font-medium text-white tablet:px-4 tablet:text-base",
                      col.key === "product" ? "text-left tablet:pl-[34px]" : "text-center",
                      col.key === "spread" && "text-right tablet:text-center",
                      hideOnMobile(col.key) && "hidden tablet:table-cell",
                    )}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {col.label}
                      {"hint" in col ? (
                        <InfoHint
                          id={trackingIds.spread.info(col.key)}
                          title={col.hint.title}
                          body={col.hint.body}
                        />
                      ) : null}
                    </span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {spread.rows.map((row) => (
                <TableRow key={row.product} className="h-[58px] border-white/10 hover:bg-white/[0.03]">
                  <TableCell className="px-2 tablet:px-2.5">
                    <span className="flex items-center gap-3 font-semibold text-white">
                      <Image src={row.icon} alt="" sizes="32px" className="h-5 w-8 object-contain" />
                      {row.product}
                    </span>
                  </TableCell>
                  <TableCell className="px-2 text-right text-ink-400 tablet:text-center">
                    {row.spread}
                  </TableCell>
                  <TableCell className="hidden px-2 text-center text-ink-400 tablet:table-cell">
                    {row.size}
                  </TableCell>
                  <TableCell className="hidden px-2 text-center text-ink-400 tablet:table-cell">
                    {row.swap}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-10 flex justify-center tablet:mt-[50px]">
          <CtaButton id={trackingIds.spread.cta}>{spread.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
