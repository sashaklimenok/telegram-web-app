import { FC, ReactNode } from "react";
import "./baseTemplate.css";

interface BaseTemplateProps {
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export const BaseTemplate: FC<BaseTemplateProps> = ({
  header,
  content,
  footer,
}) => {
  return (
    <div className="base-template">
      {header}
      {content}
      {footer}
    </div>
  );
};
