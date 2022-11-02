type Props = {
  text: string;
};

export function Subtitle({ text }: Props) {
  return (
    <h2 className="font-medium text-2xl md:text-3xl">
      {text}
      <span className="text-red">...</span>
    </h2>
  );
}
