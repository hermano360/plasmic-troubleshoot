/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pKf2ynt7Z23Yke58cAsgbA
// Component: AJ3Q5ye7Jj
import React from "react";
import { hasVariant, classNames, Renderer } from "@plasmicapp/react-web";
import { ScreenContext } from "../PlasmicGlobalVariant__Screen"; // plasmic-import: j42tMHNrGHwjL/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss
import "./plasmic_scrabble.css"; // plasmic-import: pKf2ynt7Z23Yke58cAsgbA/projectcss
import "./PlasmicBox.css"; // plasmic-import: AJ3Q5ye7Jj/css
import StarsvgIcon from "./PlasmicIcon__Starsvg"; // plasmic-import: uxS33BGZ_/icon

const PlasmicBox__RenderFuncs = {
  root: (opts) => {
    const variants = opts.variants || {};
    const args = opts.args || {};
    const overrides = opts.overrides || {};
    return (
      <div
        data-plasmic-override={overrides.root}
        className={classNames({
          "Box__root--baseDesktop__PkbyuUNVzC_4PwYE": true,
          "Box__root--baseLaptop__PkbyuUNVzC_-TTY2": true,
          "Box__root--baseMobile__PkbyuUNVzC_igi8n": true,
          "Box__root--baseTablet__PkbyuUNVzC_mblwb": true,
          "Box__root--doubleLetterDesktop__PkbyugGWDs_4PwYE": hasVariant(
            variants,
            "type",
            "doubleLetter"
          ),

          "Box__root--doubleLetterLaptop__PkbyugGWDs_-TTY2": hasVariant(
            variants,
            "type",
            "doubleLetter"
          ),

          "Box__root--doubleLetterMobile__PkbyugGWDs_igi8n": hasVariant(
            variants,
            "type",
            "doubleLetter"
          ),

          "Box__root--doubleLetterTablet__PkbyugGWDs_mblwb": hasVariant(
            variants,
            "type",
            "doubleLetter"
          ),

          "Box__root--doubleLetter__PkbyugGWDs": hasVariant(
            variants,
            "type",
            "doubleLetter"
          ),

          "Box__root--doubleWordDesktop__PkbyuLP05N_4PwYE": hasVariant(
            variants,
            "type",
            "doubleWord"
          ),

          "Box__root--doubleWordLaptop__PkbyuLP05N_-TTY2": hasVariant(
            variants,
            "type",
            "doubleWord"
          ),

          "Box__root--doubleWordMobile__PkbyuLP05N_igi8n": hasVariant(
            variants,
            "type",
            "doubleWord"
          ),

          "Box__root--doubleWordTablet__PkbyuLP05N_mblwb": hasVariant(
            variants,
            "type",
            "doubleWord"
          ),

          "Box__root--doubleWord__PkbyuLP05N": hasVariant(
            variants,
            "type",
            "doubleWord"
          ),

          "Box__root--startDesktop__Pkbyuvyn0d_4PwYE": hasVariant(
            variants,
            "type",
            "start"
          ),

          "Box__root--startLaptop__Pkbyuvyn0d_-TTY2": hasVariant(
            variants,
            "type",
            "start"
          ),

          "Box__root--startMobile__Pkbyuvyn0d_igi8n": hasVariant(
            variants,
            "type",
            "start"
          ),

          "Box__root--startTablet__Pkbyuvyn0d_mblwb": hasVariant(
            variants,
            "type",
            "start"
          ),

          "Box__root--start__Pkbyuvyn0d": hasVariant(variants, "type", "start"),
          "Box__root--tripleLetterDesktop__PkbyurLwJW_4PwYE": hasVariant(
            variants,
            "type",
            "tripleLetter"
          ),

          "Box__root--tripleLetterLaptop__PkbyurLwJW_-TTY2": hasVariant(
            variants,
            "type",
            "tripleLetter"
          ),

          "Box__root--tripleLetterMobile__PkbyurLwJW_igi8n": hasVariant(
            variants,
            "type",
            "tripleLetter"
          ),

          "Box__root--tripleLetterTablet__PkbyurLwJW_mblwb": hasVariant(
            variants,
            "type",
            "tripleLetter"
          ),

          "Box__root--tripleLetter__PkbyurLwJW": hasVariant(
            variants,
            "type",
            "tripleLetter"
          ),

          "Box__root--tripleWordDesktop__Pkbyu3Dyje_4PwYE": hasVariant(
            variants,
            "type",
            "tripleWord"
          ),

          "Box__root--tripleWordLaptop__Pkbyu3Dyje_-TTY2": hasVariant(
            variants,
            "type",
            "tripleWord"
          ),

          "Box__root--tripleWordMobile__Pkbyu3Dyje_igi8n": hasVariant(
            variants,
            "type",
            "tripleWord"
          ),

          "Box__root--tripleWordTablet__Pkbyu3Dyje_mblwb": hasVariant(
            variants,
            "type",
            "tripleWord"
          ),

          "Box__root--tripleWord__Pkbyu3Dyje": hasVariant(
            variants,
            "type",
            "tripleWord"
          ),

          Box__root__Pkbyu: true,
          "plasmic-default__all": true,
          "plasmic-default__div": true
        })}
      >
        {PlasmicBox__RenderFuncs.svg({
          variants,
          args,
          overrides
        })}

        {PlasmicBox__RenderFuncs.box({
          variants,
          args,
          overrides
        })}
      </div>
    );
  },
  svg: (opts) => {
    const variants = opts.variants || {};
    const args = opts.args || {};
    const overrides = opts.overrides || {};
    return (
      (hasVariant(variants, "type", "start") ? true : false) && (
        <StarsvgIcon
          data-plasmic-override={overrides.svg}
          className={classNames({
            "Box__svg--startDesktop__Bl6YYvyn0d_4PwYE": hasVariant(
              variants,
              "type",
              "start"
            ),

            "Box__svg--startLaptop__Bl6YYvyn0d_-TTY2": hasVariant(
              variants,
              "type",
              "start"
            ),

            "Box__svg--start__Bl6YYvyn0d": hasVariant(
              variants,
              "type",
              "start"
            ),

            "Box__svg--tripleLetterDesktop__Bl6YYrLwJW_4PwYE": hasVariant(
              variants,
              "type",
              "tripleLetter"
            ),

            Box__svg__Bl6YY: true,
            "plasmic-default__all": true,
            "plasmic-default__svg": true
          })}
          role={"img"}
          {...{}}
        ></StarsvgIcon>
      )
    );
  },
  box: (opts) => {
    return <PlasmicBox__FCs.box opts={opts} />;
  }
};

