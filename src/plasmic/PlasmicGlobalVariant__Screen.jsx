import React from "react";

export const ScreenContext = React.createContext(undefined);

const screenVariants = ["Mobile", "Tablet", "Laptop", "Desktop"];

const screenQueries = [
  "(min-width:0px) and (max-width:480px)",
  "(min-width:480px) and (max-width:768px)",
  "(min-width:768px) and (max-width:1024px)",
  "(min-width:1024px) and (max-width:3000px)",
];

function matchScreenVariant() {
  const index = screenQueries.findIndex((q) => window.matchMedia(q).matches);
  return index >= 0 ? screenVariants[index] : undefined;
}

export function ScreenVariantProvider(props) {
  const [value, setValue] = React.useState(matchScreenVariant());
  React.useEffect(() => {
    const handler = () => {
      const newValue = matchScreenVariant();
      if (newValue !== value) {
        setValue(newValue);
      }
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [value]);
  return (
    <ScreenContext.Provider value={value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export default ScreenContext;
