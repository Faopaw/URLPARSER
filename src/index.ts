interface ParsedURL {
  protocol: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
  query: { [key: string]: string };
}
function urlParser(urlString: string): ParsedURL | null {
  if (!urlString) {
    return null; // error handling
  }

  try {
    const url = new URL(urlString);
    const { protocol, hostname, port, pathname, search, hash } = url;
    const query: { [key: string]: string } = {};
    url.searchParams.forEach((value, key) => {
      query[key] = value;
    });
    return {
      protocol,
      hostname,
      port,
      pathname,
      search,
      hash,
      query,
    };
  } catch (error) {
    return null;
  }
}

const parsedUrl = urlParser(
  "https://app.dataannotation.tech/worker_signup?projects=PROG_SA",
);

if (parsedUrl) {
  console.log(parsedUrl);
} else {
  console.error("Invalid Url");
}
