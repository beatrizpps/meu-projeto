type TitleProps = {
  text: string;
  name?: string;
}

function Title(props: TitleProps) {
  console.log(props.text);
  console.log(props.name);
  return <h1 className="text-2xl font-bold"> {props.name}</h1>
}

export default function Home() {
  return (
    <div>
      <Title text="Olá" name="Beatriz" />
    </div>
  );
}