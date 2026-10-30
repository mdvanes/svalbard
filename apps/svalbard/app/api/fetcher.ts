const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export const customFetch = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const response = await fetch(url, options);
  const data = await response.json();

  await wait(1000);

  return {
    status: response.status,
    data,
    headers: response.headers,
  } as T;
};

// export async function customFetch<T>(
//   url: string,
//   options?: RequestInit,
// ): Promise<T> {
//   const response = await fetch(url, options);

//   if (!response.ok) {
//     throw new Error(
//       `Request failed: ${response.status} ${response.statusText}`,
//     );
//   }

//   const data = await response.json();

//   // Modify every API response here
//   return data as T;
// }