const PlasmicBox__FCs = {
  root: undefined,
  svg: undefined,
  box: (props) => {
    const { opts } = props;
    const variants = opts.variants || {};
    const args = opts.args || {};
    const overrides = opts.overrides || {};
    const globalVariants = {
      screen: React.useContext(ScreenContext)
    };

    return (
      (hasVariant(variants, "type", "start") ? false : true) && (
        <div
          data-plasmic-override={overrides.box}
          className={classNames({
            "Box__box--baseMobile__W9XfjUNVzC_igi8n": true,
            "Box__box--doubleLetterDesktop__W9XfjgGWDs_4PwYE": hasVariant(
              variants,
              "type",
              "doubleLetter"
            ),

            "Box__box--doubleLetterLaptop__W9XfjgGWDs_-TTY2": hasVariant(
              variants,
              "type",
              "doubleLetter"
            ),

            "Box__box--doubleLetterMobile__W9XfjgGWDs_igi8n": hasVariant(
              variants,
              "type",
              "doubleLetter"
            ),

            "Box__box--doubleLetterTablet__W9XfjgGWDs_mblwb": hasVariant(
              variants,
              "type",
              "doubleLetter"
            ),

            "Box__box--doubleLetter__W9XfjgGWDs": hasVariant(
              variants,
              "type",
              "doubleLetter"
            ),

            "Box__box--doubleWordDesktop__W9XfjLP05N_4PwYE": hasVariant(
              variants,
              "type",
              "doubleWord"
            ),

            "Box__box--doubleWordLaptop__W9XfjLP05N_-TTY2": hasVariant(
              variants,
              "type",
              "doubleWord"
            ),

            "Box__box--doubleWordMobile__W9XfjLP05N_igi8n": hasVariant(
              variants,
              "type",
              "doubleWord"
            ),

            "Box__box--doubleWordTablet__W9XfjLP05N_mblwb": hasVariant(
              variants,
              "type",
              "doubleWord"
            ),

            "Box__box--doubleWord__W9XfjLP05N": hasVariant(
              variants,
              "type",
              "doubleWord"
            ),

            "Box__box--startLaptop__W9Xfjvyn0d_-TTY2": hasVariant(
              variants,
              "type",
              "start"
            ),

            "Box__box--startTablet__W9Xfjvyn0d_mblwb": hasVariant(
              variants,
              "type",
              "start"
            ),

            "Box__box--start__W9Xfjvyn0d": hasVariant(
              variants,
              "type",
              "start"
            ),

            "Box__box--tripleLetterDesktop__W9XfjrLwJW_4PwYE": hasVariant(
              variants,
              "type",
              "tripleLetter"
            ),

            "Box__box--tripleLetterLaptop__W9XfjrLwJW_-TTY2": hasVariant(
              variants,
              "type",
              "tripleLetter"
            ),

            "Box__box--tripleLetterMobile__W9XfjrLwJW_igi8n": hasVariant(
              variants,
              "type",
              "tripleLetter"
            ),

            "Box__box--tripleLetterTablet__W9XfjrLwJW_mblwb": hasVariant(
              variants,
              "type",
              "tripleLetter"
            ),

            "Box__box--tripleLetter__W9XfjrLwJW": hasVariant(
              variants,
              "type",
              "tripleLetter"
            ),

            "Box__box--tripleWordDesktop__W9Xfj3Dyje_4PwYE": hasVariant(
              variants,
              "type",
              "tripleWord"
            ),

            "Box__box--tripleWordLaptop__W9Xfj3Dyje_-TTY2": hasVariant(
              variants,
              "type",
              "tripleWord"
            ),

            "Box__box--tripleWordMobile__W9Xfj3Dyje_igi8n": hasVariant(
              variants,
              "type",
              "tripleWord"
            ),

            "Box__box--tripleWordTablet__W9Xfj3Dyje_mblwb": hasVariant(
              variants,
              "type",
              "tripleWord"
            ),

            "Box__box--tripleWord__W9Xfj3Dyje": hasVariant(
              variants,
              "type",
              "tripleWord"
            ),

            Box__box__W9Xfj: true,
            "plasmic-default__all": true,
            "plasmic-default__div": true
          })}
        >
          {hasVariant(variants, "type", "start")
            ? ""
            : hasVariant(variants, "type", "tripleLetter")
            ? "TRIple\nLetter\nScore"
            : hasVariant(variants, "type", "doubleLetter")
            ? "Double\nLetter\nScore"
            : hasVariant(variants, "type", "tripleWord")
            ? "Triple\nWord \nScore"
            : hasVariant(variants, "type", "doubleWord") &&
              hasVariant(globalVariants, "screen", "mobile")
            ? "Double\nWord \nScore"
            : hasVariant(variants, "type", "doubleWord")
            ? "Double\nWord \nScore"
            : ""}
        </div>
      )
    );
  }
};

class PlasmicBox__Renderer extends Renderer {
  constructor(variants, args) {
    super(variants, args, PlasmicBox__RenderFuncs, "root");
  }
  create(variants, args) {
    return new PlasmicBox__Renderer(variants, args);
  }
  getInternalVariantProps() {
    return ["type"];
  }
  getInternalArgProps() {
    return [];
  }
  forNode(name) {
    return super.forNode(name);
  }
}

export const PlasmicBox = (props) => {
  return new PlasmicBox__Renderer(props.variants || {}, props.args || {})
    .forNode("root")
    .withOverrides({
      root: props.root,
      svg: props.svg,
      box: props.box
    })
    .render();
};

PlasmicBox.svg = (props) => {
  return new PlasmicBox__Renderer(props.variants || {}, props.args || {})
    .forNode("svg")
    .withOverrides({
      svg: props.svg
    })
    .render();
};

PlasmicBox.box = (props) => {
  return new PlasmicBox__Renderer(props.variants || {}, props.args || {})
    .forNode("box")
    .withOverrides({
      box: props.box
    })
    .render();
};

PlasmicBox.createRenderer = () => new PlasmicBox__Renderer({}, {});

export default PlasmicBox;
/* prettier-ignore-end */
