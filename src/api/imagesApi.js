const url = `${process.env.REACT_APP_API_URL}/images`;

async function all() {
  try {
    const response = await fetch(url);
    const images = await response.json();
    return { images };
  } catch (e) {
    console.log(e);
    return { error: e.stack };
  }
}

async function destory(id) {
  try {
    await fetch(`${url}/${id}`, { method: 'DELETE' });
  } catch (e) {
    console.log(e);
    return { error: e.stack };
  }
}

export default {
  all,
  destory,
};
