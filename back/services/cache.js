const redis = require('redis');

const client = redis.createClient();

const PREFIX = 'apo_test:'; // mettre le nom de sa db à la place  d'apo_test
const PEREMPTION = 60 * 60; // 1 heure

const { promisify } = require("util");
const asyncClient = {
    get: promisify(client.get).bind(client),
    del: promisify(client.del).bind(client),
    exists: promisify(client.exists).bind(client),
    setex: promisify(client.setex).bind(client)
};

const keysIndex = [];

const flush = async (req, res, next) => {
    // vide tout

    /*let key;
    // tant qu'il y a des clés dans keysIndex
    while(key = keysIndex.shift()) {
        await asyncClient.del(key);
    }*/
    
    for (const key of keysIndex) {
        await asyncClient.del(key);
    }

    keysIndex.length = 0;

    // et passe la main
    next();
};

const cache = (duration = PEREMPTION) => async (req, res, next) => {
    // ex : on contacte GET /v1/posts/24
    const urlKey = PREFIX + req.url;

    // étape 0 : vérifier si c'est dans le cache
    
    if (await asyncClient.exists(urlKey)) {
        // on récupère dans le cache
        const cachedValue = await asyncClient.get(urlKey);

        // la cachedValue est une string JSON, pas un objet JS
        const value = JSON.parse(cachedValue);

        res.json(value);
    } else {
        // on met dans le cache
        // pour mettre les données dans le cache, il faudrait qu'on ait les données
        // pour avoir les données, il faudrait que le MW du controller ait déjà été appelé

        // attendez une minute ! quelle méthode est systématiquement utilisée par tous les middlewares de controller et à laquelle on passe systématiquement les données avec lesquelles on répond

        // on met de côté la méthode res.json originale, celle qui répond (et qui marche)
        const originalResDotJson = res.json.bind(res);

        res.json = async (responseData) => {
            const jsonData = JSON.stringify(responseData);

            await asyncClient.setex(urlKey, duration, jsonData);

            // après la mise en cache, on retient la clé
            keysIndex.push(urlKey);

            originalResDotJson(responseData);
        };

        next();
    }
};

module.exports = {
    flush,
    cache
}