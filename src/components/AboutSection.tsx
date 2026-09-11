"use client";

import { useTranslations } from "next-intl";

/**
 * AboutSection - Company overview with mission statement and key stats.
 * 
 * Uses a 2-column grid on desktop (text + stats) and stacks on mobile.
 * The stats use CSS logical properties for proper alignment in both LTR and RTL.
 */
export default function AboutSection() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stat_1_value"), label: t("stat_1_label") },
    { value: t("stat_2_value"), label: t("stat_2_label") },
    { value: t("stat_3_value"), label: t("stat_3_label") },
  ];

  return (
    <section id="about" className="py-20 bg-white sm:py-28" aria-labelledby="about-title">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-heading mb-16">
          <span className="section-label">{t("section_label")}</span>
          <h2 id="about-title" className="section-title">
            {t("title")}
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              {t("description")}
            </p>

            {/* Mission */}
            <div className="rounded-xl border-s-4 border-secondary bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {t("mission_label")}
              </h3>
              <p className="text-gray-600">{t("mission_text")}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card flex flex-col items-center justify-center p-4 text-center sm:p-6"
              >
                <span className="mb-1 text-3xl font-bold text-secondary sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
