interface CardProps {
  title: string;
  description: string;
  url: string;
  onClick: (url: string) => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  onClick,
  url,
}) => {
  return (
    <div className="card" onClick={() => onClick(url)}>
      <p className="tip">{title}</p>
      <p className="second-text">{description}</p>
    </div>
  );
};
