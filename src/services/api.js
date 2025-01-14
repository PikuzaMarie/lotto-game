import axiosRetry from 'axios-retry';
import axios from 'axios';
import toast from 'react-hot-toast';

/**
 * Configures axios to retry failed requests based on certain conditions
 *
 * @param axios {object} - the axios instance to configure
 * @param retries {object} - number of retry attempts
 * @param retryDelay {function} - function that returns the delay in milliseconds
 * before the next retry
 * @param retryCondition {function} - function that evaluates
 * whether to retry the request based on the error response
 */
axiosRetry(axios, {
  retries: 2,
  retryDelay: () => 2000, // try again after 2s
  retryCondition: error =>
    (error.response && error.response.status >= 500) ||
    (error.isAxiosError && !error.response), // 5xx error or network error occured
});

/**
 * The function to send the result to the server
 * and notify the user about the result of the request
 *
 * @param ticket {object} - object with the results
 * @param id {integer} - id of the ticket
 */
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
