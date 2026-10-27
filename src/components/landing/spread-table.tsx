import Image from "next/image";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { spread, spreadColumns } from "@/content/forex";
import { tracking } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { InfoHint } from "./info-hint";
import { SectionHeading } from "./section-heading";

/** Framer shows only Produk + Target Spread on mobile. */
const hideOnMobile = (key: string) => key === "size" || key === "swap";
const cellVisibility = (key: string) => (hideOnMobile(key) ? "hidden tablet:table-cell" : "");

export function SpreadTable() {
  return (
    <section
      aria-labelledby="spread-title"
      className="relative bg-navy-950 pt-[57px] pb-14 tablet:pt-[81px] tablet:pb-[100px]"
    >
      <div aria-hidden className="divider-fade absolute inset-x-0 top-0 mx-auto h-px max-w-[680px]" />
      <div className="mx-auto w-full max-w-[1360px] px-4 tablet:px-9 desktop:px-20">
        <SectionHeading
          id="spread-title"
          title={spread.title}
          accent={spread.titleAccent}
          subtitle={spread.subtitle}
          className="max-w-[320px]"
        />

        <div className="reveal mt-[22px] tablet:mt-[43px] desktop:mt-11">
          <Table className="table-fixed">
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent has-aria-expanded:bg-transparent">
                {spreadColumns.map((col) => (
                  <TableHead
                    key={col.key}
                    scope="col"
                    className={cn(
                      "t-ui h-14 px-2 text-center font-medium text-white",
                      cellVisibility(col.key),
                    )}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.label}
                      {"hint" in col ? (
                        <InfoHint
                          tracking={tracking.spread.info(col.key, col.hint.title)}
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
                  <TableCell className="px-2">
                    <span className="t-ui flex items-center justify-center gap-2.5 font-semibold text-white">
                      <Image src={row.icon} alt="" sizes="32px" className="h-5 w-8 object-contain" />
                      {row.product}
                    </span>
                  </TableCell>
                  <TableCell className="t-body px-2 text-center text-ink-400">{row.spread}</TableCell>
                  <TableCell className={cn("t-body px-2 text-center text-ink-400", cellVisibility("size"))}>
                    {row.size}
                  </TableCell>
                  <TableCell className={cn("t-body px-2 text-center text-ink-400", cellVisibility("swap"))}>
                    {row.swap}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 flex justify-center desktop:mt-[34px]">
          <CtaButton tracking={tracking.spread.cta}>{spread.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
