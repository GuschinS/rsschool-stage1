import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2335fb0913a44c03a20a84ca0c95b280', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
