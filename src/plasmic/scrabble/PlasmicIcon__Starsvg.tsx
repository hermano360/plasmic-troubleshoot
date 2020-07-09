/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StarsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StarsvgIcon(props: StarsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      preserveAspectRatio={"xMidYMid meet"}
      viewBox={"0 0 1087.000000 1024.000000"}
      height={"1em"}
      width={"1em"}
      version={"1.0"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <metadata>
        Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>

      <g
        stroke={"none"}
        fill={"currentColor"}
        transform={"translate(0.000000,1024.000000) scale(0.100000,-0.100000)"}
      >
        <path
          d={
            "M5385 9859 c-11 -33 -1175 -3621 -1175 -3625 0 -2 -864 -5 -1921 -6\nl-1920 -3 1550 -1125 c852 -619 1550 -1129 1550 -1133 1 -7 -1011 -3133 -1144\n-3535 -20 -62 -29 -102 -22 -99 7 2 697 502 1534 1110 837 608 1530 1111 1540\n1118 17 10 201 -121 1544 -1096 838 -609 1532 -1114 1542 -1123 9 -8 20 -13\n23 -9 4 4 -1127 3510 -1167 3613 -7 20 124 118 1449 1080 801 582 1500 1090\n1552 1129 l95 70 -1919 5 -1918 5 -589 1814 c-324 998 -592 1817 -594 1819 -3\n3 -7 -1 -10 -9z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default StarsvgIcon;
/* prettier-ignore-end */
