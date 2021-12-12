import React from "react";
import { RecoilRoot } from "recoil";
import { AuthNavigation } from "./src/navigations/auth.navigation";

export const App = () => (
  <RecoilRoot>
    <AuthNavigation />
  </RecoilRoot>
);
