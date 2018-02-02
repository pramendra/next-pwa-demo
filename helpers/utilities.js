// @flow

export const renderNull = () => null;

export async function fetchAPI(url: string) {
  const data = await window.fetch(url).then(res => res.json().then(d => d));
  return data;
}
