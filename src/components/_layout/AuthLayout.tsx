import React from "react";
import PhotoSlide from "../common/PhotoSlide";
import Overlay from "../common/Overlay";
import TitleDescription from "../common/TitleDescription";

const AuthLayout = ({
  onboardPhotos,
  children,
  overlay,
  overlayTitle,
  overlayDescription,
}: {
  onboardPhotos: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayTitle?: string;
  overlayDescription?: string;
}) => {
  return (
    <section className="h-screen overflow-hidden flex-center">
      <div className="relative hidden w-1/2 h-full md:block">
        <PhotoSlide photos={onboardPhotos} containerStyle="size-full" />

        {overlay && (
          <Overlay containerStyle="bg-custom-orange-900/10 flex-center pl-20 pr-[200px]">
            <TitleDescription
              titleStyle="text-custom-orange-900 text-[70px] font-DMSansBold"
              descriptionStyle="font-DMSansMedium mt-1 text-white"
              title={overlayTitle ?? "default"}
              description={overlayDescription}
            />
          </Overlay>
        )}
      </div>

      <div className="w-full h-full overflow-hidden overflow-y-scroll md:w-1/2 padded">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
