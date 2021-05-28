import Spotify from 'spotifydl-core'


const auth = {
    clientId: process.env.SPOTIFY_CLIENT_ID as string,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string
}

const spotify = new Spotify(auth)

export const getInfo = async (url: string, type: 'track' | 'playlist' | 'album' = 'track') => {
    const func = type === 'track' ? 'getTrack' : type === 'playlist' ? 'getPlaylist' : 'getAlbum'
    try {
        return await spotify[func](url)
    } catch (err) {
        console.log(err)
        return {
            message: 'Error occured fetching The given URL'
        }
    }
}
