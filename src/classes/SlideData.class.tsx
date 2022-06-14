import { ImageSourcePropType } from 'react-native';

export class DataSlide {
    id?:number;
    title?: string;
    desc?: string;
    img?: ImageSourcePropType

    public constructor(init?: Partial<DataSlide>) {
        Object.assign(this, init);
    }
}



export function slideData() {
    const items: DataSlide[] = [
        {
            id:1,
            title: 'Titulo 1',
            desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
            img: require('../assets/slide-1.png'),
        },
        {
            id:2,
            title: 'Titulo 2',
            desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
            img: require('../assets/slide-2.png'),
        },
        {
            id:3,
            title: 'Titulo 3',
            desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
            img: require('../assets/slide-3.png'),
        },
    ];
    return items;
}
