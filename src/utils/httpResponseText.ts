async function httpResponseText(url: string) {
  const res: Response = await fetch(url);
  const text: string = await res.text();

  return text;
}