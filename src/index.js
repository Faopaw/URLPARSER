function urlParser(urlString) {
    if (!urlString) {
        return null; // error handling
    }
    try {
        var url = new URL(urlString);
        var protocol = url.protocol, hostname = url.hostname, port = url.port, pathname = url.pathname, search = url.search, hash = url.hash;
        var query_1 = {};
        url.searchParams.forEach(function (value, key) {
            query_1[key] = value;
        });
        return {
            protocol: protocol,
            hostname: hostname,
            port: port,
            pathname: pathname,
            search: search,
            hash: hash,
            query: query_1,
        };
    }
    catch (error) {
        return null;
    }
}
var parsedUrl = urlParser("https://app.dataannotation.tech/worker_signup?projects=PROG_SA");
if (parsedUrl) {
    console.log(parsedUrl);
}
else {
    console.error("Invalid Url");
}
