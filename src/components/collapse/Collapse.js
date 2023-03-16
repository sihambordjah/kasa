//import React, { useState } from "react";
import Accordion from "./Accordion";

import CollapseData from "../../datas/collapses.json";

function Collapse() {
  return (
    <>
      <div className="collapse">
        <div className="collapse__dropdown">
          {CollapseData.map((item) => {
            return (
              <div key={item.id}>
                <Accordion {...item} />
                {/* <Accordion content={item.content} title={item.title} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Collapse;
