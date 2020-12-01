import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Graph } from "./Graph";
import { getFormattedGraphData } from "../../helpers/utility";
import CardHeader from "./CardHeader";
import "./styles.css";

function ProfileCard(props) {
  const formattedGraphData = getFormattedGraphData(props.profile);
  const selectedTheme = (theme1, theme2) => props.toggleTheme ? theme2 : theme1;

  return (
    <div
      className={`custom-container p-0 ${selectedTheme(
        "bg-light border-light",
        "border-dark-100 bg-dark-100"
      )} `}
    >
      <CardHeader data={props.profile} {...props} />
      {!props.loading && (
        <div
          className={`w-100 ${selectedTheme(
            "custom-border-bottom-light",
            "custom-border-bottom-dark"
          )} user-activity fs-3`}
        >
          <p
            className={`custom-padding-x m-0 text-left ${selectedTheme(
              "text-black-70",
              "text-grey-100"
            )}`}
          >
            Latest Activity:{" "}
            <span
              id="latest-activity"
              className={`${selectedTheme("text-black-100", "text-white")}`}
            >
              {`${props.profile.MostRecentRound.Score} (${props.profile.MostRecentRound.ScoreToPar}), ${props.profile.MostRecentRound.Course}, UK`}
            </span>
          </p>
        </div>
      )}
      {props.loading && (
        <div className="custom-padding-x mt-5">
          <Skeleton animation="wave" width={"100%"} height={25} />
        </div>
      )}
      {!props.loading && <Graph sgTrendData={formattedGraphData} {...props} />}
      {props.loading && (
        <div className="custom-padding-x">
          <Skeleton animation="wave" width={"100%"} height={300} />
        </div>
      )}
    </div>
  );
}

export { ProfileCard };
