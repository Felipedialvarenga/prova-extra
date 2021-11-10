export interface iCarCard {
    brand: string;
    model: string;
    picture: string;
    price: number;
    carClickHandler: (carModel: string) => void
}

export interface iDetailPictures {
    color: string;
    pic: string;
}

export interface iCarData {
    brand: string;
    catalogPicture: string;
    detailPictures: iDetailPictures[];
    logo: string;
    model: string;
    price: number;
}

export interface iCarsState {
    cars: iCarData[];
}

export interface iChosedPictureInfo {
    color: string;
    picNumber: string;
    picture: string
}