const baseUrl = "https://api.discogs.com/"

export function getRecords() {
  return fetch (`${baseUrl}/releases/{release_id}{?curr_abbr}`)
  .then(res => res.json())
}

export function getRecord(apiUrl) {
  return fetch (`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}