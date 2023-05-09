type Props = {
  labelName?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function TextInput(props: Props) {
  const { labelName, name, value, onChange, placeholder } = props;
  return (
    <section className="flex flex-col pb-4">
      <label className="mb-[4px]">{labelName}</label>
      <input
        className="h-[40px] border border-[#ddd] rounded-[5px] pl-[8px]"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </section>
  );
}
