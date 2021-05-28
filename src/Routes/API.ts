import { Router, Request, Response, NextFunction } from 'express'
import { getInfo } from '../Spotify'

const router = Router()

const validate = (req: Request, res: Response, next: NextFunction) => {
    const query = Object.keys(req.query)
    if (!query.includes('url'))
        return res.json({
            error: '"url" Query not found'
        })
    next()
}

router.use('/', validate)

router.get('/track', async (req, res) => res.json(await getInfo(req.query.url as string)))
router.get('/playlist', async (req, res) => res.json(await getInfo(req.query.url as string, 'playlist')))
router.get('/album', async (req, res) => res.json(await getInfo(req.query.url as string, 'album')))

export default router
