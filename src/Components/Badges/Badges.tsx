interface BadgeProps {
  type: string;
  text: string;
}

export const Badges: React.FC<BadgeProps> = ({ type, text }) => {
  const formatedType = type.toLowerCase();
  if (formatedType === "active") {
    return (
      <div className="bg-green-900 text-white px-2 py-1 rounded-md">{text}</div>
    );
  }
  if (formatedType === "inactive") {
    return (
      <div className="bg-red-900 text-white px-2 py-1 rounded-md">{text}</div>
    );
  }
};
