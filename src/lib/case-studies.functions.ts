import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { CASE_STUDIES, type CaseStudy } from "@/data/work";
import { toCaseStudyShape } from "@/lib/case-study-shape";

export const loadCaseStudies = createServerFn({ method: "GET" })
  .inputValidator(z.object({ slug: z.string().max(160).optional() }))
  .handler(async ({ data }) => {
    const { readPublishedCaseStudies } = await import("./case-studies.server");
    try {
      const rows = await readPublishedCaseStudies(data.slug);
      // A successful empty query means unpublished or missing, not a DB outage.
      return { available: true, studies: rows.map((row) => toCaseStudyShape(row) as CaseStudy) };
    } catch {
      return {
        available: false,
        studies: CASE_STUDIES.filter((study) => !data.slug || study.slug === data.slug),
      };
    }
  });
