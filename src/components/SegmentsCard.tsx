import { Badge } from "@/components/ui/badge";

type myCardComponents = {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  subtext: string;
  badge?: string;
};

const SegmentsCard = ({
  imgSrc,
  imgAlt,
  heading,
  subtext,
  badge,
}: myCardComponents) => {
  return (
    <div className="border h-[53dvh] w-full rounded-md">
      <div>
        <img src={imgSrc} alt={imgAlt} className={"w-full"} />
        <span className="flex flex-col p-3">
          <span className="flex space-x-2 items-center">
          <h2 className="font-bold text-lg">{heading}</h2>
            {badge && (
              <Badge variant={'destructive'} className="text-xs font-semibold">{badge}</Badge>
            )}
          </span>
          <p className="text-sm text-muted-foreground mt-2">{subtext}</p>
        </span>
      </div>
    </div>
  );
};

export default SegmentsCard;
