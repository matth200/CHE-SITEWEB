import logo from '../image/CHE.png';
import "../css/App.scss";

import React, { useState } from "react";
import Typewriter from '../Component/TypeWriter';

function AppPage() {
  const [open, set] = useState(true);
return (
  <div className="AppPage Page">
    <Typewriter text="CyberHumanum'Est" speed={100} size={40}/>
  </div>
);
}

export default AppPage;
