import React from "react";
import { ProfileCard, ToggleButton } from "./components";
import { getAllProfileData } from "./helpers/utility";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [toggleTheme, setToggleTheme] = React.useState(false);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  const profiles = getAllProfileData();

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center my-4">
        <ToggleButton toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {current > 0 && (
          <ArrowBackIos
            onClick={() => { setCurrent(current - 1); setLoading(true); }}
            color="primary"
            style={{ cursor: 'pointer' }}
          />
        )}
        {profiles.map(
          (item, index) =>
            index === current && (
              <ProfileCard
                key={index}
                profile={item}
                loading={loading}
                toggleTheme={toggleTheme}
              />
            )
        )}
        {current < profiles.length - 1 && (
          <ArrowForwardIos
            onClick={() => { setCurrent(current + 1); setLoading(true); }}
            color="primary"
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
