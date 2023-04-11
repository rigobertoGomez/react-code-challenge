import { useState, useEffect } from "react";
import Tag, { TagProps } from "./Tag";
import { formatDate } from "@/utilities";
import { AlarmIcon } from "@/components/Icons";
import clsx from "clsx";

interface TimerTagProps {
  date: Date;
  variant: "default" | "flat" | "indicator";
}

const variantColor = (variant: string) =>
  ({
    red: { background: "bg-primary-4", text: "text-primary-4" },
    yellow: { background: "bg-tertiary-4", text: "text-tertiary-4" },
    green: { background: "bg-secondary-4", text: "text-secondary-4" },
    default: { background: "bg-neutral-1", text: "text-neutral-1" },
  }[variant]);
  
const TimerTagIndicator = ({ variant = "default" }: { variant: string }) => {
  return (
    <span
      className={clsx(
        "h-[48px] w-1 inline-flex",
        variantColor(variant)?.background
      )}
    ></span>
  );
};

function TimerTag({ date, variant }: TimerTagProps) {
  const [title, setTitle] = useState<string>();
  const [tagVariant, setTagVariant] = useState<TagProps["variant"]>("default");

  const getTaskTime = (date: Date) => {
    const today = new Date();
    const taskDate = new Date(date);
    const twoDaysAgo = new Date(date);
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const title = formatDate(date);

    // Set title & color
    if (today >= twoDaysAgo && today < taskDate) {
      setTagVariant("yellow");
      setTitle(title);
      return;
    } else if (
      taskDate.toDateString() === today.toDateString() ||
      taskDate > today
    ) {
      const onTimetitle =
        taskDate.toDateString() === today.toDateString() ? "Today" : title;
      setTitle(onTimetitle);
      setTagVariant("default");
      return;
    } else  {      
      setTagVariant("red");
      setTitle(title);
      return;
    }
  };

  useEffect(() => {
    if (date) getTaskTime(date);
  }, [date]);

  if (variant === "flat") {
    return (
      <span className={clsx("inline-flex", variantColor(tagVariant)?.text)}>
        {title}
      </span>
    );
  }
  if (variant === "indicator") {
    return <TimerTagIndicator variant={tagVariant || "default"} />;
  }
  return (
    <Tag title={title} variant={tagVariant || "default"}>
      {<AlarmIcon className="w-5 h-5" />}
    </Tag>
  );
}

export default TimerTag;
