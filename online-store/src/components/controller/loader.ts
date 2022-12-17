interface SourcesOptions {
    apiKey?: string;
    category?: string;
    language?: string;
    country?: string;
    q?: string;
    searchIn?: string;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    sortBy?: string;
    pageSize?: number;
    page?: number;
}
type RequestOptions = SourcesOptions;
// | EverythingOptions;

class Loader {
    baseLink: string;
    options: RequestOptions;
    constructor(baseLink: string, options: RequestOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: RequestOptions },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: { [x: string]: any; ok: any; status: number; statusText: string | undefined }) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: RequestOptions, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof RequestOptions]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: any, options: RequestOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
