import React from "react";
import { Switch } from '@material-ui/core';

function ToggleButton(props) {

    return (
        <div className="d-flex justify-content-end" style={{ width: '25%' }}>
            <Switch
                id="switch-theme"
                checked={props.toggleTheme}
                onChange={() => { props.setToggleTheme(!props.toggleTheme) }}
                color="primary"
                name="toggleTheme"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    );
}

export { ToggleButton };
