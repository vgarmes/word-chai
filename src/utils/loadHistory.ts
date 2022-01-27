function loadHistory(secret: string) {
  let data: { secret: string; history: Array<string> };
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
