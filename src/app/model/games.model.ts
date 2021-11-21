export class Games {
    id: number = 1;
    title: string = '';
    description: string = '';
    image: string = '';
    price: number = 0;

    public constructor(
        fields?: {
            id?: number,
            title?: string,
            description?: string,
            image?: string,
            price?: number
        }) {
        if (fields) Object.assign(this, fields);
    }
}
