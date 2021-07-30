async function getDataLocal<T>(pathRelative: string, varLS?: string): Promise<Array<T>> {
  const res: Response = await fetch(pathRelative);
  const dataRaw: string = await res.text();
  
  if(varLS === undefined) return JSON.parse(dataRaw);

  const dataLS: string | null = localStorage.getItem(varLS);
  
  if(dataLS === null || dataRaw.length > dataLS?.length){
    localStorage.setItem(varLS, dataRaw);
    return JSON.parse(dataRaw);
  }

  console.log('Get data of local storage');

  return JSON.parse(dataLS);  
};