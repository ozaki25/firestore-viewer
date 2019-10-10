const url = `${process.env.REACT_APP_API_URL}/messages`;

async function findAll() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    return { error: e.stack };
  }
}

export default {
  findAll,
};
