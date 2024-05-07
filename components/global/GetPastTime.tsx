import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

type ParamsProps = {
  past_time: string;
};
const GetPastTime = ({ past_time }: ParamsProps): React.ReactElement => {
  const pastTime = formatDistanceToNow(past_time, {
    addSuffix: true,
    locale: id,
  });
  return <p>{pastTime}</p>;
};

export default GetPastTime;
