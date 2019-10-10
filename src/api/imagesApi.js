const url = `${process.env.REACT_APP_API_URL}/images`;

async function findAll() {
  try {
    const response = await fetch(url);
    const images = await response.json();
    return { images };
  } catch (e) {
    console.log(e);
    return { error: e.stack };
  }
}

export default {
  findAll,
};
