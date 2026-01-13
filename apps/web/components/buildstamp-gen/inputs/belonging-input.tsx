import { Belonging, belongings } from "@/lib/fields/belonging";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

function groupBelongings() {
  return belongings.reduce<Record<Belonging["type"], Belonging[]>>(
    (acc, belonging) => {
      if (!acc[belonging.type]) {
        acc[belonging.type] = [];
      }
      acc[belonging.type].push(belonging);
      return acc;
    },
    { org: [], personal: [] }
  );
}

function getBelongingTypeName(type: Belonging["type"]) {
  switch (type) {
    case "org":
      return "Organizations";
    case "personal":
      return "Personal Projects";
    default:
      return "Unknown";
  }
}

export default function BelongingInput(
  props: React.ComponentProps<typeof Select>
) {
  return (
    <Select {...props}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a belonging" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(groupBelongings()).map(([type, belongings]) => (
          <SelectGroup key={type}>
            <SelectLabel>
              {getBelongingTypeName(type as Belonging["type"])}
            </SelectLabel>
            {belongings.map((belonging) => (
              <SelectItem key={belonging.id} value={belonging.id}>
                <span className="font-medium">{belonging.display.name}</span>
                <span className="text-muted-foreground font-mono">
                  {belonging.abbr()}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
