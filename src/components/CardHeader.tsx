interface CardHeaderProps {
    title: string;
    subtitle?: string;
}

const CardHeader = ({title, subtitle}: CardHeaderProps) => {
  return (
    <span>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm text-muted-foreground">
        {subtitle}
      </p>
    </span>
  );
}

export default CardHeader
