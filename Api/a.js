function run(resps) {
    try {
        var responseApi = typeof resps == "string" ? JSON.parse(resps) : resps;

        var reps = []

        responseApi.forEach(function (rep) {
            reps.push({
                "header": {
                    "type": "application/vnd.lime.media-link+json",
                    "value": {
                        "title": rep.name,
                        "text": rep.description,
                        "type": "image/jpeg",
                        "uri": rep.ownerAvatarUrl
                    }
                }
            })
        });
        return JSON.stringify({
            "itemType": "application/vnd.lime.document-select+json",
            "items": reps
        })
    } catch (e) {
        return {}
    }
}