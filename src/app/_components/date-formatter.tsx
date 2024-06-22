import { parse, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parse(dateString, "yyyy/MM/dd HH:mm", new Date());
  return <time dateTime={dateString}>{format(date, "MMMM d, yyyy HH:mm")}</time>;
};

export default DateFormatter;
