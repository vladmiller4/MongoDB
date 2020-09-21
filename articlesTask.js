const { mapArticle } = require('./util');

// #### Articles

// - Create 5 articles per each type (a, b, c)

async function articleTask1(articlesCollection) {
    const types = ['a', 'b', 'c'];
    const articles = [];
    let count = 0;
    types.map(t => {
        for (i = 0; i < 5; i++) {
            let article = mapArticle({ type: t });
            articles.push(article);
            count++;
        }
    })
    try {
        const {result} = await articlesCollection.insertMany(articles);
        console.log(`ArticleTask #1: Added ${result.n} articles`);
        console.log('Articles:', {...articles});
    } catch (err) {
      console.error(err);
    }
}

// - Find articles with type a, and update tag list with next value [‘tag1-a’, ‘tag2-a’, ‘tag3’]

async function articleTask2(articlesCollection) {
    try {
        const {result} = await articlesCollection.updateMany({ type: 'a'}, { $set: { tags: ['tag1-a', 'tag2-a', 'tag3']}});
        console.log(`ArticleTask #2: Updated ${result.nModified} articles`);
    } catch (err) {
        console.error(err);
    }
}

// - Add tags [‘tag2’, ‘tag3’, ‘super’] to other articles except articles from type a

async function articleTask3(articlesCollection) {
    try {
        const {result} = await articlesCollection.updateMany({ type: { $ne : 'a'}}, { $set: { tags: ['tag2', 'tag3', 'super']}});
        console.log(`ArticleTask #3: Updated ${result.nModified} articles`);
    } catch (err) {
        console.error(err);
    }
}

// - Find all articles that contains tags [tag2, tag1-a]

async function articleTask4(articlesCollection) {
    try {
        const result = await articlesCollection.find({tags: {$in: ['tag2', 'tag1-a']}}).toArray();
        console.log(`ArticleTask #4: Finded articles:`, result);
    } catch (err) {
        console.error(err);
    }
}

// - Pull [tag2, tag1-a] from all articles

async function articleTask5(articlesCollection) {
    try {
        const {result} = await articlesCollection.updateMany({}, {$pull: {tags: {$in: ['tag2', 'tag1-a']}}});
        console.log(`ArticleTask #5: Updated ${result.nModified} articles`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = { articleTask1, articleTask2, articleTask3, articleTask4, articleTask5 };