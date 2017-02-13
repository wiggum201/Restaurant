export class AboutUsService{

    aboutUsObject: any = [
        {pic: "app/assets/images/aboutUs1.jpg"},
        {pic: "app/assets/images/aboutUs2.jpg"},
        {pic: "app/assets/images/aboutUs3.jpg"},
        {pic: "app/assets/images/aboutUs4.jpg"},
        {pic: "app/assets/images/aboutUs5.jpg"},
        {pic: "app/assets/images/aboutUs6.jpg"},
        {pic: "app/assets/images/aboutUs7.jpg"},
        {pic: "app/assets/images/aboutUs8.jpg"},
        {pic: "app/assets/images/aboutUs9.jpg"},
        {pic: "app/assets/images/aboutUs10.jpg"}
    ];

    getPictures():any{
        return this.aboutUsObject;
    }

}

