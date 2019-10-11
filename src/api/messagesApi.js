const url = `${process.env.REACT_APP_API_URL}/messages`;
const LIMIT = 40;
const allProps = { startAfterId: null };

async function all({ startAfterId } = allProps) {
  try {
    console.log(`${url}?limit=${LIMIT}&startAfterId=${startAfterId}`);
    const response = await fetch(
      `${url}?limit=${LIMIT}&startAfterId=${startAfterId}`,
    );
    const messages = await response.json();
    return { messages };
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
