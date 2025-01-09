import axiosRetry from 'axios-retry';
import axios from 'axios';
import toast from 'react-hot-toast';

axiosRetry(axios, {
  retries: 2,
  retryDelay: () => 2000, // try again after 2s
  retryCondition: error =>
    (error.response && error.response.status >= 500) ||
    (error.isAxiosError && !error.response), // 5xx error or network error occured
});

export async function submitTicket(ticket, id) {
  try {
    const result = await axios.post(
      'https://httpstat.us/random/200,201,204,500-504/cors',
      ticket,
    );

    if (
      result.status === 200 ||
      result.status === 201 ||
      result.status === 204
    ) {
      toast.success(`Билет №${id} успешно отправлен`);
    } else {
      toast.error(`Не получилось отправить билет №${id}`);
    }
  } catch (error) {
    toast.error(`Ошибка при отправке билета №${id}`);
    console.error(error);
  }
}
