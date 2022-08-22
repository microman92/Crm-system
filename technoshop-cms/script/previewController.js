import { form, preview, image } from './elems.js';
import { toBase64 } from './utilus.js';
export const showPreview = (src) => {
    preview.style.display = 'block';
    preview.src = src;
}
export const hidePreview = () => {
    preview.style.display = '';
    preview.src = '';
}


export const previewController = () => {
    const imageFile = form.image;

    image.addEventListener('change', async () => {
        if (imageFile.files.length) {
            const src = await toBase64(image.files[0]);
            showPreview(src)
        }
    })
};
