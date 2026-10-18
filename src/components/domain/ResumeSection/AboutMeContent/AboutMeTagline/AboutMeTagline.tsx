interface AboutMeTaglineProps {
  tagline: string;
}

const AboutMeTagline = ({ tagline }: AboutMeTaglineProps) => {
  return (
    <p className="text-md text-center md:text-left leading-relaxed text-foreground mb-4 mx-[clamp(0rem,4vw,4rem)]">
      {tagline}
    </p>
  );
};

export default AboutMeTagline;
