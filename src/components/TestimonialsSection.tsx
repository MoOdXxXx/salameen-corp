"use client";

import { useTranslations } from "next-intl";

/**
 * TestimonialsSection - Displays client reviews in a responsive grid.
 * 
 * Each testimonial card shows a quote, author name, role, and avatar initial.
 * Uses CSS logical properties for quote marks and spacing.
 */
export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  const testimonials = [0, 1, 2].map((i) => ({
    quote: t(`items.${i}.quote`),
    author: t(`items.${i}.author`),
    role: t(`items.${i}.role`),
    avatar: t(`items.${i}.avatar`),
  }));

  return (
    <section id="testimonials" className="py-20 bg-white sm:py-28" aria-labelledby="testimonials-title">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading mb-16">
          <span className="section-label">{t("section_label")}</span>
          <h2 id="testimonials-title" className="section-title">
            {t("title")}
          </h2>
          <p className="section-description">{t("description")}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card relative flex flex-col p-6 sm:p-8"
            >
              {/* Quote mark */}
              <div className="mb-4 text-4xl leading-none text-secondary/30" aria-hidden="true">
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="mb-6 flex-1 text-base leading-relaxed text-gray-600">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                {/* Avatar */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center
                  rounded-full bg-primary text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="block text-sm font-semibold not-italic text-primary">
                    {testimonial.author}
                  </cite>
                  <span className="text-xs text-gray-500">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
