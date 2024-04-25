import React from "react";
import { FollowSuggestion, RecommendedTopics, StaffPick } from "../../exports";

function Widgets() {
  return (
    <div className="flex flex-col gap-5 h-full overflow-auto">
      <StaffPick />
      <RecommendedTopics />
      <FollowSuggestion />
    </div>
  );
}

export default Widgets;
