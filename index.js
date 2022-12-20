const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
// const getTodosByIds = (ids) => {
//     const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//     Promise.all(requests)
//         .then((responses) => {
//             const dataResults = responses.map((data) => data.json());
//             return Promise.all(dataResults)
//         })
//         .then((allTasks) => {
//             console.log(allTasks);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     // console.log(requests)
// }
// getTodosByIds([43, 21, 55, 100, 10]);

const getTodosByIds = async (ids) => {
  try {
      const idResponses = await Promise.all(ids.map(id => fetch(`${TODOS_URL}/${id}`)))
     const responses = await Promise.all(idResponses.map(data => data.json()))
      console.log(responses)

  } catch (e) {
      console.log(e)
  } finally {
      console.log('finally')
  }
}

getTodosByIds([43, 21, 55, 100, 10])
