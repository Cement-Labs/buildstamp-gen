import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@workspace/ui/components/select";

export default function AbbrSelect<
  V extends { id: string; display: { name: string }; abbr: () => string },
>({
  id,
  placeholder,
  values,
  ...props
}: {
  id?: string;
  placeholder?: string;
  values: V[];
} & React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-full" id={id}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem key={value.id} value={value.id}>
            <span className="font-medium">{value.display.name}</span>
            <span className="text-muted-foreground font-mono">
              {value.abbr()}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
