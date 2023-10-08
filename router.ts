import { Codecs, Routeways } from 'ts-routeways'

export const route = Routeways().path({
  name: 'home',
  path: '/'
}).nest({
  name: 'podcast',
  path: '/podcast/:podcastId',
  pathVars: { podcastId: Codecs.String },
  subRoutes: Routeways().path({
    name: 'episode',
    path: '/episode/:episodeId',
    pathVars: { episodeId: Codecs.String },
  }),
}).build()

export default route
