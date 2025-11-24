import ProfilePhoto from '@/components/domain/ResumeSection/AboutMeContent/ProfilePhoto/ProfilePhoto';
import AboutMeText from '@/components/domain/ResumeSection/AboutMeContent/AboutMeText/AboutMeText';

interface AboutMeContentProps {
  content: string;
  profilePhotoSrc?: string;
  profilePhotoAlt?: string;
  profilePhotoFallback?: string;
}

const AboutMeContent = ({
  content,
  profilePhotoSrc,
  profilePhotoAlt,
  profilePhotoFallback
}: AboutMeContentProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="flex-shrink-0">
        <ProfilePhoto
          src={profilePhotoSrc}
          alt={profilePhotoAlt}
          fallback={profilePhotoFallback}
        />
      </div>
      <div className="flex-1">
        <AboutMeText content={content} />
      </div>
    </div>
  );
};

export default AboutMeContent;
