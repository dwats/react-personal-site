import request from 'request-promise-native'
import qs from 'qs'

const podcastHost = 'https://2vb1l1d0i6.execute-api.us-east-1.amazonaws.com/dev/'

async function fetchPodcast(path='episodes', query={}) {
  const queryString = qs.stringify(query)
  const json = await request.get(`${podcastHost}${path}?${queryString}`)
  const content = JSON.parse(json)

  content.episodes.forEach(episode => {
    const regex = /(<([^>]+)>)/ig
    episode.description = episode.description.replace(regex, "")
  })

  return content
}

export default fetchPodcast
