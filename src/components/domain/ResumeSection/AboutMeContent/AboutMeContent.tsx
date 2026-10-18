import ProfilePhoto from '@/components/domain/ResumeSection/AboutMeContent/ProfilePhoto/ProfilePhoto';
import AboutMeTagline from '@/components/domain/ResumeSection/AboutMeContent/AboutMeTagline/AboutMeTagline';

interface AboutMeContentProps {
  tagline: string;
  profilePhotoSrc?: string;
  profilePhotoAlt?: string;
  profilePhotoFallback?: string;
}

const AboutMeContent = ({
  tagline,
  profilePhotoSrc,
  profilePhotoAlt,
  profilePhotoFallback
}: AboutMeContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6">
      <div className="flex-shrink-0">
        <ProfilePhoto
          src={profilePhotoSrc}
          alt={profilePhotoAlt}
          fallback={profilePhotoFallback}
        />
      </div>
      <div className="flex-1 md:self-center">
        <AboutMeTagline tagline={tagline} />
      </div>
    </div>
  );
};

export default AboutMeContent;
