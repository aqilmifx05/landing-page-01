"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { testimonials, type Testimonial } from "@/content/forex";
import { track, tracking } from "@/content/tracking-ids";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative h-[500px] overflow-hidden rounded-[20px] bg-navy-950 tablet:h-[480px]">
      <Image
        src={t.photo}
        alt={t.name}
        fill
        sizes="(min-width: 1600px) 360px, (min-width: 1200px) 400px, (min-width: 810px) 800px, 358px"
        className="object-cover object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,16,28,0)_35%,rgba(1,16,28,0.92)_68%,#01101c_100%)]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex gap-1" role="img" aria-label={`Rating ${t.rating} dari 5`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} aria-hidden className="size-5 fill-star text-star" strokeWidth={0} />
          ))}
        </div>
        <p className="t-card mt-3 max-w-[320px] font-semibold text-white">{t.name}</p>
        <p className="t-body max-w-[320px] text-brand-300">{t.role}</p>
        <blockquote className="t-small mt-4 text-ink-400">{t.quote}</blockquote>
      </figcaption>
    </figure>
  );
}

function ArrowButton({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      {...track(dir === "prev" ? tracking.testimonials.prev : tracking.testimonials.next)}
      type="button"
      onClick={onClick}
      className={cn(
        "absolute top-[240px] z-10 size-10 rounded-full transition-transform active:scale-95 tablet:hidden",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        dir === "prev" ? "left-[31px]" : "right-[31px]",
      )}
    >
      <Image
        src={dir === "prev" ? "/images/arrow-left.svg" : "/images/arrow-right.svg"}
        alt=""
        width={40}
        height={40}
        unoptimized
        className="pointer-events-none"
      />
    </button>
  );
}

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  // Lazy state keeps one stable plugin instance across renders.
  const [autoplay] = React.useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  // Manual navigation restarts the autoplay countdown.
  const navigate = (move: () => void) => {
    move();
    autoplay.reset();
  };

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    // selected starts at 0 (Embla's start index); stay in sync from here on.
    api.on("select", onSelect).on("reInit", onSelect);
    return () => {
      api.off("select", onSelect).off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      aria-labelledby="testimonials-title"
      className="overflow-hidden bg-ink-50 pt-[57px] pb-[60px] tablet:pt-[81px] tablet:pb-[92px] desktop:pb-[88px]"
    >
      <div className="px-4 tablet:px-9">
        <SectionHeading
          id="testimonials-title"
          tone="light"
          lineBreak="mobile"
          title={testimonials.title}
          accent={testimonials.titleAccent}
          subtitle={testimonials.subtitle}
        />
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true }}
        plugins={[autoplay]}
        className="relative mt-10 tablet:mt-[60px]"
        aria-label="Testimoni trader MIFX"
      >
        <CarouselContent className="-ml-5">
          {testimonials.items.map((t) => (
            <CarouselItem
              key={t.name}
              className="basis-[calc(100%-32px)] pl-5 tablet:basis-[calc(100%-400px)] desktop:basis-[420px] wide:basis-[380px]"
            >
              <TestimonialCard t={t} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <ArrowButton dir="prev" onClick={() => navigate(() => api?.scrollPrev())} />
        <ArrowButton dir="next" onClick={() => navigate(() => api?.scrollNext())} />
      </Carousel>

      <div className="mt-7 flex justify-center">
        <div
          className="flex items-center gap-2 rounded-full bg-ink-200 px-2.5 py-1.5"
          role="tablist"
          aria-label="Pilih testimoni"
        >
          {testimonials.items.map((t, i) => (
            <button
              key={t.name}
              {...track(tracking.testimonials.dot(i, t.name))}
              type="button"
              role="tab"
              aria-selected={selected === i}
              onClick={() => navigate(() => api?.scrollTo(i))}
              className={cn(
                "size-2 rounded-full transition-colors",
                selected === i ? "bg-white" : "bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
