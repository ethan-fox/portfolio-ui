import RotatingDomainText from "./RotatingDomainText";

const HomeBanner = () => {
  return (
    <div className="bg-primary py-[clamp(3rem,8vh,6rem)]">
      <div className="space-y-8">
        <div>
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono font-semibold text-center max-w-[clamp(20rem,90vw,48rem)] mx-auto whitespace-nowrap">
            ethan-builds <RotatingDomainText />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
