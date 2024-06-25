import IconButton from "../../IconButton";

interface Props {
  description: string;
  cardTitle: string;
  index: number;
}

export default function Card({ description, cardTitle, index }: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-[32px] mb-4">{cardTitle}</span>
      <p className="w-full whitespace-normal text-[16px] leading-[1.9] tracking-[0.02em] capitalize lg:whitespace-pre-line">
        {description}
      </p>
      <div className="mt-8">
        <IconButton text="Know More" hideIcon={index !== 0} />
      </div>
    </div>
  );
}
