function saveHistory(secret: string, history: Array<string>) {
  let data = JSON.stringify({
    secret,
    history,
  });
  try {
    localStorage.setItem('data', data);
  } catch {}
}

export default saveHistory;
