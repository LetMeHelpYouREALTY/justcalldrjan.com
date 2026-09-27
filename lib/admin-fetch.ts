/** Fetch options for admin/v0 API routes protected by middleware basic auth. */
export const adminFetchInit: RequestInit = {
  credentials: 'include',
}
