import { FC, ReactNode } from "react";
import "./baseTemplate.css";

interface BaseTemplateProps {
  header: ReactNode;
  children: ReactNode;
}

export const BaseTemplate: FC<BaseTemplateProps> = ({ header, children }) => {
  return (
    <div className="base-template">
      {header}
      <div className="base-template-content">{children}</div>
    </div>
  );
};
