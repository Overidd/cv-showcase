export interface TemplateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  main?: React.ReactNode;
  sidebar?: React.ReactNode;
}