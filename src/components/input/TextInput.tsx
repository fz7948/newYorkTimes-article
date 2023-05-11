type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function TextInput(props: Props) {
  const { name, value, onChange, placeholder } = props;
  return (
    <section className="flex flex-col">
      <input
        className="h-[40px] border border-[#c4c4c4] rounded-[5px] pl-[12px]"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </section>
  );
}
