import { getBuildDateAbbr } from "@/lib/fields/misc";
import { Button } from "@workspace/ui/components/button";
import { Calendar } from "@workspace/ui/components/calendar";
import { Label } from "@workspace/ui/components/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@workspace/ui/components/popover";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function BuildDateInput({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="w-48 justify-between font-normal"
        >
          {date ? (
            <>
              <span>{date.toLocaleDateString()}</span>
              <span className="mr-auto font-mono text-muted-foreground">
                {getBuildDateAbbr(date)}
              </span>
            </>
          ) : (
            "Select date"
          )}
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
