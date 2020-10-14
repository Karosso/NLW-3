import Image from '../models/Image';

export default {
    render(image: Image){
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`, /* Usar variaveis ambiente para deploy */
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}