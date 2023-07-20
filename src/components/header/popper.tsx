import { useRef, useState } from "react";
import Link from "next/link";
import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

interface MenuItem {
  id: string;
  name: string;
  links: string;
  namesub: { id: string; sub: string; links: string }[];
}

interface HoverMenuWithTransitionProps {
  menuItem: MenuItem;
}

const HoverMenuWithTransition: React.FC<HoverMenuWithTransitionProps> = ({
  menuItem,
}) => {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  console.log(menuItem);

  if (menuItem.namesub && menuItem.namesub.length > 0) {
    return (
      <>
        <p
          ref={ref}
          {...anchorProps}
          className="circularMedium text-lg-center ml-5 mr-5 cursor-pointer text-white"
        >
          {menuItem.name}
        </p>

        <ControlledMenu
          {...hoverProps}
          {...menuState}
          anchorRef={ref}
          onClose={() => toggle(false)}
        >
          {menuItem.namesub.map((link, i) => {
            return (
              <MenuItem key={i}>
                <Link href={{pathname: menuItem.namesub[i]?.links}} key={1}>
                  <p className="circularMedium text-lg-center text-white">
                    {menuItem.namesub[i]?.sub}
                  </p>
                </Link>
              </MenuItem>
            );
          })}
        </ControlledMenu>
      </>
    );
  } else {
    return (
      <>
        <Link href={menuItem.links} key={1}>
          <p className="circularMedium text-lg-center ml-5 mr-5 text-white">
            {menuItem.name}
          </p>
        </Link>
      </>
    );
  }
};

export default HoverMenuWithTransition;
