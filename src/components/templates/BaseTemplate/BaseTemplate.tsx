import { FC, ReactNode } from "react";
import "./baseTemplate.css";

interface BaseTemplateProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export const BaseTemplate: FC<BaseTemplateProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div className="base-template">
      {header}
      <div className="base-template-content">{children}</div>
      {footer}
    </div>
  );
};
