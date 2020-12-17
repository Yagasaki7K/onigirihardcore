import { parseISO, format } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz';

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  const znDate = zonedTimeToUtc(date, 'America/Sao_Paulo');
  const ptbr = require('date-fns/locale/pt');

  return <time dateTime={dateString}>{format(znDate, "'Publicado em ' dd 'de' MMMM'", { locale: ptbr })}</time>
  
}

export default DateFormatter
