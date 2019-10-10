const url = `${process.env.REACT_APP_API_URL}/messages`;

async function all() {
  try {
    const response = await fetch(url);
    const messages = await response.json();
    return { messages };
  } catch (e) {
    console.log(e);
    return { error: e.stack };
  }
}

export default {
  all,
};
