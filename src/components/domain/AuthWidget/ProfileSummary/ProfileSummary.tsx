import DesktopProfileSummary from './DesktopProfileSummary';
import MobileProfileSummary from './MobileProfileSummary';

interface ProfileSummaryProps {
  displayName: string | null;
  photoURL: string | null;
  onSignOut: () => Promise<void>;
  className?: string;
}

const ProfileSummary = (props: ProfileSummaryProps) => {
  return (
    <>
      <div className="desktop:hidden">
        <MobileProfileSummary {...props} />
      </div>
      <div className="hidden desktop:block">
        <DesktopProfileSummary {...props} />
      </div>
    </>
  );
};

export default ProfileSummary;
