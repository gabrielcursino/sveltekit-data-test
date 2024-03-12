import type { PageServerLoad } from './$types';
 
export const load = (async () => {
  return {
    data: [1, 2, 3, 4, 5]
  }
}) satisfies PageServerLoad;
