import React from "react";
import LeftContainer from "./LeftContainer";

import { TabLayout, TabMenu } from "./TabLayout";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "800px",
        width: "1168px",
        marginTop: "2px",
      }}
    >
      <LeftContainer />
      <TabLayout />
    </div>
  );
}
