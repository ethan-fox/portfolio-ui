import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  fallback?: string;
}

const ProfilePhoto = ({ src, alt = 'Profile photo', fallback = 'EF' }: ProfilePhotoProps) => {
  return (
    <div className="flex justify-center md:justify-start">
      <Avatar className="w-[clamp(6rem,20vw,10rem)] h-[clamp(6rem,20vw,10rem)] border-[clamp(2px,0.5vw,4px)] border-primary/20">
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback className="text-[clamp(1.5rem,4vw,3rem)] font-bold bg-primary/10 text-primary">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfilePhoto;
