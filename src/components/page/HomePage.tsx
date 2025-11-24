import { useState, useEffect } from "react";
import { contentClient } from "@/client/ContentClient";
import { parseByPattern } from "@/util/resumeSectionParser";
import {
  SECTION_STYLES,
  DEFAULT_SECTION_STYLE,
} from "@/components/page/util/constant";
import ResumeSection from "../domain/ResumeSection/ResumeSection";
import type { ParsedSection } from "@/model/component/ResumeSection";

const HomePage = () => {
  const [sections, setSections] = useState<ParsedSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        setIsLoading(true);
        const data = await contentClient.getAbout();
        const parsedSections = parseByPattern(
          data.content,
          "---",
          /^#\s+(.+)$/m
        );
        setSections(parsedSections);
        setError(null);
      } catch (err) {
        setError("Failed to load resume content");
        console.error("Error fetching resume:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResume();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {sections.map((section, index) => {
        const styleConfig =
          SECTION_STYLES[section.title] || DEFAULT_SECTION_STYLE;
        return (
          <ResumeSection
            key={`${section.title}-${index}`}
            title={section.title}
            content={section.content}
            styleConfig={styleConfig}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
