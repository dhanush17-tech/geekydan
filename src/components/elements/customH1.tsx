type CustomH1Props = React.HTMLAttributes<HTMLHeadingElement>;

export const CustomH1: React.FC<CustomH1Props> = (props) => {
  return <h1 className="text-white" {...props} />;
};
