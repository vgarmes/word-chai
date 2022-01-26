function loadHistory(secret: string) {
  let data;
  try {
    data = JSON.parse(localStorage.getItem('data'));
  } catch {}
  if (data != null) {
    if (data.secret === secret) {
      return data.history;
    }
  }
}

export default loadHistory;
