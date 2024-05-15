import React from "react";
import { GTQStep } from "./GTQStep";
import { Profile } from "@/types/types";
import { GQTStepMobile } from "./GTQStepMobile";

type IGTQStepBase = {
  profile: Profile;
};

const GTQStepBase = ({ profile }: IGTQStepBase) => {
  return (
    <>
      <div className="hidden lg:block">
        <GTQStep profile={profile} />
      </div>
      <div className="block lg:hidden">
        <GQTStepMobile profile={profile} />
      </div>
    </>
  );
};

export { GTQStepBase };
