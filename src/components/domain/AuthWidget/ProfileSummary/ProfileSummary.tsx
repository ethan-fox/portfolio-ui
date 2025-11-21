import { PlatformVariant } from '@/model/PlatformVariant';
import DesktopProfileSummary from './DesktopProfileSummary';
import MobileProfileSummary from './MobileProfileSummary';

interface ProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
  variant: PlatformVariant;
}

const ProfileSummary = ({ variant, ...props }: ProfileSummaryProps) => {
  if (variant === PlatformVariant.MOBILE) {
    return <MobileProfileSummary {...props} />;
  }

  return <DesktopProfileSummary {...props} />;
};

export default ProfileSummary;
