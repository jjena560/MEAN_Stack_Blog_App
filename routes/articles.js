const express = require('express')
const router = express.Router()
const Article = require('./../models/blog')



router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})

router.get('/dummy', async (req, res) => {
    const article = await Article.find();
    res.send(article)
})


router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})

router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug });
    if (article == null) {
        res.redirect('/')
    }
    res.render('articles/show', { article: article })
})


router.post('/', async (req, res, next) => {
    req.article = new Article()
    next()
}, saveArticleAndRedirect('new'))

// router.post('/add-blog', async (req, res, next) => {
//     console.log("#####################", req.body);
//     req.article = new Article()
//     next()
// }, saveArticleAndRedirect('new'))


router.put('/:id', async (req, res, next) => {
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

function saveArticleAndRedirect(path) {
    return async (req, res) => {
        console.log(req.body);
        let article = req.article
        console.log("%*&%*&", article);
        article.title = req.body.title
        article.desc = req.body.desc
        // article.image = req.body.createdAt
        // article.likes = req.body.category

        try {
            console.log(article);
            article = await article.save()
            res.send()
        } catch (e) {

            res.send(e)
        }
    }
}

module.exports = router