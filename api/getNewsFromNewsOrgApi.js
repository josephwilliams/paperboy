async function getNewsFromNewsOrgApi(db, requestUrl) {
  try {
    console.log('>> awaiting: ', requestUrl);
    const response = await fetch('requestUrlStr');
    const json = await response.json();
    const articles = json.articles;
    // TODO import dbClient; add functionality to check if articles
    // already exist in database
    db.collection(SNIPPETS_COLLECTION).insertMany(articles);
  }
  catch (error) {
    console.log('>> error for: ', requestUrl, error);
  }
}

module.exports = getNewsFromNewsOrgApi;
