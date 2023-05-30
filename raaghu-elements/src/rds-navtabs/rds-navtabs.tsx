import React, { Fragment, ReactNode, useEffect, useState } from "react";
import "./rds-navtabs.css";

import RdsIcon from "../rds-icon";

export interface RdsNavtabsProps {
  children?: ReactNode;
  navtabsItems: {
    label: string;
    tablink?: string;
    ariacontrols?: string;
    icon?: string;
    subText?: string;
    disabled?: boolean;
    id: any;
  }[];
  type: "default" | "pills" | "tabs" | "vertical";
  fill?: boolean;
  justified?: boolean;
  activeNavtabOrder?: (id: any) => void;
  //Addded isNextPressed and activeNavTabId prop for changing active tab in page when next is pressed.
  activeNavTabId?: string;
  isNextPressed?: boolean;
  onClick?: React.MouseEvent<HTMLElement>;
}

const RdsNavtabs = (props: RdsNavtabsProps) => {
  const [activeNavTabId,setActiveNavTabId]=useState(props.activeNavTabId)
  const [activeTabKey, setActiveTabKey] = useState(props.navtabsItems[0].id);
  useEffect(() => {
    props.activeNavtabOrder != undefined &&
      props.activeNavtabOrder(activeTabKey);
  }, [activeTabKey, props.navtabsItems]);
  useEffect(() => {
    if (props.isNextPressed === true) setActiveTabKey(props.activeNavTabId);
  }, [props.isNextPressed]);

  useEffect(()=>{
    setActiveNavTabId(props.activeNavTabId)
  },[props.activeNavTabId])
  return (
    <div >
      <ul
        className={
          "nav mobile-ul-tabs flex" +
          (props.type === "pills" 
            ? "  nav-pills"
            : props.type === "tabs"
              
            ? "flex-lg-row flex-md-row flex-xl-row flex-xxl-row justify-content-start nav-tabs pb-0 pb-lg-0 pb-md-0 pb-xl-0 pb-xxl-0"
            : props.type === "vertical"
            ? " flex-column nav-pills col-12 h-100 border-end border-end bs-md-0"
            : " nav-tabs") +
          (props.fill ? " nav-fill" : "") +
          (props.justified ? " nav-justified" : "")
        }
      >
        {props.navtabsItems.map((navtabsItem) => (
          <li className="nav-item py-xxl-1 py-xl-1 py-lg-1 py-md-1 py-0 cursor-pointer" key={navtabsItem.id}>
            <a className={
                "nav-link rounded-0 px-3 pe-auto " +
                (navtabsItem.id === activeTabKey ||
                  navtabsItem.id === activeNavTabId
                  ?( props.type === "tabs" ?" border-bottom border-primary border-3 text-primary ":" active") 
                  : "inactive") +
                  (navtabsItem.disabled ? " disabled " : "")
              }
  
              aria-current="page"
              data-bs-target={navtabsItem.tablink}
              aria-controls={navtabsItem.ariacontrols}
              onClick={() => setActiveTabKey(navtabsItem.id)}
            >
              {navtabsItem.icon && (
                <span className="pe-3">
                  <RdsIcon
                    name={navtabsItem.icon}
                    height="20px"
                    width="20px"
                    stroke={true}
                  />
                </span>
              )}
              <div className="fw-semibold">{navtabsItem.label}</div>
            </a>
          </li>
        ))}
      </ul>
      {props.children}
    </div>
  );
};

export default RdsNavtabs;
