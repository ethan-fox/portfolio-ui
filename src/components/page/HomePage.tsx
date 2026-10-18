import { useState, useEffect } from "react";
import { contentClient } from "@/client/ContentClient";
import { parseByPattern } from "@/util/resumeSectionParser";
import {
  SECTION_STYLES,
  DEFAULT_SECTION_STYLE,
  ABOUT_ME_TAGLINE,
  QUICK_HITS_TITLE,
  QUICK_HITS_CONTENT,
} from "@/components/page/util/constant";
import AboutMeContent from "@/components/domain/ResumeSection/AboutMeContent/AboutMeContent";
import ResumeSection from "../domain/ResumeSection/ResumeSection";
import type { ParsedSection } from "@/model/component/ParsedSection";
import PageContainer from "@/components/custom/PageContainer";

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

  return (
    <PageContainer>
      <AboutMeContent
        tagline={ABOUT_ME_TAGLINE}
        profilePhotoSrc="/profile.jpg"
        profilePhotoAlt="Profile photo"
        profilePhotoFallback="EF"
      />

      <ResumeSection
        title={QUICK_HITS_TITLE}
        content={QUICK_HITS_CONTENT}
        styleConfig={SECTION_STYLES[QUICK_HITS_TITLE]}
      />

      {isLoading && <p className="text-muted-foreground">Loading...</p>}

      {error && <p className="text-destructive">{error}</p>}

      {!isLoading && !error && sections.map((section, index) => {
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
    </PageContainer>
  );
};

export default HomePage;
