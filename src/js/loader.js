import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function startLoader() {
    Loading.dots({
        svgColor: 'var(--brand-orange-color)',
        svgSize: '100px',

    });
}

export function removeLoader() {
    Loading.remove();
}