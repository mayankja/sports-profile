import React, { useState } from "react";
import { ExpandMore } from "@material-ui/icons";
import d3graph from "./d3";

function Graph(props) {
  const [showStrokeDiaglog, setShowStrokeDialog] = useState(false);

  React.useEffect(() => {
    d3graph(props.sgTrendData, props.toggleTheme);
  }, [props.sgTrendData, props.toggleTheme]);

  const selectedTheme = (theme1, theme2) => props.toggleTheme ? theme2 : theme1;

  return (
    <div
      className={`${selectedTheme(
        "graph-container-light",
        "graph-container-dark"
      )}`}
      onClick={() => {
        showStrokeDiaglog && setShowStrokeDialog(false);
      }}
    >
      <div className={`position-relative d-inline-flex`}>
        <button
          id="strokes-gained"
          onClick={() => {
            setShowStrokeDialog(!showStrokeDiaglog);
          }}
          className={`${selectedTheme(
            "text-black-100",
            "text-white"
          )} graph-activity-button fs-4 px-3 ${showStrokeDiaglog
            ? selectedTheme("custom-bg-gray", "bg-transparent")
            : "bg-transparent"
            } border-0`}
        >
          Strokes Gained Total - last 10 <ExpandMore />
        </button>
        {showStrokeDiaglog && (
          <div
            id="strokes-gained-dropdown"
            className="position-absolute d-flex flex-column justify-content-end bg-white graph-activity-dropdown"
          >
            <li>Last 10</li>
            <li>Last 15</li>
            <li>Last 20</li>
          </div>
        )}
      </div>
      <div className="graph-container">
        <svg
          id={`rounds-graph`}
          className="custom-padding-bottom"
          height={210}
          width={330}
        />
      </div>
    </div>
  );
}

export { Graph };
