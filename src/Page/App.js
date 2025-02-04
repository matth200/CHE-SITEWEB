import logo from '../image/CHE.png';
import styles from '../css/App.scss';
import "../css/App.scss";

import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";


const Trail= ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

function AppPage() {
  const [open, set] = useState(true);
return (
  <div className={"AppPage Page"} onClick={() => set((state) => !state)}>
    <Trail open={open}>
      <span>Cyber</span>
      <span>Humanum</span>
      <span>Est</span>
    </Trail>
  </div>
);
}

export default AppPage;
