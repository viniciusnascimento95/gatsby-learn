const path = require('path');


exports.createPages = (graphql, actions) => {

    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const post = path.resolve('src/templates/post.js');

        resolve(
            graphql(
                `
                    {
                        site {
                            siteMetadata {
                                title
                                author
                            }
                        }
                    }

                `
            )
        ).then((result) => {
            if (result.erros) {
                reject(result.erros);
            }

                console.log(result.data);

        })
    })

};