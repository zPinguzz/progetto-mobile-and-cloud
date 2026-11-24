export interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
}


export const products: Product[] = [
    { id: 1, name: 'Paperella gialla', price: 5, img: 'duck1.png' },
    { id: 2, name: 'Paperella pirata', price: 7, img: 'duck2.png' },
    { id: 3, name: 'Paperella unicorno', price: 9, img: 'duck3.png' },
];