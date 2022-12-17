import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: any | undefined) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: any | undefined) {
        let target = e.target as HTMLTemplateElement;
        const newsContainer = e.currentTarget as HTMLTemplateElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }

                return;
            }
            target = target.parentNode as HTMLTemplateElement;
        }
    }
}

export default AppController;
